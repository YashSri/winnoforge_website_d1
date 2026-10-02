import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  outputFileTracingRoot: rootDir,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "json.commudle.com",
      },
      {
        protocol: "https",
        hostname: "commudle.com",
      },
      {
        protocol: "https",
        hostname: "www.commudle.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/corporate", destination: "/collaborate", permanent: true },
      { source: "/contact", destination: "/collaborate", permanent: true },
    ];
  },
};

export default nextConfig;
