import { notFound } from "next/navigation";
import { getPost, getRelatedPosts } from "@/lib/blog";
import PostHeader from "@/components/blog/PostHeader";
import PostTags from "@/components/blog/PostTags";
import PostToc from "@/components/blog/PostToc";
import RelatedPosts from "@/components/blog/RelatedPosts";

type PostArticleProps = {
  slug: string;
};

export default async function PostArticle({ slug }: PostArticleProps) {
  const post = await getPost(slug);
  if (!post) notFound();

  const related = await getRelatedPosts(post);

  return (
    <>
      <PostHeader post={post} />
      <div className="mt-14 grid gap-14 md:mt-20 lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-20">
        <div className="min-w-0">
          <div className="prose-post" dangerouslySetInnerHTML={{ __html: post.html }} />
          {post.tags.length > 0 && <PostTags tags={post.tags} />}
        </div>
        {post.headings.length > 0 && <PostToc headings={post.headings} />}
      </div>
      {related.length > 0 && <RelatedPosts posts={related} />}
    </>
  );
}
