import { notFound } from "next/navigation";
import { BLOG_PATH } from "@/constants/cms";
import { getPost, getRelatedPosts, postHref } from "@/lib/blog";
import { blogPostingSchema, breadcrumbSchema, graph } from "@/lib/structuredData";
import PostHeader from "@/components/blog/PostHeader";
import PostTags from "@/components/blog/PostTags";
import RelatedPosts from "@/components/blog/RelatedPosts";
import JsonLd from "@/components/seo/JsonLd";

type PostArticleProps = {
  slug: string;
};

export default async function PostArticle({ slug }: PostArticleProps) {
  const post = await getPost(slug);
  if (!post) notFound();

  const related = await getRelatedPosts(post);

  return (
    <>
      <JsonLd
        data={graph(
          blogPostingSchema(post),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blogs", path: BLOG_PATH },
            { name: post.title, path: postHref(post.slug) },
          ]),
        )}
      />
      <PostHeader post={post} />
      <div className="mx-auto mt-14 w-full max-w-208 md:mt-20">
        <div className="prose-post" dangerouslySetInnerHTML={{ __html: post.html }} />
        {post.tags.length > 0 && <PostTags tags={post.tags} />}
      </div>
      {related.length > 0 && <RelatedPosts posts={related} />}
    </>
  );
}
