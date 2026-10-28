import { Suspense } from "react";
import type { Metadata } from "next";
import { getPost, postHref } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";
import PostArticle from "@/components/blog/PostArticle";
import PostSkeleton from "@/components/blog/PostSkeleton";
import "@/styles/prose.css";

export async function generateMetadata({ params }: PageProps<"/blogs/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Post not found", robots: { index: false, follow: false } };

  const path = postHref(post.slug);
  const base = pageMetadata({ title: post.title, description: post.description, path });
  const images = post.image.url ? [{ url: post.image.url, alt: post.image.alt || post.title }] : undefined;

  return {
    ...base,
    authors: [{ name: post.author }],
    keywords: post.tags,
    ...(post.noIndex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated,
      authors: [post.author],
      tags: post.tags,
      ...(images ? { images } : {}),
    },
    twitter: { ...base.twitter, ...(images ? { images } : {}) },
  };
}

export default function BlogPostPage({ params }: PageProps<"/blogs/[slug]">) {
  return (
    <article className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="page-width">
        <Suspense fallback={<PostSkeleton />}>
          {params.then(({ slug }) => (
            <PostArticle slug={slug} />
          ))}
        </Suspense>
      </div>
    </article>
  );
}
