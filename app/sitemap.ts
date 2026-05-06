import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hrcompliance.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: SITE_URL, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/mcp`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/states`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/waitlist`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
