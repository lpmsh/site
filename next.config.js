// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     mdxRs: true,
//   },
// };

// const withMDX = require("@next/mdx")();
// module.exports = withMDX(nextConfig);

// next.config.js
const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = withContentlayer(nextConfig)