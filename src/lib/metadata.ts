import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
function getSiteUrl() {
  const raw = process.env.SITE_URL;
  if (!raw) return undefined;
  const url = new URL(raw);
  if (!["http:", "https:"].includes(url.protocol))
    throw new Error("SITE_URL must be an HTTP(S) origin");
  return new URL(url.origin);
}
export const siteUrl = getSiteUrl();
export function portfolioMetadata(locale: Locale): Metadata {
  const dict = getDictionary(locale);
  const path = locale === "en" ? "/en" : "/";
  return {
    title: dict.seo.title,
    description: dict.seo.description,
    metadataBase: siteUrl,
    alternates: siteUrl
      ? {
          canonical: path,
          languages: { "pt-BR": "/", en: "/en", "x-default": "/" },
        }
      : undefined,
    openGraph: {
      title: dict.seo.title,
      description: dict.seo.description,
      siteName: "GA. · Guilherme Aguiar",
      type: "website",
      locale: locale === "en" ? "en_US" : "pt_BR",
      alternateLocale: locale === "en" ? "pt_BR" : "en_US",
      url: siteUrl ? path : undefined,
      images: siteUrl
        ? [
            {
              url: "/og.png",
              width: 1200,
              height: 630,
              alt: "Guilherme Aguiar · Software Developer",
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: dict.seo.title,
      description: dict.seo.description,
      images: siteUrl ? ["/og.png"] : undefined,
    },
    robots: { index: true, follow: true },
  };
}
