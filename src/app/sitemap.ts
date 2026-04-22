import { MetadataRoute } from "next";

const locales = ["ko", "en", "ja", "zh"] as const;
const base = "https://tailbound.xyz";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${base}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: locale === "ko" ? 1.0 : 0.8,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `${base}/${l}`])),
    },
  }));
}
