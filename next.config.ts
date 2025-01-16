import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['assets.aceternity.com'],
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore linting during build process
  },
};

export default nextConfig;
