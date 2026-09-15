import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  outputFileTracingRoot: rootDir,
  async redirects() {
    return [
      { source: "/corporate", destination: "/collaborate", permanent: true },
      { source: "/contact", destination: "/collaborate", permanent: true },
      { source: "/mentors", destination: "/community", permanent: true },
    ];
  },
};

export default nextConfig;
