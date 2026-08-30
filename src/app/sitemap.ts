import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";
import { portfolioItems } from "@/data/portfolio";
import { blogPosts } from "@/data/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/blog",
    "/contact",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));

  const portfolioRoutes = portfolioItems.map((item) => ({
    url: `${siteConfig.url}/portfolio/${item.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticRoutes, ...portfolioRoutes, ...blogRoutes];
}
