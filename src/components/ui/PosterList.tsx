import { cn } from "@/lib/cn";
import { padIndex } from "@/lib/format";
import Reveal from "@/components/ui/Reveal";

export type PosterListItem = {
  title: string;
  detail?: string;
};

type PosterListProps = {
  items: PosterListItem[];
  size?: "md" | "sm";
};

export default function PosterList({ items, size = "md" }: PosterListProps) {
  return (
    <Reveal>
      <ol className="group/list border-t border-hairline">
        {items.map(({ title, detail }, index) => (
          <li
            key={title}
            className="group grid grid-cols-[2.5rem_1fr] items-center gap-x-4 gap-y-2 border-b border-hairline py-5 transition-opacity duration-500 ease-expo group-hover/list:opacity-35 hover:opacity-100 md:grid-cols-[4rem_1.4fr_1fr] md:gap-x-8 md:py-6"
          >
            <span className="type-label text-label-tertiary">{padIndex(index + 1)}</span>
            <h3
              className={cn(
                size === "md" ? "type-poster-md" : "type-poster-sm",
                "transition-transform duration-700 ease-expo group-hover:translate-x-3",
              )}
            >
              {title}
            </h3>
            {detail && (
              <p className="type-caption col-start-2 max-w-sm text-label-secondary md:col-start-3 md:justify-self-end md:text-right">
                {detail}
              </p>
            )}
          </li>
        ))}
      </ol>
    </Reveal>
  );
}
