import type { MetadataRoute } from "next";
import { getAllProjects, getPublishedActualites } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://karamon-conseil-sarlu.com";
  const now = new Date();
  const locales = ["fr", "en"];

  const staticEntries: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 1,
  }));

  const projects = getAllProjects();
  const projectEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    projects.map((project) => ({
      url: `${baseUrl}/${locale}/projets/${project.slug}`,
      lastModified: new Date(project.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }))
  );

  const actualites = getPublishedActualites();
  const actualiteEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    actualites.map((actualite) => ({
      url: `${baseUrl}/${locale}/actualites/${actualite.slug}`,
      lastModified: new Date(actualite.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  return [...staticEntries, ...projectEntries, ...actualiteEntries];
}
