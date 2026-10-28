import { Suspense } from "react";
import type { Metadata } from "next";
import { getPost, postHref } from "@/lib/blog";
import PostArticle from "@/components/blog/PostArticle";
import PostSkeleton from "@/components/blog/PostSkeleton";
import "@/styles/prose.css";

export async function generateMetadata({ params }: PageProps<"/blogs/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Post not found" };

  const images = post.image.url ? [post.image.url] : undefined;

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: postHref(post.slug) },
    ...(post.noIndex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      modifiedTime: post.updated,
      authors: [post.author],
      tags: post.tags,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images,
    },
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
