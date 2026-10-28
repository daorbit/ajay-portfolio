import { RECOGNITION } from "@/data/recognition";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";

export default function About() {
  return (
    <Section
      id="about"
      width="wide"
      eyebrow="About"
      title={[{ text: "Design-minded." }, { text: "Detail-obsessed.", muted: true }]}
    >
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
        <Reveal className="flex flex-col gap-6">
          <p className="type-intro text-label">
            I build fast, responsive interfaces with React, Next.js and TypeScript, with a focus on
            component-based architecture, server-side rendering and cross-browser performance.
          </p>
          <p className="type-callout text-label-secondary">
            I work closely with design, backend and AI teams in agile environments, writing clean,
            maintainable code and continuously improving page speed, usability and accessibility to
            ship polished, production-ready features.
          </p>
        </Reveal>
        <Reveal>
          <h3 className="type-caption font-semibold text-label-tertiary">Education and recognition</h3>
          <dl className="mt-4">
            {RECOGNITION.map(({ title, detail }) => (
              <div key={title} className="flex flex-col gap-1 border-t border-hairline py-5">
                <dt className="type-body font-semibold">{title}</dt>
                <dd className="type-caption text-label-secondary">{detail}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
