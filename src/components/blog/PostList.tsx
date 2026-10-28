import type { PostMeta } from "@/types/blog";
import PostRow from "@/components/blog/PostRow";
import Reveal from "@/components/ui/Reveal";

type PostListProps = {
  posts: PostMeta[];
  headingLevel?: "h2" | "h3";
};

export default function PostList({ posts, headingLevel }: PostListProps) {
  return (
    <Reveal>
      <ol className="border-t border-hairline">
        {posts.map((post, index) => (
          <PostRow key={post.slug} post={post} index={index + 1} headingLevel={headingLevel} />
        ))}
      </ol>
    </Reveal>
  );
}
