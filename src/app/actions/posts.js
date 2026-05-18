'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { connectToDatabase } from '@/lib/db';
import Blog from '@/lib/models/Blog';
import { getAdminOrNull } from '@/lib/auth';
import {
    sanitizeHtml,
    uniqueSlug,
    slugify,
    readingTimeFromHtml,
    excerptFromHtml,
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
 * Create or update a post. Used with useActionState — returns
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
        manualSlug ||
        (await uniqueSlug(title, id && /^[a-f\d]{24}$/i.test(id) ? id : null));

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

    try {
        await connectToDatabase();
        if (id && /^[a-f\d]{24}$/i.test(id)) {
            const existing = await Blog.findById(id);
            if (!existing) return { error: 'Post not found.' };
            if (status === 'published' && !existing.publishedAt) {
                data.publishedAt = new Date();
            }
            existing.set(data);
            await existing.save();
            revalidateBlog(existing.slug);
            if (existing.slug !== slug) revalidateBlog(slug);
        } else {
            if (status === 'published') data.publishedAt = new Date();
            await Blog.create(data);
            revalidateBlog(slug);
        }
    } catch (err) {
        if (err?.code === 11000) {
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
    if (id && /^[a-f\d]{24}$/i.test(id)) {
        await connectToDatabase();
        const doc = await Blog.findByIdAndDelete(id);
        if (doc) revalidateBlog(doc.slug);
    }
    revalidatePath('/admin/posts');
    redirect('/admin/posts');
}

export async function togglePublish(formData) {
    const admin = await getAdminOrNull();
    if (!admin) redirect('/admin/login');

    const id = String(formData.get('id') || '').trim();
    if (id && /^[a-f\d]{24}$/i.test(id)) {
        await connectToDatabase();
        const doc = await Blog.findById(id);
        if (doc) {
            if (doc.status === 'published') {
                doc.status = 'draft';
            } else {
                doc.status = 'published';
                if (!doc.publishedAt) doc.publishedAt = new Date();
            }
            await doc.save();
            revalidateBlog(doc.slug);
        }
    }
    revalidatePath('/admin/posts');
    redirect('/admin/posts');
}
