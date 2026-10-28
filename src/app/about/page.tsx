import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph, personSchema, profilePageSchema } from "@/lib/structuredData";
import About from "@/components/sections/About";
import Expertise from "@/components/sections/Expertise";
import TechMarquee from "@/components/sections/TechMarquee";
import ContactCta from "@/components/sections/ContactCta";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Ajay Goswami is a front-end developer with three years of experience building fast, accessible products with React, Next.js and TypeScript.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={graph(
          profilePageSchema(),
          personSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        )}
      />
      <About />
      <TechMarquee />
      <Expertise index="02" />
      <ContactCta index="03" />
    </>
  );
}
