import { HIGHLIGHTS } from "@/data/profile";
import CountUp from "@/components/motion/CountUp";

export default function HighlightStats() {
  return (
    <dl className="grid grid-cols-3 divide-x divide-hairline">
      {HIGHLIGHTS.map(({ value, suffix, label }) => (
        <div key={label} className="flex flex-col gap-3 px-4 first:pl-0 md:px-8">
          <dt className="type-label order-last text-label-tertiary">{label}</dt>
          <dd className="type-poster tabular-nums">
            <CountUp value={value} />
            {suffix}
          </dd>
        </div>
      ))}
    </dl>
  );
}
