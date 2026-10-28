import { TOOLKIT_LOGOS } from "@/data/toolkit";
import BrandLogo from "@/components/ui/BrandLogo";

const COPIES = [0, 1];

export default function TechMarquee() {
  return (
    <section aria-label="Toolkit" className="overflow-hidden border-y border-hairline py-5 md:py-7">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {COPIES.map((copy) => (
          <ul key={copy} aria-hidden={copy > 0} className="flex shrink-0 items-center">
            {TOOLKIT_LOGOS.map((logo) => (
              <li key={logo.title} className="type-poster-md flex items-center gap-[0.3em] pr-[0.6em]">
                <BrandLogo logo={logo} className="size-[0.55em] text-label-tertiary" />
                {logo.title}
                <span aria-hidden className="ml-[0.6em] size-[0.12em] rounded-full bg-accent" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
