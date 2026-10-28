import type { ContributionStats } from "@/types/github";
import SpotlightCard from "@/components/cards/SpotlightCard";
import CountUp from "@/components/motion/CountUp";

type ContributionStatsGridProps = {
  stats: ContributionStats;
};

export default function ContributionStatsGrid({ stats }: ContributionStatsGridProps) {
  const items = [
    { label: "Total", value: stats.total, unit: "last year" },
    { label: "This week", value: stats.thisWeek, unit: "contributions" },
    { label: "Best day", value: stats.bestDay, unit: "contributions" },
    { label: "Current streak", value: stats.currentStreak, unit: "days" },
    { label: "Longest streak", value: stats.longestStreak, unit: "days" },
  ];

  return (
    <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
      {items.map(({ label, value, unit }) => (
        <li key={label}>
          <SpotlightCard className="flex h-full flex-col gap-2 rounded-card p-5 md:p-6">
            <p className="type-caption text-label-secondary">{label}</p>
            <p className="flex flex-wrap items-baseline gap-x-1.5">
              <CountUp value={value} className="type-title text-metal tabular-nums" />
              <span className="type-micro text-label-tertiary">{unit}</span>
            </p>
          </SpotlightCard>
        </li>
      ))}
      <li>
        <SpotlightCard className="flex h-full flex-col gap-2 rounded-card p-5 md:p-6">
          <p className="type-caption text-label-secondary">Average</p>
          <p className="flex flex-wrap items-baseline gap-x-1.5">
            <span className="type-title text-metal tabular-nums">{stats.average}</span>
            <span className="type-micro text-label-tertiary">per day</span>
          </p>
        </SpotlightCard>
      </li>
    </ul>
  );
}
