import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: {
    loader: "default",
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
        port: "",
      },
    ],
  },
  eslint: { 
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
