import { TOOLKIT_LOGOS } from "@/data/toolkit";
import BrandLogo from "@/components/ui/BrandLogo";

export default function TechMarquee() {
  const loop = [...TOOLKIT_LOGOS, ...TOOLKIT_LOGOS];

  return (
    <section aria-label="Toolkit" className="border-t border-hairline bg-canvas py-12 md:py-16">
      <p className="type-caption mb-8 text-center font-semibold text-label-tertiary">
        The toolkit behind every build
      </p>
      <div className="mask-fade-x overflow-hidden">
        <ul className="flex w-max animate-marquee items-center gap-14 hover:[animation-play-state:paused] md:gap-20">
          {loop.map((logo, index) => (
            <li
              key={`${logo.title}-${index}`}
              aria-hidden={index >= TOOLKIT_LOGOS.length}
              className="flex items-center gap-3 text-label-tertiary transition-colors duration-300 ease-apple hover:text-label"
            >
              <BrandLogo logo={logo} className="size-7 md:size-8" />
              <span className="type-subhead">{logo.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
