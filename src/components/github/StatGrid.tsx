import type { ReactNode } from "react";

export type StatItem = {
  label: string;
  value: ReactNode;
  unit: string;
};

type StatGridProps = {
  items: StatItem[];
};

export default function StatGrid({ items }: StatGridProps) {
  return (
    <dl className="grid grid-cols-2 border-t border-l border-hairline md:grid-cols-4">
      {items.map(({ label, value, unit }) => (
        <div key={label} className="flex flex-col gap-3 border-r border-b border-hairline p-5 md:p-7">
          <dt className="type-label text-label-tertiary">{label}</dt>
          <dd className="flex flex-wrap items-baseline gap-x-2">
            <span className="type-poster-md tabular-nums">{value}</span>
            <span className="type-label text-label-secondary">{unit}</span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
