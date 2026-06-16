'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { connectToDatabase } from '@/lib/db';
import Content from '@/lib/models/Content';
import { getAdminOrNull } from '@/lib/auth';
import { getSeedItems } from '@/lib/content';
import {
    CONTENT_TYPES,
    cleanContentData,
    slugify,
} from '@/lib/contentSchemas';

/* ── Revalidation ──────────────────────────────────────── */

function revalidateForType(typeKey) {
    const cfg = CONTENT_TYPES[typeKey];
    if (!cfg) return;
    if (cfg.indexPath) revalidatePath(cfg.indexPath);
    if (cfg.dynamicPath) revalidatePath(cfg.dynamicPath, 'page');
    for (const p of cfg.extraPaths || []) revalidatePath(p);
    revalidatePath('/sitemap.xml');
    revalidatePath(`/admin/content/${typeKey}`);
}

/* ── Helpers ───────────────────────────────────────────── */

/** Build a slug that is unique within a type. */
async function uniqueSlugForType(type, base, excludeId = null) {
    let slug = base || 'item';
    let n = 1;
    // eslint-disable-next-line no-constant-condition
    while (true) {
        const query = { type, slug };
        if (excludeId) query._id = { $ne: excludeId };
        const exists = await Content.exists(query);
        if (!exists) return slug;
        n += 1;
        slug = `${base}-${n}`;
    }
}

async function nextOrder(type) {
    const last = await Content.findOne({ type })
        .sort({ order: -1 })
        .select('order')
        .lean();
    return last ? (last.order || 0) + 1 : 0;
}

/* ── Create / update ───────────────────────────────────── */

/**
 * Used with useActionState — returns `{ error }` on failure, or
 * redirects to the type's admin list on success.
 */
export async function saveContentItem(_prevState, formData) {
    const admin = await getAdminOrNull();
    if (!admin) return { error: 'Not authorized. Please sign in again.' };

    const type = String(formData.get('type') || '').trim();
    const cfg = CONTENT_TYPES[type];
    if (!cfg) return { error: 'Unknown content type.' };

    const id = String(formData.get('id') || '').trim();

    let raw;
    try {
        raw = JSON.parse(String(formData.get('data') || '{}'));
    } catch {
        return { error: 'Invalid form data.' };
    }
    if (!raw || typeof raw !== 'object') raw = {};

    const data = cleanContentData(type, raw);

    // Required-field validation.
    for (const f of cfg.fields) {
        if (f.required && !String(data[f.name] || '').trim()) {
            return { error: `${f.label} is required.` };
        }
    }

    // Slug: explicit value, else derive from the configured source field.
    const manual = slugify(String(formData.get('slug') || ''));
    const base =
        manual ||
        slugify(String(data[cfg.slugFromField] || '')) ||
        (cfg.slugRequired ? '' : 'item');
    if (cfg.slugRequired && !base) {
        return { error: 'A slug is required (or fill in the title).' };
    }

    try {
        await connectToDatabase();

        if (id && /^[a-f\d]{24}$/i.test(id)) {
            const existing = await Content.findById(id);
            if (!existing || existing.type !== type) {
                return { error: 'Item not found.' };
            }
            const slug = await uniqueSlugForType(type, base, id);
            existing.slug = slug;
            existing.data = data;
            existing.markModified('data');
            await existing.save();
        } else {
            const slug = await uniqueSlugForType(type, base);
            const order = await nextOrder(type);
            await Content.create({ type, slug, order, data });
        }
    } catch (err) {
        if (err?.code === 11000) {
            return { error: 'An item with this slug already exists.' };
        }
        return { error: `Could not save: ${err.message}` };
    }

    revalidateForType(type);
    redirect(`/admin/content/${type}`);
}

/* ── Delete ────────────────────────────────────────────── */

export async function deleteContentItem(formData) {
    const admin = await getAdminOrNull();
    if (!admin) redirect('/admin/login');

    const type = String(formData.get('type') || '').trim();
    const id = String(formData.get('id') || '').trim();

    if (CONTENT_TYPES[type] && id && /^[a-f\d]{24}$/i.test(id)) {
        await connectToDatabase();
        await Content.findOneAndDelete({ _id: id, type });
        revalidateForType(type);
    }
    redirect(`/admin/content/${type}`);
}

/* ── Reorder (swap with neighbour) ─────────────────────── */

export async function moveContentItem(formData) {
    const admin = await getAdminOrNull();
    if (!admin) redirect('/admin/login');

    const type = String(formData.get('type') || '').trim();
    const id = String(formData.get('id') || '').trim();
    const direction = String(formData.get('direction') || '').trim();

    if (
        CONTENT_TYPES[type] &&
        id &&
        /^[a-f\d]{24}$/i.test(id) &&
        (direction === 'up' || direction === 'down')
    ) {
        await connectToDatabase();
        const items = await Content.find({ type })
            .sort({ order: 1, createdAt: 1 })
            .select('_id')
            .lean();
        const idx = items.findIndex((i) => String(i._id) === id);
        const swapIdx = direction === 'up' ? idx - 1 : idx + 1;
        if (idx !== -1 && swapIdx >= 0 && swapIdx < items.length) {
            // Swap positions, then renumber sequentially so the new order is
            // deterministic even if stored `order` values were not distinct.
            const reordered = [...items];
            [reordered[idx], reordered[swapIdx]] = [
                reordered[swapIdx],
                reordered[idx],
            ];
            await Promise.all(
                reordered.map((it, i) =>
                    Content.updateOne({ _id: it._id }, { order: i })
                )
            );
            revalidateForType(type);
        }
    }
    redirect(`/admin/content/${type}`);
}

/* ── Seed defaults ─────────────────────────────────────── */

async function seedType(type) {
    const cfg = CONTENT_TYPES[type];
    if (!cfg) return;
    await connectToDatabase();
    const count = await Content.countDocuments({ type });
    if (count > 0) return; // never overwrite existing content
    const seeds = getSeedItems(type);
    if (!seeds.length) return;
    await Content.insertMany(
        seeds.map((s) => ({
            type,
            slug: s.slug,
            order: s.order,
            data: s.data,
        }))
    );
}

export async function seedContentType(formData) {
    const admin = await getAdminOrNull();
    if (!admin) redirect('/admin/login');

    const type = String(formData.get('type') || '').trim();
    if (CONTENT_TYPES[type]) {
        await seedType(type);
        revalidateForType(type);
    }
    redirect(`/admin/content/${type}`);
}

export async function seedAllContent() {
    const admin = await getAdminOrNull();
    if (!admin) redirect('/admin/login');

    for (const type of Object.keys(CONTENT_TYPES)) {
        await seedType(type);
        revalidateForType(type);
    }
    redirect('/admin/content');
}
