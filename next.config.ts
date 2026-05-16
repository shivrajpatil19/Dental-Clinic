import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Dental-Clinic',
  assetPrefix: '/Dental-Clinic',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
