import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PostMeta } from "@/types/blog";
import { BLOG_PATH } from "@/constants/cms";
import PostList from "@/components/blog/PostList";
import IndexLabel from "@/components/ui/IndexLabel";

type RelatedPostsProps = {
  posts: PostMeta[];
};

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  return (
    <section aria-labelledby="related-posts" className="mt-24 md:mt-32">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <IndexLabel>Keep reading</IndexLabel>
          <h2 id="related-posts" className="type-poster-md mt-6">
            More notes
          </h2>
        </div>
        <Link
          href={BLOG_PATH}
          className="type-label inline-flex items-center gap-2 text-accent transition-opacity duration-300 hover:opacity-70"
        >
          All posts
          <ArrowRight className="size-3.5" aria-hidden />
        </Link>
      </div>
      <PostList posts={posts} headingLevel="h3" />
    </section>
  );
}
