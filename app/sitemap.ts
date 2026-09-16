import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";
import { programs } from "@/lib/programs-data";

const staticRoutes = [
  "",
  "/ecosystem",
  "/programs",
  "/citadel1",
  "/community",
  "/collaborate",
  "/mentors",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const programRoutes = programs.map((program) => `/programs/${program.slug}`);

  return [...staticRoutes, ...programRoutes].map((route) => ({
    url: `${SITE_URL}${route}`,
  }));
}
