import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { PostMeta } from "@/types/blog";
import { formatPostDate, postHref } from "@/lib/blog";
import { padIndex } from "@/lib/format";

type PostRowProps = {
  post: PostMeta;
  index: number;
  headingLevel?: "h2" | "h3";
};

export default function PostRow({ post, index, headingLevel: Heading = "h2" }: PostRowProps) {
  const { slug, title, description, date, image } = post;

  return (
    <li className="border-b border-hairline">
      <Link
        href={postHref(slug)}
        prefetch
        className="group grid gap-5 py-8 md:grid-cols-[8rem_minmax(0,1fr)_14rem] md:gap-10 md:py-10 lg:grid-cols-[10rem_minmax(0,1fr)_18rem]"
      >
        <p className="type-label text-label-tertiary md:pt-2">
          {padIndex(index)} · {formatPostDate(date)}
        </p>
        <div>
          <Heading className="type-serif-sm text-balance transition-colors duration-300 group-hover:text-accent">
            {title}
          </Heading>
          {description && <p className="type-body mt-3 line-clamp-2 max-w-2xl text-label-secondary">{description}</p>}
          <span className="type-label mt-5 inline-flex items-center gap-1.5 text-accent">
            Read article
            <ArrowUpRight
              className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </span>
        </div>
        {image.url ? (
          <div className="relative order-first aspect-16/10 overflow-hidden rounded-panel bg-canvas-raised md:order-none">
            <Image
              src={image.url}
              alt={image.alt || title}
              fill
              sizes="(min-width: 1069px) 288px, (min-width: 735px) 224px, 100vw"
              className="object-cover transition-transform duration-1000 ease-expo group-hover:scale-[1.04]"
            />
          </div>
        ) : (
          <span aria-hidden className="hidden md:block" />
        )}
      </Link>
    </li>
  );
}
