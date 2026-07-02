import 'server-only';
import { getSupabase, isValidId } from '@/lib/supabase';

/* ── Slug ──────────────────────────────────────────────── */
export function slugify(input = '') {
    return String(input)
        .toLowerCase()
        .trim()
        .replace(/['"]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .slice(0, 90);
}

/** Build a slug that is unique within the table. */
export async function uniqueSlug(title, excludeId = null) {
    const supabase = getSupabase();
    const base = slugify(title) || 'post';
    let slug = base;
    let n = 1;
    while (true) {
        let query = supabase.from('blogs').select('id').eq('slug', slug);
        if (excludeId) query = query.neq('id', excludeId);
        const { data } = await query.maybeSingle();
        if (!data) return slug;
        n += 1;
        slug = `${base}-${n}`;
    }
}

/* ── Reading time ──────────────────────────────────────── */
export function readingTimeFromHtml(html = '') {
    const text = String(html).replace(/<[^>]+>/g, ' ');
    const words = text.split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 200));
}

/* ── Excerpt ───────────────────────────────────────────── */
export function excerptFromHtml(html = '', max = 160) {
    const text = String(html)
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    if (text.length <= max) return text;
    return `${text.slice(0, max).replace(/\s+\S*$/, '')}…`;
}

/* ── HTML sanitiser (defense-in-depth for editor output) ─ */
export function sanitizeHtml(dirty = '') {
    let html = String(dirty);
    // Drop dangerous element blocks entirely.
    html = html.replace(
        /<\s*(script|style|iframe|object|embed|form|link|meta)\b[\s\S]*?<\s*\/\s*\1\s*>/gi,
        ''
    );
    // Drop self-closing / unclosed dangerous tags.
    html = html.replace(
        /<\s*(script|style|iframe|object|embed|form|link|meta)\b[^>]*\/?>/gi,
        ''
    );
    // Strip inline event handlers (onclick, onerror, …).
    html = html.replace(/\son\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, '');
    // Neutralise javascript:/data: URLs in href/src.
    html = html.replace(
        /(href|src)\s*=\s*("|')\s*(javascript|data):[^"']*\2/gi,
        '$1=$2#$2'
    );
    return html.trim();
}

/* ── Serialisation (Postgres row -> plain JSON) ────────── */
export function serializePost(row) {
    if (!row) return null;
    const p = row;
    const seo = p.seo && typeof p.seo === 'object' ? p.seo : {};
    return {
        id: String(p.id),
        title: p.title || '',
        slug: p.slug || '',
        excerpt: p.excerpt || '',
        content: p.content || '',
        coverImage: p.cover_image || '',
        coverImageAlt: p.cover_image_alt || '',
        category: p.category || 'General',
        tags: Array.isArray(p.tags) ? p.tags : [],
        author: p.author || 'Webspires Team',
        status: p.status || 'draft',
        featured: Boolean(p.featured),
        readingTime: p.reading_time || 1,
        views: p.views || 0,
        seo: {
            metaTitle: seo.metaTitle || '',
            metaDescription: seo.metaDescription || '',
            canonicalUrl: seo.canonicalUrl || '',
            ogImage: seo.ogImage || '',
            keywords: Array.isArray(seo.keywords) ? seo.keywords : [],
            noIndex: Boolean(seo.noIndex),
        },
        faqs: Array.isArray(p.faqs)
            ? p.faqs
                  .filter((f) => f && (f.question || f.answer))
                  .map((f) => ({
                      question: f.question || '',
                      answer: f.answer || '',
                  }))
            : [],
        publishedAt: p.published_at
            ? new Date(p.published_at).toISOString()
            : null,
        createdAt: p.created_at ? new Date(p.created_at).toISOString() : null,
        updatedAt: p.updated_at ? new Date(p.updated_at).toISOString() : null,
    };
}

/**
 * Map the camelCase post payload built by the save action to a
 * snake_case DB row. Only maps provided keys.
 */
export function postToRow(data = {}) {
    const row = {};
    const map = {
        title: 'title',
        slug: 'slug',
        excerpt: 'excerpt',
        content: 'content',
        coverImage: 'cover_image',
        coverImageAlt: 'cover_image_alt',
        category: 'category',
        tags: 'tags',
        author: 'author',
        status: 'status',
        featured: 'featured',
        readingTime: 'reading_time',
        views: 'views',
        seo: 'seo',
        faqs: 'faqs',
        publishedAt: 'published_at',
    };
    for (const [key, col] of Object.entries(map)) {
        if (data[key] !== undefined) row[col] = data[key];
    }
    return row;
}

/* ── Public reads ──────────────────────────────────────── */
export async function getPublishedPosts({
    page = 1,
    limit = 9,
    category = null,
    tag = null,
    search = null,
} = {}) {
    const supabase = getSupabase();
    const from = (Math.max(1, page) - 1) * limit;
    const to = from + limit - 1;

    let query = supabase
        .from('blogs')
        .select('*', { count: 'exact' })
        .eq('status', 'published');

    if (category) query = query.eq('category', category);
    if (tag) query = query.contains('tags', [tag]);
    if (search) {
        // Strip PostgREST/ilike control chars to prevent filter injection.
        const s = String(search).replace(/[%_,()\\]/g, ' ').trim();
        if (s) query = query.or(`title.ilike.%${s}%,excerpt.ilike.%${s}%`);
    }

    const { data, count } = await query
        .order('published_at', { ascending: false, nullsFirst: false })
        .order('created_at', { ascending: false })
        .range(from, to);

    const total = count || 0;
    return {
        posts: (data || []).map(serializePost),
        total,
        page: Math.max(1, page),
        pages: Math.max(1, Math.ceil(total / limit)),
    };
}

export async function getFeaturedPosts(limit = 3) {
    const supabase = getSupabase();
    const { data } = await supabase
        .from('blogs')
        .select('*')
        .eq('status', 'published')
        .eq('featured', true)
        .order('published_at', { ascending: false, nullsFirst: false })
        .limit(limit);
    return (data || []).map(serializePost);
}

export async function getPostBySlug(slug) {
    const supabase = getSupabase();
    const { data } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .maybeSingle();
    return serializePost(data);
}

export async function getRelatedPosts(post, limit = 3) {
    const supabase = getSupabase();
    const tags = Array.isArray(post.tags) ? post.tags : [];

    // Same category OR overlapping tags. Two safe queries merged in JS —
    // avoids building an .or() string from user-editable values.
    const [byCategory, byTags] = await Promise.all([
        post.category
            ? supabase
                  .from('blogs')
                  .select('*')
                  .eq('status', 'published')
                  .neq('slug', post.slug)
                  .eq('category', post.category)
                  .order('published_at', { ascending: false, nullsFirst: false })
                  .limit(limit)
            : Promise.resolve({ data: [] }),
        tags.length
            ? supabase
                  .from('blogs')
                  .select('*')
                  .eq('status', 'published')
                  .neq('slug', post.slug)
                  .overlaps('tags', tags)
                  .order('published_at', { ascending: false, nullsFirst: false })
                  .limit(limit)
            : Promise.resolve({ data: [] }),
    ]);

    const seen = new Set();
    const merged = [];
    for (const row of [...(byCategory.data || []), ...(byTags.data || [])]) {
        if (seen.has(row.id)) continue;
        seen.add(row.id);
        merged.push(row);
        if (merged.length >= limit) break;
    }
    return merged.map(serializePost);
}

export async function getAllPublishedSlugs() {
    const supabase = getSupabase();
    const { data } = await supabase
        .from('blogs')
        .select('slug, updated_at, published_at')
        .eq('status', 'published');
    return (data || []).map((d) => ({
        slug: d.slug,
        updatedAt: d.updated_at,
        publishedAt: d.published_at,
    }));
}

export async function getAllCategories() {
    const supabase = getSupabase();
    const { data } = await supabase
        .from('blogs')
        .select('category')
        .eq('status', 'published');
    const set = new Set();
    for (const r of data || []) if (r.category) set.add(r.category);
    return [...set];
}

export async function getCategoriesWithCounts() {
    const supabase = getSupabase();
    const { data } = await supabase
        .from('blogs')
        .select('category')
        .eq('status', 'published');
    const counts = new Map();
    for (const r of data || []) {
        const name = r.category || 'General';
        counts.set(name, (counts.get(name) || 0) + 1);
    }
    return [...counts.entries()]
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export async function getAllTags(limit = 30) {
    const supabase = getSupabase();
    const { data } = await supabase
        .from('blogs')
        .select('tags')
        .eq('status', 'published');
    const counts = new Map();
    for (const r of data || []) {
        for (const t of Array.isArray(r.tags) ? r.tags : []) {
            counts.set(t, (counts.get(t) || 0) + 1);
        }
    }
    return [...counts.entries()]
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name))
        .slice(0, limit);
}

export async function getLatestPosts(limit = 5, excludeSlug = null) {
    const supabase = getSupabase();
    let query = supabase
        .from('blogs')
        .select('*')
        .eq('status', 'published');
    if (excludeSlug) query = query.neq('slug', excludeSlug);
    const { data } = await query
        .order('published_at', { ascending: false, nullsFirst: false })
        .order('created_at', { ascending: false })
        .limit(limit);
    return (data || []).map(serializePost);
}

export async function incrementViews(slug) {
    const supabase = getSupabase();
    await supabase.rpc('increment_blog_views', { post_slug: slug });
}

/* ── Admin reads ───────────────────────────────────────── */
export async function getAllPostsAdmin() {
    const supabase = getSupabase();
    const { data } = await supabase
        .from('blogs')
        .select('*')
        .order('updated_at', { ascending: false });
    return (data || []).map(serializePost);
}

export async function getPostByIdAdmin(id) {
    if (!isValidId(id)) return null;
    const supabase = getSupabase();
    const { data } = await supabase
        .from('blogs')
        .select('*')
        .eq('id', id)
        .maybeSingle();
    return serializePost(data);
}

export async function getDashboardStats() {
    const supabase = getSupabase();
    const [total, published, drafts, viewsRes] = await Promise.all([
        supabase.from('blogs').select('id', { count: 'exact', head: true }),
        supabase
            .from('blogs')
            .select('id', { count: 'exact', head: true })
            .eq('status', 'published'),
        supabase
            .from('blogs')
            .select('id', { count: 'exact', head: true })
            .eq('status', 'draft'),
        supabase.from('blogs').select('views'),
    ]);
    const views = (viewsRes.data || []).reduce(
        (sum, r) => sum + (r.views || 0),
        0
    );
    return {
        total: total.count || 0,
        published: published.count || 0,
        drafts: drafts.count || 0,
        views,
    };
}
