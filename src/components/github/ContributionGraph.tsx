import type { ContributionWeek, MonthLabel } from "@/types/github";
import { HEAT_LEVEL_BG } from "@/constants/chart";
import { formatContributionDate } from "@/lib/contributions";
import { cn } from "@/lib/cn";

type ContributionGraphProps = {
  weeks: ContributionWeek[];
  months: MonthLabel[];
  total: number;
};

export default function ContributionGraph({ weeks, months, total }: ContributionGraphProps) {
  return (
    <div className="flex flex-col gap-5">
      <div className="-mx-1 overflow-x-auto px-1 pb-2">
        <div role="img" aria-label={`${total} contributions in the last year`} className="min-w-[44rem]">
          <div aria-hidden className="grid auto-cols-fr grid-flow-col gap-[3px]">
            {weeks.map((_, index) => {
              const month = months.find((item) => item.week === index);
              return (
                <span key={index} className="type-label relative h-5 text-label-tertiary">
                  {month && <span className="absolute left-0 whitespace-nowrap">{month.label}</span>}
                </span>
              );
            })}
          </div>
          <div aria-hidden className="mt-1 grid auto-cols-fr grid-flow-col grid-rows-7 gap-[3px]">
            {weeks.flatMap((week, weekIndex) =>
              week.map((day, dayIndex) =>
                day ? (
                  <span
                    key={day.date}
                    title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${formatContributionDate(day.date)}`}
                    className={cn(
                      "aspect-square rounded-[3px] transition-transform duration-200 ease-apple hover:scale-125 hover:ring-1 hover:ring-label/50",
                      HEAT_LEVEL_BG[day.level],
                    )}
                  />
                ) : (
                  <span key={`empty-${weekIndex}-${dayIndex}`} className="aspect-square" />
                ),
              ),
            )}
          </div>
        </div>
      </div>
      <div aria-hidden className="type-label flex items-center gap-2 self-end text-label-tertiary">
        <span>Less</span>
        {HEAT_LEVEL_BG.map((level) => (
          <span key={level} className={cn("size-3 rounded-[3px]", level)} />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}
