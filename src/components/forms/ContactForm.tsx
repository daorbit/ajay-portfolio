"use client";

import { CONTACT_FORM_ORIGIN, CONTACT_FORM_SRC } from "@/constants/contactForm";
import { useFormEmbed } from "@/hooks/useFormEmbed";

export default function ContactForm() {
  const ref = useFormEmbed(CONTACT_FORM_ORIGIN);

  return (
    <iframe
      ref={ref}
      src={CONTACT_FORM_SRC}
      title="Get in touch"
      loading="lazy"
      className="block h-[600px] w-full border-0"
    />
  );
}
