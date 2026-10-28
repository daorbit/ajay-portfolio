import { Mail } from "lucide-react";
import { PROFILE } from "@/data/profile";
import ContactForm from "@/components/forms/ContactForm";
import Reveal from "@/components/ui/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="hero-glow border-t border-hairline bg-canvas py-24 md:py-32 lg:py-40">
      <div className="wide-width grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal className="lg:pt-6">
          <p className="type-body mb-4 font-semibold text-link">Contact</p>
          <h2 className="type-hero text-balance">
            <span className="text-metal">Let&apos;s build</span>{" "}
            <span className="text-label-tertiary">something remarkable.</span>
          </h2>
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
        <Reveal className="overflow-hidden rounded-tile border border-hairline bg-surface">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
