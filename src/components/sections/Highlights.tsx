import { HIGHLIGHTS } from "@/data/profile";
import Reveal from "@/components/ui/Reveal";

export default function Highlights() {
  return (
    <section className="bg-canvas pb-20 md:pb-28" aria-label="Highlights">
      <Reveal className="wide-width">
        <dl className="grid grid-cols-1 gap-10 border-t border-hairline pt-10 md:grid-cols-3 md:gap-8">
          {HIGHLIGHTS.map(({ value, label }) => (
            <div key={label} className="flex flex-col gap-2">
              <dt className="type-body order-last max-w-56 text-label-secondary">{label}</dt>
              <dd className="type-headline text-metal">{value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
