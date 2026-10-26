import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/metadata";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];
  const languages = {
    "pt-BR": new URL("/", siteUrl).href,
    en: new URL("/en", siteUrl).href,
  };
  return ["/", "/en"].map((path) => ({
    url: new URL(path, siteUrl).href,
    alternates: { languages },
  }));
}
