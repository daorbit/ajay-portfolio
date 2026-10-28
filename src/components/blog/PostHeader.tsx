import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Post } from "@/types/blog";
import { BLOG_PATH } from "@/constants/cms";
import { formatPostDate } from "@/lib/blog";
import IndexLabel from "@/components/ui/IndexLabel";

type PostHeaderProps = {
  post: Post;
};

export default function PostHeader({ post }: PostHeaderProps) {
  const { title, description, date, readingMinutes, author, image } = post;

  return (
    <header>
      <Link
        href={BLOG_PATH}
        className="type-label inline-flex items-center gap-2 text-accent transition-opacity duration-300 hover:opacity-70"
      >
        <ArrowLeft className="size-3.5" aria-hidden />
        All posts
      </Link>
      <div className="mt-10 border-b border-hairline pb-5">
        <IndexLabel>
          {formatPostDate(date)} · {readingMinutes} min read
        </IndexLabel>
      </div>
      <h1 className="type-serif-md mt-10 max-w-5xl text-balance">{title}</h1>
      {description && <p className="type-intro mt-6 max-w-2xl text-label-secondary">{description}</p>}
      <p className="type-label mt-8 text-label-tertiary">
        By <span className="text-label">{author}</span>
      </p>
      {image.url && (
        <div className="relative mt-12 aspect-video overflow-hidden rounded-panel bg-canvas-raised md:mt-16">
          <Image
            src={image.url}
            alt={image.alt || title}
            fill
            preload
            sizes="(min-width: 1600px) 1440px, 100vw"
            className="object-cover"
          />
        </div>
      )}
    </header>
  );
}
