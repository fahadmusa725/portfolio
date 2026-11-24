import type { MetadataRoute } from "next";

import { siteUrl } from "@/content/site";
import { getCaseStudySlugs } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudySlugs = getCaseStudySlugs();

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudySlugs.map((slug) => ({
    url: `${siteUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...caseStudyRoutes,
  ];
}
