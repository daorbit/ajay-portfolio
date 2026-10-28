import type { PostHeading } from "@/types/blog";
import { cn } from "@/lib/cn";

type PostTocProps = {
  headings: PostHeading[];
};

export default function PostToc({ headings }: PostTocProps) {
  return (
    <nav aria-label="On this page" className="hidden lg:sticky lg:top-28 lg:block lg:self-start">
      <p className="type-label border-b border-hairline pb-4 text-label-tertiary">On this page</p>
      <ol className="mt-4 flex flex-col gap-1">
        {headings.map(({ id, text, level }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={cn(
                "type-caption block py-1 text-label-secondary transition-colors duration-300 hover:text-accent",
                level === 3 && "pl-4",
              )}
            >
              {text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
