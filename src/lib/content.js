import 'server-only';
import { getSupabase, isValidId } from '@/lib/supabase';
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
import { projectsData } from '@/data/projects';

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
    projects: projectsData.map((d, i) => ({
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

function serializeAdmin(row) {
    if (!row) return null;
    const d = row;
    return {
        id: String(d.id),
        type: d.type,
        slug: d.slug || '',
        order: typeof d.sort_order === 'number' ? d.sort_order : 0,
        data: d.data && typeof d.data === 'object' ? d.data : {},
        createdAt: d.created_at ? new Date(d.created_at).toISOString() : null,
        updatedAt: d.updated_at ? new Date(d.updated_at).toISOString() : null,
    };
}

/* ── Public reads (DB → fallback to seed) ──────────────── */

/**
 * All items for a type as plain page objects: `{ ...data, slug }` 
 * the exact shape the marketing pages already expect. Falls back to the
 * static seed when the DB is empty or unavailable.
 */
export async function getContentItems(type) {
    if (!CONTENT_TYPES[type]) return [];
    try {
        const supabase = getSupabase();
        const { data: docs, error } = await supabase
            .from('content')
            .select('slug, data')
            .eq('type', type)
            .order('sort_order', { ascending: true })
            .order('created_at', { ascending: true });
        if (error) throw error;
        if (docs && docs.length) {
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
    const supabase = getSupabase();
    const { data: docs } = await supabase
        .from('content')
        .select('*')
        .eq('type', type)
        .order('sort_order', { ascending: true })
        .order('created_at', { ascending: true });
    return (docs || []).map(serializeAdmin);
}

export async function getContentItemById(id) {
    if (!isValidId(id)) return null;
    const supabase = getSupabase();
    const { data: doc } = await supabase
        .from('content')
        .select('*')
        .eq('id', id)
        .maybeSingle();
    return serializeAdmin(doc);
}

export async function getContentCounts() {
    const supabase = getSupabase();
    const { data: rows } = await supabase.from('content').select('type');
    const map = {};
    for (const r of rows || []) map[r.type] = (map[r.type] || 0) + 1;
    const out = {};
    for (const key of CONTENT_TYPE_KEYS) out[key] = map[key] || 0;
    return out;
}
