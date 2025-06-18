import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://sefeoz.com"; // Domain'inizi buraya ekleyin
  
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/studio/", "/api/"], // Sanity Studio ve API rotalarını engelle
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
} 