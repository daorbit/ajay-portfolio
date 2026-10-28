import { FEATURES, TOOLKIT } from "@/data/expertise";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";

export default function Expertise() {
  return (
    <Section
      id="expertise"
      tone="raised"
      width="wide"
      eyebrow="Expertise"
      title="Built right, from the inside out."
      intro="The craft behind every interface: architecture, speed, accessibility and code that lasts."
    >
      <ol className="grid grid-cols-1 gap-x-10 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map(({ title, description }, index) => (
          <li key={title} className="border-t border-hairline py-8">
            <Reveal>
              <span className="type-caption font-semibold text-link tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="type-subhead mt-4">{title}</h3>
              <p className="type-body mt-2 text-label-secondary">{description}</p>
            </Reveal>
          </li>
        ))}
      </ol>
      <Reveal className="mt-16 border-t border-hairline pt-10">
        <h3 className="type-caption font-semibold text-label-tertiary">Toolkit</h3>
        <ul className="type-subhead mt-5 flex flex-wrap gap-x-8 gap-y-3 text-label-secondary">
          {TOOLKIT.map((item) => (
            <li key={item} className="transition-colors duration-300 ease-apple hover:text-label">
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
