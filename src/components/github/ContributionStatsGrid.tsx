import type { ContributionStats } from "@/types/github";
import CountUp from "@/components/motion/CountUp";

type ContributionStatsGridProps = {
  stats: ContributionStats;
};

export default function ContributionStatsGrid({ stats }: ContributionStatsGridProps) {
  const items = [
    { label: "Total", value: <CountUp value={stats.total} />, unit: "last year" },
    { label: "This week", value: <CountUp value={stats.thisWeek} />, unit: "contributions" },
    { label: "Best day", value: <CountUp value={stats.bestDay} />, unit: "contributions" },
    { label: "Current streak", value: <CountUp value={stats.currentStreak} />, unit: "days" },
    { label: "Longest streak", value: <CountUp value={stats.longestStreak} />, unit: "days" },
    { label: "Average", value: stats.average, unit: "per day" },
  ];

  return (
    <dl className="grid grid-cols-2 border-t border-l border-hairline md:grid-cols-3">
      {items.map(({ label, value, unit }) => (
        <div key={label} className="flex flex-col gap-3 border-r border-b border-hairline p-5 md:p-8">
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
