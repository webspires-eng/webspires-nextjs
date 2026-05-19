// Allow next/image to optimise images served from the Cloudflare R2
// public bucket URL (host is read from env so it stays configurable).
const r2RemotePatterns = [];
try {
  if (process.env.R2_PUBLIC_URL) {
    const u = new URL(process.env.R2_PUBLIC_URL);
    r2RemotePatterns.push({
      protocol: u.protocol.replace(':', ''),
      hostname: u.hostname,
      pathname: '/**',
    });
  }
} catch {
  // Invalid/missing R2_PUBLIC_URL — skip (uploads still work, just no next/image optimisation).
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Compress responses
  compress: true,

  // Optimise images: allow modern formats, set sensible device sizes
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'webspires.co.uk',
        pathname: '/wp-content/uploads/**',
      },
      ...r2RemotePatterns,
    ],
  },

  // Strict mode for better React warnings
  reactStrictMode: true,

  // Experimental: optimise CSS
  experimental: {
    optimizeCss: false, // keep off unless critters is installed
  },

  // Permanent redirects: old keyword-stuffed service URLs (and the
  // previously-mismatched bare canonicals) → clean silo URLs.
  async redirects() {
    const map = [
      ['professional-seo-services', 'seo'],
      ['google-ads-management-services', 'google-ads'],
      ['meta-ads-agency-services', 'meta-ads'],
      ['shopify-development-services', 'shopify'],
      ['crm-development-services', 'crm-development'],
      ['social-media-management-services', 'social-media-marketing'],
      ['google-guarantee-services', 'google-guarantee'],
    ];

    const redirects = [];
    for (const [oldSlug, newSlug] of map) {
      // Old path under /services/
      redirects.push({
        source: `/services/${oldSlug}`,
        destination: `/services/${newSlug}`,
        permanent: true,
      });
      // Legacy bare path (matched the old, incorrect canonical)
      redirects.push({
        source: `/${oldSlug}`,
        destination: `/services/${newSlug}`,
        permanent: true,
      });
    }

    // Old singular services hub canonical
    redirects.push({
      source: '/service',
      destination: '/services',
      permanent: true,
    });

    return redirects;
  },

  // Security / performance headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      {
        // Cache static assets for 1 year
        source: '/images/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default nextConfig;
