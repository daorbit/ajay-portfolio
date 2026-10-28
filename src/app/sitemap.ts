import type { MetadataRoute } from "next";
import { STATIC_ROUTES } from "@/constants/site";
import { getAllPosts, postHref } from "@/lib/blog";
import { absoluteUrl } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  const pages: MetadataRoute.Sitemap = STATIC_ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: absoluteUrl(path),
    priority,
    changeFrequency,
  }));

  const articles: MetadataRoute.Sitemap = posts.map((post) => ({
    url: absoluteUrl(postHref(post.slug)),
    lastModified: post.updated,
    changeFrequency: "monthly",
    priority: 0.7,
    images: post.image.url ? [post.image.url] : undefined,
  }));

  return [...pages, ...articles];
}
