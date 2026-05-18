import { siteConfig } from '@/config/site';

export default function robots() {
    const base = siteConfig.url.replace(/\/$/, '');
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin', '/api/'],
        },
        sitemap: `${base}/sitemap.xml`,
        host: base,
    };
}
