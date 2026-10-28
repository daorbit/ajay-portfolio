import { BLOG_DESCRIPTION, BLOG_FEED_PATH, BLOG_PATH } from "@/constants/cms";
import { PROFILE } from "@/data/profile";
import { postHref } from "@/lib/blog";
import { absoluteUrl } from "@/lib/seo";
import type { PostMeta } from "@/types/blog";

const XML_ENTITIES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
};

function escapeXml(value: string) {
  return value.replace(/[&<>"']/g, (char) => XML_ENTITIES[char]);
}

function toItem(post: PostMeta) {
  const url = absoluteUrl(postHref(post.slug));
  return [
    "<item>",
    `<title>${escapeXml(post.title)}</title>`,
    `<link>${url}</link>`,
    `<guid isPermaLink="true">${url}</guid>`,
    `<description>${escapeXml(post.description)}</description>`,
    `<pubDate>${new Date(post.date).toUTCString()}</pubDate>`,
    `<author>${escapeXml(`${PROFILE.email} (${post.author})`)}</author>`,
    ...post.tags.map((tag) => `<category>${escapeXml(tag)}</category>`),
    "</item>",
  ].join("");
}

export function buildRssFeed(posts: PostMeta[]) {
  const lastBuild = posts[0]?.updated;
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    "<channel>",
    `<title>${escapeXml(`${PROFILE.name} · Blogs`)}</title>`,
    `<link>${absoluteUrl(BLOG_PATH)}</link>`,
    `<description>${escapeXml(BLOG_DESCRIPTION)}</description>`,
    "<language>en</language>",
    `<atom:link href="${absoluteUrl(BLOG_FEED_PATH)}" rel="self" type="application/rss+xml" />`,
    lastBuild ? `<lastBuildDate>${new Date(lastBuild).toUTCString()}</lastBuildDate>` : "",
    ...posts.map(toItem),
    "</channel>",
    "</rss>",
  ].join("");
}
