import type { Metadata } from "next";
import { BLOG_DESCRIPTION, BLOG_PATH } from "@/constants/cms";
import { getAllPosts } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";
import { blogSchema, breadcrumbSchema, graph } from "@/lib/structuredData";
import EmptyPosts from "@/components/blog/EmptyPosts";
import PostList from "@/components/blog/PostList";
import JsonLd from "@/components/seo/JsonLd";
import Section from "@/components/ui/Section";

export const metadata: Metadata = pageMetadata({
  title: "Blogs",
  description: BLOG_DESCRIPTION,
  path: BLOG_PATH,
});

export default async function BlogsPage() {
  const posts = await getAllPosts();

  return (
    <>
      <JsonLd
        data={graph(
          blogSchema(posts),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blogs", path: BLOG_PATH },
          ]),
        )}
      />
      <Section
        headingLevel="h1"
        index="Index"
        label="Blogs"
        title={[{ text: "Notes &" }, { text: "writing", muted: true }]}
        intro={BLOG_DESCRIPTION}
      >
        {posts.length > 0 ? <PostList posts={posts} /> : <EmptyPosts />}
      </Section>
    </>
  );
}
