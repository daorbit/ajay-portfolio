import { HIGHLIGHTS } from "@/data/profile";
import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/motion/CountUp";

export default function Highlights() {
  return (
    <section className="border-t border-hairline bg-canvas py-16 md:py-20" aria-label="Highlights">
      <Reveal className="wide-width">
        <dl className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {HIGHLIGHTS.map(({ value, suffix, label }) => (
            <div key={label} className="flex flex-col items-center gap-2 text-center">
              <dt className="type-body order-last max-w-56 text-label-secondary">{label}</dt>
              <dd className="type-hero text-metal tabular-nums">
                <CountUp value={value} />
                {suffix}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
