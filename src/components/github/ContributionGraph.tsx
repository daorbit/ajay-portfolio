import type { ContributionLevel, ContributionWeek, MonthLabel } from "@/types/github";
import { formatContributionDate } from "@/lib/contributions";
import { cn } from "@/lib/cn";

const LEVEL_CLASSES: Record<ContributionLevel, string> = {
  0: "bg-label/[0.06]",
  1: "bg-accent/35",
  2: "bg-accent/60",
  3: "bg-accent",
  4: "bg-link",
};

type ContributionGraphProps = {
  weeks: ContributionWeek[];
  months: MonthLabel[];
  total: number;
};

export default function ContributionGraph({ weeks, months, total }: ContributionGraphProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="overflow-x-auto pb-2">
        <div role="img" aria-label={`${total} contributions in the last year`} className="inline-flex flex-col gap-2">
          <div className="flex gap-1" aria-hidden>
            {weeks.map((_, index) => {
              const month = months.find((item) => item.week === index);
              return (
                <span key={index} className="type-micro relative h-4 w-3 text-label-tertiary">
                  {month && <span className="absolute left-0 whitespace-nowrap">{month.label}</span>}
                </span>
              );
            })}
          </div>
          <div className="flex gap-1" aria-hidden>
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {week.map((day, dayIndex) =>
                  day ? (
                    <span
                      key={day.date}
                      title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${formatContributionDate(day.date)}`}
                      className={cn(
                        "size-3 rounded-[3px] transition-transform duration-200 ease-apple hover:scale-125 hover:ring-1 hover:ring-label/50",
                        LEVEL_CLASSES[day.level],
                      )}
                    />
                  ) : (
                    <span key={`empty-${dayIndex}`} className="size-3" />
                  ),
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="type-micro flex items-center gap-2 text-label-tertiary" aria-hidden>
        <span>Less</span>
        {([0, 1, 2, 3, 4] as const).map((level) => (
          <span key={level} className={cn("size-3 rounded-[3px]", LEVEL_CLASSES[level])} />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}
