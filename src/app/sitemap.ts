import { MetadataRoute } from "next";
import { seoConfig } from "@/lib/seo-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: seoConfig.baseUrl,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${seoConfig.baseUrl}/dashboard`,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${seoConfig.baseUrl}/login`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
