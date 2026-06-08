/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Photos are immutable, so cache optimized variants for a year (avoids
    // re-running the optimizer and keeps the edge cache warm).
    minimumCacheTTL: 31536000,
    // Trim the candidate widths to the ones this grid actually displays.
    // Fewer variants = fewer cold optimizations and a higher cache hit rate.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
      },
    ],
  },
};

module.exports = nextConfig;
