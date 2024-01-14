/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    // Allow images from all domains
    domains: ["example.com", "anotherdomain.com", "deepmind.google"],
  },
};

module.exports = nextConfig;
