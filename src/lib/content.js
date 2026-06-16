import 'server-only';
import { connectToDatabase } from '@/lib/db';
import Content from '@/lib/models/Content';
import {
    CONTENT_TYPES,
    CONTENT_TYPE_KEYS,
    slugify,
} from '@/lib/contentSchemas';

// Static data files act as the seed source AND the runtime fallback
// (so the site renders even before the DB is seeded or if it is
// unreachable during a build).
import { servicesData } from '@/data/services';
import { industriesData } from '@/data/industries';
import { locationsData } from '@/data/locations';
import { caseStudyCategories } from '@/data/caseStudyCategories';
import { googleAdsChildren } from '@/data/googleAdsChildren';
import { homeFaqs } from '@/data/homeFaqs';
import { servicePagesData } from '@/data/servicePages';

/* ── Seed source ───────────────────────────────────────── */

function stripSlug(obj) {
    const { slug, ...rest } = obj;
    return rest;
}

// Each entry: { slug, order, data } where `data` is the page object
// WITHOUT its slug (slug lives in its own column).
const SEED = {
    services: servicesData.map((d, i) => ({
        slug: d.slug,
        order: i,
        data: stripSlug(d),
    })),
    industries: industriesData.map((d, i) => ({
        slug: d.slug,
        order: i,
        data: stripSlug(d),
    })),
    locations: locationsData.map((d, i) => ({
        slug: d.slug,
        order: i,
        data: stripSlug(d),
    })),
    caseStudyCategories: caseStudyCategories.map((d, i) => ({
        slug: d.slug,
        order: i,
        data: stripSlug(d),
    })),
    googleAdsChildren: googleAdsChildren.map((d, i) => ({
        slug: d.slug,
        order: i,
        data: stripSlug(d),
    })),
    servicePages: servicePagesData.map((d, i) => ({
        slug: d.slug,
        order: i,
        data: stripSlug(d),
    })),
    homeFaqs: homeFaqs.map((d, i) => ({
        slug: slugify(d.question) || `faq-${i + 1}`,
        order: i,
        data: { question: d.question, answer: d.answer },
    })),
};

export function getSeedItems(type) {
    return SEED[type] || [];
}

export function seedCount(type) {
    return (SEED[type] || []).length;
}

/* ── Serialisation ─────────────────────────────────────── */

function serializeAdmin(doc) {
    if (!doc) return null;
    const d = typeof doc.toObject === 'function' ? doc.toObject() : doc;
    return {
        id: String(d._id),
        type: d.type,
        slug: d.slug || '',
        order: typeof d.order === 'number' ? d.order : 0,
        data: d.data && typeof d.data === 'object' ? d.data : {},
        createdAt: d.createdAt ? new Date(d.createdAt).toISOString() : null,
        updatedAt: d.updatedAt ? new Date(d.updatedAt).toISOString() : null,
    };
}

/* ── Public reads (DB → fallback to seed) ──────────────── */

/**
 * All items for a type as plain page objects: `{ ...data, slug }` —
 * the exact shape the marketing pages already expect. Falls back to the
 * static seed when the DB is empty or unavailable.
 */
export async function getContentItems(type) {
    if (!CONTENT_TYPES[type]) return [];
    try {
        await connectToDatabase();
        const docs = await Content.find({ type })
            .sort({ order: 1, createdAt: 1 })
            .lean();
        if (docs.length) {
            return docs.map((d) => ({ ...(d.data || {}), slug: d.slug }));
        }
    } catch {
        // fall through to seed
    }
    return getSeedItems(type).map((s) => ({ ...s.data, slug: s.slug }));
}

export async function getContentItem(type, slug) {
    const items = await getContentItems(type);
    return items.find((i) => i.slug === slug) || null;
}

/* ── Admin reads (DB only) ─────────────────────────────── */

export async function getContentItemsAdmin(type) {
    if (!CONTENT_TYPES[type]) return [];
    await connectToDatabase();
    const docs = await Content.find({ type })
        .sort({ order: 1, createdAt: 1 })
        .lean();
    return docs.map(serializeAdmin);
}

export async function getContentItemById(id) {
    if (!id || !/^[a-f\d]{24}$/i.test(id)) return null;
    await connectToDatabase();
    const doc = await Content.findById(id).lean();
    return serializeAdmin(doc);
}

export async function getContentCounts() {
    await connectToDatabase();
    const rows = await Content.aggregate([
        { $group: { _id: '$type', count: { $sum: 1 } } },
    ]);
    const map = {};
    for (const r of rows) map[r._id] = r.count;
    const out = {};
    for (const key of CONTENT_TYPE_KEYS) out[key] = map[key] || 0;
    return out;
}
