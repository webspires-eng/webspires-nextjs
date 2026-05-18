import { siteConfig } from '@/config/site';
import { servicesData } from '@/data/services';
import { getAllPublishedSlugs } from '@/lib/blog';

export const revalidate = 3600;

export default async function sitemap() {
    const base = siteConfig.url.replace(/\/$/, '');
    const now = new Date();

    const staticRoutes = [
        { path: '/', priority: 1.0, changeFrequency: 'weekly' },
        { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
        { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
        { path: '/projects', priority: 0.7, changeFrequency: 'monthly' },
        { path: '/blog', priority: 0.9, changeFrequency: 'daily' },
        { path: '/contact-us', priority: 0.6, changeFrequency: 'yearly' },
        { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
        { path: '/terms-conditions', priority: 0.3, changeFrequency: 'yearly' },
    ].map((r) => ({
        url: `${base}${r.path}`,
        lastModified: now,
        changeFrequency: r.changeFrequency,
        priority: r.priority,
    }));

    const serviceRoutes = servicesData.map((s) => ({
        url: `${base}/services/${s.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    let blogRoutes = [];
    try {
        const posts = await getAllPublishedSlugs();
        blogRoutes = posts.map((p) => ({
            url: `${base}/blog/${p.slug}`,
            lastModified: new Date(p.updatedAt || p.publishedAt || now),
            changeFrequency: 'weekly',
            priority: 0.7,
        }));
    } catch {
        // DB unavailable — ship the rest of the sitemap anyway.
    }

    return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
