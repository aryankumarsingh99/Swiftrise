import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "aarogyamastu.in",
      },
      {
        protocol: "https",
        hostname: "images.seeklogo.com",
      },
    ],
  },
};

export default nextConfig;
