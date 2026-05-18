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
