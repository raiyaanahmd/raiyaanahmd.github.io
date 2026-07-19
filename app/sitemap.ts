import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { projects } from "@/content/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudies = projects
    .filter((p) => p.featured && p.caseStudy)
    .map((p) => ({
      url: `${site.url}/projects/${p.slug}/`,
      lastModified: new Date(),
    }));

  return [
    { url: `${site.url}/`, lastModified: new Date() },
    { url: `${site.url}/projects/`, lastModified: new Date() },
    { url: `${site.url}/resume/`, lastModified: new Date() },
    ...caseStudies,
  ];
}
