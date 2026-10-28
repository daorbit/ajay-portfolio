import type { ChartDatum } from "@/types/github";
import { seriesBg } from "@/constants/chart";
import { cn } from "@/lib/cn";
import ShareBar from "@/components/github/ShareBar";

type RankedBarsProps = {
  data: ChartDatum[];
  caption: string;
};

export default function RankedBars({ data, caption }: RankedBarsProps) {
  const max = Math.max(1, ...data.map(({ value }) => value));

  return (
    <figure>
      <figcaption className="sr-only">{caption}</figcaption>
      <ShareBar data={data} />
      <ul className="flex flex-col gap-5">
        {data.map(({ label, value, hint }, index) => (
          <li key={label} className="grid grid-cols-[minmax(0,8rem)_1fr_auto] items-center gap-4">
            <span className="type-caption flex min-w-0 items-center gap-2.5">
              <span aria-hidden className={cn("size-2.5 shrink-0 rounded-full", seriesBg(index))} />
              <span className="truncate">{label}</span>
            </span>
            <span aria-hidden className="h-2.5 overflow-hidden rounded-full bg-graph-empty">
              <span
                className={cn("block h-full rounded-full", seriesBg(index))}
                style={{ width: `${(value / max) * 100}%` }}
              />
            </span>
            <span className="type-label min-w-16 text-right text-label-secondary tabular-nums">
              {hint ? `${hint} · ${value}` : value}
            </span>
          </li>
        ))}
      </ul>
    </figure>
  );
}
