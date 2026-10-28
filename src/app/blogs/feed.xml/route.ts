import { getAllPosts } from "@/lib/blog";
import { buildRssFeed } from "@/lib/rss";

export async function GET() {
  const posts = await getAllPosts();
  return new Response(buildRssFeed(posts), {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
