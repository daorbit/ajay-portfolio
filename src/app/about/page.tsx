import type { Metadata } from "next";
import About from "@/components/sections/About";
import Expertise from "@/components/sections/Expertise";
import TechMarquee from "@/components/sections/TechMarquee";
import ContactCta from "@/components/sections/ContactCta";

export const metadata: Metadata = {
  title: "About",
  description: "Background, expertise and recognition.",
};

export default function AboutPage() {
  return (
    <>
      <About />
      <TechMarquee />
      <Expertise index="02" />
      <ContactCta index="03" />
    </>
  );
}
