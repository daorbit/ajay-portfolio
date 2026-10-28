import { PROFILE } from "@/data/profile";
import ContactForm from "@/components/forms/ContactForm";
import SocialLinks from "@/components/layout/SocialLinks";
import AnimatedHeadline from "@/components/motion/AnimatedHeadline";
import IndexLabel from "@/components/ui/IndexLabel";
import Reveal from "@/components/ui/Reveal";
import StatusDot from "@/components/ui/StatusDot";

export default function Contact() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="page-width">
        <Reveal className="flex items-center justify-between gap-6 border-b border-hairline pb-5">
          <IndexLabel>Index / Contact</IndexLabel>
          <StatusDot className="hidden md:inline-flex" />
        </Reveal>
        <AnimatedHeadline
          as="h1"
          trigger="load"
          className="type-poster-xl mt-12 md:mt-16"
          segments={[{ text: "Let's work" }, { text: "together.", muted: true }]}
        />
        <div className="mt-16 grid gap-14 border-t border-hairline pt-10 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <Reveal className="flex flex-col gap-10 lg:sticky lg:top-28 lg:self-start">
            <p className="type-intro max-w-md text-label-secondary">
              Have a role or a project in mind? Tell me a little about it and I&apos;ll get back to you.
            </p>
            <div>
              <p className="type-label text-label-tertiary">Email</p>
              <a
                href={`mailto:${PROFILE.email}`}
                className="type-serif-sm mt-3 inline-block break-all italic transition-colors duration-300 hover:text-link"
              >
                {PROFILE.email}
              </a>
            </div>
            <div>
              <p className="type-label text-label-tertiary">Elsewhere</p>
              <SocialLinks className="mt-3 flex-col" />
            </div>
          </Reveal>
          <Reveal className="overflow-hidden rounded-panel border border-hairline bg-surface">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
