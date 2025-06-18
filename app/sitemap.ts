import { createClient } from "next-sanity";
import { MetadataRoute } from "next";

interface SanityPost {
  slug: {
    current: string;
  };
  publishedAt: string;
  _updatedAt?: string;
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-03-21",
  useCdn: false,
});

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://sefeoz.vercel.app";

  // Blog postlarını getir
  const posts = await client.fetch<SanityPost[]>(`
    *[_type == "post"] {
      slug,
      publishedAt,
      _updatedAt
    }
  `);

  // Statik sayfalar
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
  ];

  // Blog post sayfaları
  const blogPages = posts.map((post: SanityPost) => ({
    url: `${baseUrl}/blog/${post.slug.current}`,
    lastModified: new Date(post._updatedAt || post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
} 