import 'server-only';
import { connectToDatabase } from '@/lib/db';
import Blog from '@/lib/models/Blog';

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

/** Build a slug that is unique within the collection. */
export async function uniqueSlug(title, excludeId = null) {
    await connectToDatabase();
    const base = slugify(title) || 'post';
    let slug = base;
    let n = 1;
    while (true) {
        const query = { slug };
        if (excludeId) query._id = { $ne: excludeId };
        const exists = await Blog.exists(query);
        if (!exists) return slug;
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

/* ── Serialisation (Mongo doc -> plain JSON) ───────────── */
export function serializePost(doc) {
    if (!doc) return null;
    const p = typeof doc.toObject === 'function' ? doc.toObject() : doc;
    return {
        id: String(p._id),
        title: p.title || '',
        slug: p.slug || '',
        excerpt: p.excerpt || '',
        content: p.content || '',
        coverImage: p.coverImage || '',
        coverImageAlt: p.coverImageAlt || '',
        category: p.category || 'General',
        tags: Array.isArray(p.tags) ? p.tags : [],
        author: p.author || 'Webspires Team',
        status: p.status || 'draft',
        featured: Boolean(p.featured),
        readingTime: p.readingTime || 1,
        views: p.views || 0,
        seo: {
            metaTitle: p.seo?.metaTitle || '',
            metaDescription: p.seo?.metaDescription || '',
            canonicalUrl: p.seo?.canonicalUrl || '',
            ogImage: p.seo?.ogImage || '',
            keywords: p.seo?.keywords || [],
            noIndex: Boolean(p.seo?.noIndex),
        },
        faqs: Array.isArray(p.faqs)
            ? p.faqs
                  .filter((f) => f && (f.question || f.answer))
                  .map((f) => ({
                      question: f.question || '',
                      answer: f.answer || '',
                  }))
            : [],
        publishedAt: p.publishedAt ? new Date(p.publishedAt).toISOString() : null,
        createdAt: p.createdAt ? new Date(p.createdAt).toISOString() : null,
        updatedAt: p.updatedAt ? new Date(p.updatedAt).toISOString() : null,
    };
}

/* ── Public reads ──────────────────────────────────────── */
export async function getPublishedPosts({
    page = 1,
    limit = 9,
    category = null,
    tag = null,
    search = null,
} = {}) {
    await connectToDatabase();
    const filter = { status: 'published' };
    if (category) filter.category = category;
    if (tag) filter.tags = tag;
    if (search) {
        filter.$or = [
            { title: { $regex: search, $options: 'i' } },
            { excerpt: { $regex: search, $options: 'i' } },
        ];
    }

    const skip = (Math.max(1, page) - 1) * limit;
    const [docs, total] = await Promise.all([
        Blog.find(filter)
            .sort({ publishedAt: -1, createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .lean(),
        Blog.countDocuments(filter),
    ]);

    return {
        posts: docs.map(serializePost),
        total,
        page: Math.max(1, page),
        pages: Math.max(1, Math.ceil(total / limit)),
    };
}

export async function getFeaturedPosts(limit = 3) {
    await connectToDatabase();
    const docs = await Blog.find({ status: 'published', featured: true })
        .sort({ publishedAt: -1 })
        .limit(limit)
        .lean();
    return docs.map(serializePost);
}

export async function getPostBySlug(slug) {
    await connectToDatabase();
    const doc = await Blog.findOne({ slug, status: 'published' }).lean();
    return serializePost(doc);
}

export async function getRelatedPosts(post, limit = 3) {
    await connectToDatabase();
    const docs = await Blog.find({
        status: 'published',
        slug: { $ne: post.slug },
        $or: [{ category: post.category }, { tags: { $in: post.tags } }],
    })
        .sort({ publishedAt: -1 })
        .limit(limit)
        .lean();
    return docs.map(serializePost);
}

export async function getAllPublishedSlugs() {
    await connectToDatabase();
    const docs = await Blog.find({ status: 'published' })
        .select('slug updatedAt publishedAt')
        .lean();
    return docs.map((d) => ({
        slug: d.slug,
        updatedAt: d.updatedAt,
        publishedAt: d.publishedAt,
    }));
}

export async function getAllCategories() {
    await connectToDatabase();
    return Blog.distinct('category', { status: 'published' });
}

export async function getCategoriesWithCounts() {
    await connectToDatabase();
    const rows = await Blog.aggregate([
        { $match: { status: 'published' } },
        { $group: { _id: '$category', count: { $sum: 1 } } },
        { $sort: { count: -1, _id: 1 } },
    ]);
    return rows.map((r) => ({ name: r._id || 'General', count: r.count }));
}

export async function getAllTags(limit = 30) {
    await connectToDatabase();
    const rows = await Blog.aggregate([
        { $match: { status: 'published' } },
        { $unwind: '$tags' },
        { $group: { _id: '$tags', count: { $sum: 1 } } },
        { $sort: { count: -1, _id: 1 } },
        { $limit: limit },
    ]);
    return rows.map((r) => ({ name: r._id, count: r.count }));
}

export async function getLatestPosts(limit = 5, excludeSlug = null) {
    await connectToDatabase();
    const filter = { status: 'published' };
    if (excludeSlug) filter.slug = { $ne: excludeSlug };
    const docs = await Blog.find(filter)
        .sort({ publishedAt: -1, createdAt: -1 })
        .limit(limit)
        .lean();
    return docs.map(serializePost);
}

export async function incrementViews(slug) {
    await connectToDatabase();
    await Blog.updateOne({ slug }, { $inc: { views: 1 } });
}

/* ── Admin reads ───────────────────────────────────────── */
export async function getAllPostsAdmin() {
    await connectToDatabase();
    const docs = await Blog.find({}).sort({ updatedAt: -1 }).lean();
    return docs.map(serializePost);
}

export async function getPostByIdAdmin(id) {
    await connectToDatabase();
    if (!id || !/^[a-f\d]{24}$/i.test(id)) return null;
    const doc = await Blog.findById(id).lean();
    return serializePost(doc);
}

export async function getDashboardStats() {
    await connectToDatabase();
    const [total, published, drafts, viewsAgg] = await Promise.all([
        Blog.countDocuments({}),
        Blog.countDocuments({ status: 'published' }),
        Blog.countDocuments({ status: 'draft' }),
        Blog.aggregate([
            { $group: { _id: null, total: { $sum: '$views' } } },
        ]),
    ]);
    return {
        total,
        published,
        drafts,
        views: viewsAgg[0]?.total || 0,
    };
}
