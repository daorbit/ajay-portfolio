import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import EmptyPosts from "@/components/blog/EmptyPosts";
import PostList from "@/components/blog/PostList";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Notes on front-end engineering, performance and the products I build.",
};

export default async function BlogsPage() {
  const posts = await getAllPosts();

  return (
    <Section
      headingLevel="h1"
      index="Index"
      label="Blogs"
      title={[{ text: "Notes &" }, { text: "writing", muted: true }]}
      intro="Notes on front-end engineering, performance and the products I build."
    >
      {posts.length > 0 ? <PostList posts={posts} /> : <EmptyPosts />}
    </Section>
  );
}
