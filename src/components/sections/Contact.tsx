import { Mail } from "lucide-react";
import { PROFILE } from "@/data/profile";
import ContactForm from "@/components/forms/ContactForm";
import AnimatedHeadline from "@/components/motion/AnimatedHeadline";
import Reveal from "@/components/ui/Reveal";

export default function Contact() {
  return (
    <section className="relative overflow-hidden bg-canvas py-20 md:py-28 lg:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[40%] -left-[10%] size-[44rem] animate-aurora rounded-full bg-accent/20 blur-[140px]"
      />
      <div className="wide-width relative grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <p className="type-body mb-4 font-semibold text-link">Contact</p>
          </Reveal>
          <AnimatedHeadline
            as="h1"
            className="type-hero text-balance"
            segments={[{ text: "Let's build" }, { text: "something remarkable.", muted: true }]}
          />
          <Reveal>
            <p className="type-intro mt-8 max-w-md text-label-secondary">
              Have a role or a project in mind? Tell me a little about it.
            </p>
            <a
              href={`mailto:${PROFILE.email}`}
              className="type-body mt-10 inline-flex items-center gap-2 text-link underline-offset-4 hover:underline"
            >
              <Mail className="size-4" aria-hidden />
              {PROFILE.email}
            </a>
          </Reveal>
        </div>
        <Reveal className="overflow-hidden rounded-tile border border-hairline bg-surface">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
