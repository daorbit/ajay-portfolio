import type { ChartDatum } from "@/types/github";
import { seriesBg } from "@/constants/chart";
import { cn } from "@/lib/cn";

type ShareBarProps = {
  data: ChartDatum[];
};

export default function ShareBar({ data }: ShareBarProps) {
  const total = data.reduce((sum, { value }) => sum + value, 0) || 1;

  return (
    <div aria-hidden className="mb-8 flex h-3 gap-0.5 overflow-hidden rounded-full">
      {data.map(({ label, value }, index) => (
        <span
          key={label}
          title={`${label}: ${Math.round((value / total) * 100)}%`}
          className={cn("h-full first:rounded-l-full last:rounded-r-full", seriesBg(index))}
          style={{ width: `${(value / total) * 100}%` }}
        />
      ))}
    </div>
  );
}
