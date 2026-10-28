import { PROFILE } from "@/data/profile";
import { RECOGNITION } from "@/data/recognition";
import Avatar from "@/components/layout/Avatar";
import HighlightStats from "@/components/sections/HighlightStats";
import PosterList from "@/components/ui/PosterList";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import StatusDot from "@/components/ui/StatusDot";

export default function About() {
  return (
    <Section
      headingLevel="h1"
      index="Index"
      label="About"
      title={[{ text: "Design-minded." }, { text: "Detail-obsessed.", muted: true }]}
      intro="I build fast, responsive interfaces with React, Next.js and TypeScript, with a focus on component architecture, server-side rendering and cross-browser performance."
    >
      <div className="grid gap-16 border-t border-hairline pt-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <Reveal className="flex flex-col items-start gap-8">
          <div className="flex items-center gap-4">
            <Avatar />
            <div>
              <p className="type-label">{PROFILE.name}</p>
              <p className="type-label text-label-tertiary">{PROFILE.role}</p>
            </div>
          </div>
          <p className="type-intro text-label-secondary">
            I work closely with design, backend and AI teams in agile environments, writing clean, maintainable code and
            continuously improving page speed, usability and accessibility to ship polished, production-ready features.
          </p>
          <StatusDot />
        </Reveal>
        <div className="flex flex-col gap-16">
          <Reveal>
            <HighlightStats />
          </Reveal>
          <div>
            <Reveal>
              <p className="type-label mb-6 text-label-tertiary">Education and recognition</p>
            </Reveal>
            <PosterList size="sm" items={RECOGNITION} />
          </div>
        </div>
      </div>
    </Section>
  );
}
