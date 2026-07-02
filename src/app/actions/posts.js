'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { getSupabase, isValidId, UNIQUE_VIOLATION } from '@/lib/supabase';
import { getAdminOrNull } from '@/lib/auth';
import {
    sanitizeHtml,
    uniqueSlug,
    slugify,
    readingTimeFromHtml,
    excerptFromHtml,
    postToRow,
} from '@/lib/blog';

function parseList(value) {
    return String(value || '')
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);
}

function revalidateBlog(slug) {
    revalidatePath('/blog');
    revalidatePath('/blog/[slug]', 'page');
    if (slug) revalidatePath(`/blog/${slug}`);
    revalidatePath('/sitemap.xml');
}

/**
 * Create or update a post. Used with useActionState returns
 * `{ error }` on failure, redirects to /admin/posts on success.
 */
export async function savePost(_prevState, formData) {
    const admin = await getAdminOrNull();
    if (!admin) return { error: 'Not authorized. Please sign in again.' };

    const id = String(formData.get('id') || '').trim();
    const title = String(formData.get('title') || '').trim();
    const rawContent = String(formData.get('content') || '');

    if (!title) return { error: 'Title is required.' };
    if (!rawContent || rawContent.replace(/<[^>]+>/g, '').trim().length === 0) {
        return { error: 'Content cannot be empty.' };
    }

    const content = sanitizeHtml(rawContent);
    const status =
        String(formData.get('status') || 'draft') === 'published'
            ? 'published'
            : 'draft';

    const manualSlug = slugify(String(formData.get('slug') || ''));
    const slug =
        manualSlug || (await uniqueSlug(title, isValidId(id) ? id : null));

    const excerpt =
        String(formData.get('excerpt') || '').trim() ||
        excerptFromHtml(content);

    const seoKeywords = parseList(formData.get('seoKeywords'));

    let faqs = [];
    try {
        const parsed = JSON.parse(String(formData.get('faqs') || '[]'));
        if (Array.isArray(parsed)) {
            faqs = parsed
                .map((f) => ({
                    question: String(f?.question || '').trim(),
                    answer: String(f?.answer || '').trim(),
                }))
                .filter((f) => f.question && f.answer);
        }
    } catch {
        faqs = [];
    }

    const data = {
        title,
        slug,
        excerpt,
        content,
        coverImage: String(formData.get('coverImage') || '').trim(),
        coverImageAlt: String(formData.get('coverImageAlt') || '').trim(),
        category: String(formData.get('category') || 'General').trim() || 'General',
        tags: parseList(formData.get('tags')),
        author:
            String(formData.get('author') || '').trim() || 'Webspires Team',
        status,
        featured: formData.get('featured') === 'on',
        faqs,
        readingTime: readingTimeFromHtml(content),
        seo: {
            metaTitle: String(formData.get('seoTitle') || '').trim(),
            metaDescription: String(formData.get('seoDescription') || '').trim(),
            canonicalUrl: String(formData.get('seoCanonical') || '').trim(),
            ogImage: String(formData.get('seoOgImage') || '').trim(),
            keywords: seoKeywords,
            noIndex: formData.get('seoNoIndex') === 'on',
        },
    };

    const supabase = getSupabase();
    try {
        if (isValidId(id)) {
            const { data: existing, error: findErr } = await supabase
                .from('blogs')
                .select('slug, published_at')
                .eq('id', id)
                .maybeSingle();
            if (findErr) throw findErr;
            if (!existing) return { error: 'Post not found.' };
            if (status === 'published' && !existing.published_at) {
                data.publishedAt = new Date().toISOString();
            }
            const { error } = await supabase
                .from('blogs')
                .update(postToRow(data))
                .eq('id', id);
            if (error) throw error;
            revalidateBlog(existing.slug);
            if (existing.slug !== slug) revalidateBlog(slug);
        } else {
            if (status === 'published') {
                data.publishedAt = new Date().toISOString();
            }
            const { error } = await supabase
                .from('blogs')
                .insert(postToRow(data));
            if (error) throw error;
            revalidateBlog(slug);
        }
    } catch (err) {
        if (err?.code === UNIQUE_VIOLATION) {
            return { error: 'A post with this slug already exists.' };
        }
        return { error: `Could not save post: ${err.message}` };
    }

    revalidatePath('/admin/posts');
    redirect('/admin/posts');
}

export async function deletePost(formData) {
    const admin = await getAdminOrNull();
    if (!admin) redirect('/admin/login');

    const id = String(formData.get('id') || '').trim();
    if (isValidId(id)) {
        const supabase = getSupabase();
        const { data: doc } = await supabase
            .from('blogs')
            .delete()
            .eq('id', id)
            .select('slug')
            .maybeSingle();
        if (doc) revalidateBlog(doc.slug);
    }
    revalidatePath('/admin/posts');
    redirect('/admin/posts');
}

export async function togglePublish(formData) {
    const admin = await getAdminOrNull();
    if (!admin) redirect('/admin/login');

    const id = String(formData.get('id') || '').trim();
    if (isValidId(id)) {
        const supabase = getSupabase();
        const { data: doc } = await supabase
            .from('blogs')
            .select('slug, status, published_at')
            .eq('id', id)
            .maybeSingle();
        if (doc) {
            const update =
                doc.status === 'published'
                    ? { status: 'draft' }
                    : {
                          status: 'published',
                          published_at:
                              doc.published_at || new Date().toISOString(),
                      };
            await supabase.from('blogs').update(update).eq('id', id);
            revalidateBlog(doc.slug);
        }
    }
    revalidatePath('/admin/posts');
    redirect('/admin/posts');
}
