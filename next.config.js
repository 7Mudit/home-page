/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    // Allow images from all domains
    domains: ["example.com", "anotherdomain.com", "deepmind.google"],
  },
};

module.exports = nextConfig;
