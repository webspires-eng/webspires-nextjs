'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { getSupabase, isValidId, UNIQUE_VIOLATION } from '@/lib/supabase';
import { getAdminOrNull } from '@/lib/auth';
import { getSeedItems } from '@/lib/content';
import { sanitizeHtml } from '@/lib/blog';
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
    const supabase = getSupabase();
    let slug = base || 'item';
    let n = 1;
    while (true) {
        let query = supabase
            .from('content')
            .select('id')
            .eq('type', type)
            .eq('slug', slug);
        if (excludeId) query = query.neq('id', excludeId);
        const { data } = await query.maybeSingle();
        if (!data) return slug;
        n += 1;
        slug = `${base}-${n}`;
    }
}

async function nextOrder(type) {
    const supabase = getSupabase();
    const { data: last } = await supabase
        .from('content')
        .select('sort_order')
        .eq('type', type)
        .order('sort_order', { ascending: false })
        .limit(1)
        .maybeSingle();
    return last ? (last.sort_order || 0) + 1 : 0;
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

    // Sanitise rich-text (HTML) fields server-side; drop visually-empty ones.
    for (const f of cfg.fields) {
        if (f.type !== 'richtext') continue;
        const clean = sanitizeHtml(data[f.name] || '');
        data[f.name] = clean.replace(/<[^>]+>/g, '').trim() ? clean : '';
    }

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

    const supabase = getSupabase();
    try {
        if (isValidId(id)) {
            const { data: existing } = await supabase
                .from('content')
                .select('id, type')
                .eq('id', id)
                .maybeSingle();
            if (!existing || existing.type !== type) {
                return { error: 'Item not found.' };
            }
            const slug = await uniqueSlugForType(type, base, id);
            const { error } = await supabase
                .from('content')
                .update({ slug, data })
                .eq('id', id);
            if (error) throw error;
        } else {
            const slug = await uniqueSlugForType(type, base);
            const order = await nextOrder(type);
            const { error } = await supabase
                .from('content')
                .insert({ type, slug, sort_order: order, data });
            if (error) throw error;
        }
    } catch (err) {
        if (err?.code === UNIQUE_VIOLATION) {
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

    if (CONTENT_TYPES[type] && isValidId(id)) {
        const supabase = getSupabase();
        await supabase.from('content').delete().eq('id', id).eq('type', type);
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
        isValidId(id) &&
        (direction === 'up' || direction === 'down')
    ) {
        const supabase = getSupabase();
        const { data: items } = await supabase
            .from('content')
            .select('id')
            .eq('type', type)
            .order('sort_order', { ascending: true })
            .order('created_at', { ascending: true });
        const list = items || [];
        const idx = list.findIndex((i) => String(i.id) === id);
        const swapIdx = direction === 'up' ? idx - 1 : idx + 1;
        if (idx !== -1 && swapIdx >= 0 && swapIdx < list.length) {
            // Swap positions, then renumber sequentially so the new order is
            // deterministic even if stored sort_order values were not distinct.
            const reordered = [...list];
            [reordered[idx], reordered[swapIdx]] = [
                reordered[swapIdx],
                reordered[idx],
            ];
            await Promise.all(
                reordered.map((it, i) =>
                    supabase
                        .from('content')
                        .update({ sort_order: i })
                        .eq('id', it.id)
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
    const supabase = getSupabase();
    const { count } = await supabase
        .from('content')
        .select('id', { count: 'exact', head: true })
        .eq('type', type);
    if (count > 0) return; // never overwrite existing content
    const seeds = getSeedItems(type);
    if (!seeds.length) return;
    await supabase.from('content').insert(
        seeds.map((s) => ({
            type,
            slug: s.slug,
            sort_order: s.order,
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
