// Always reference the canonical production domain so crawlers never get
// pointed at a dev/local sitemap URL.
const CANONICAL_BASE = (
    process.env.NEXT_PUBLIC_BASE_URL || 'https://webspires.co.uk'
).replace(/\/$/, '');

export default function robots() {
    const base = CANONICAL_BASE;
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
