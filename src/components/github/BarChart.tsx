import type { ChartDatum } from "@/types/github";
import { cn } from "@/lib/cn";

type BarChartProps = {
  data: ChartDatum[];
  unit: string;
  caption: string;
};

export default function BarChart({ data, unit, caption }: BarChartProps) {
  const max = Math.max(1, ...data.map(({ value }) => value));
  const peak = Math.max(...data.map(({ value }) => value));

  return (
    <figure>
      <div aria-hidden className="flex h-48 items-end gap-0.5 border-b border-hairline-strong md:h-56">
        {data.map(({ label, value, hint }) => {
          const isPeak = value === peak && value > 0;
          return (
            <div key={label} className="group relative flex h-full flex-1 items-end justify-center px-px">
              <div
                className="relative w-full max-w-10 rounded-t-[4px] bg-series-1 transition-opacity duration-200 group-hover:opacity-75"
                style={{ height: `${(value / max) * 100}%` }}
              >
                <span
                  className={cn(
                    "type-label pointer-events-none absolute bottom-full left-1/2 mb-1.5 -translate-x-1/2 whitespace-nowrap transition-opacity duration-200",
                    isPeak ? "text-label" : "rounded bg-label px-2 py-0.5 text-canvas opacity-0 group-hover:opacity-100",
                  )}
                >
                  {isPeak ? value : `${hint ?? label} · ${value}`}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div aria-hidden className="mt-2 flex gap-0.5">
        {data.map(({ label }) => (
          <span key={label} className="type-label flex-1 text-center text-label-tertiary">
            {label.slice(0, 3)}
          </span>
        ))}
      </div>
      <table className="sr-only">
        <caption>{caption}</caption>
        <thead>
          <tr>
            <th scope="col">Period</th>
            <th scope="col">{unit}</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ label, value, hint }) => (
            <tr key={label}>
              <th scope="row">{hint ?? label}</th>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}
