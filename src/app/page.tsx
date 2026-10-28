import type { Metadata } from "next";
import { PROFILE } from "@/data/profile";
import { pageMetadata } from "@/lib/seo";
import { graph, personSchema, websiteSchema } from "@/lib/structuredData";
import Hero from "@/components/sections/Hero";
import Showreel from "@/components/sections/Showreel";
import Philosophy from "@/components/sections/Philosophy";
import SelectedWork from "@/components/sections/SelectedWork";
import Expertise from "@/components/sections/Expertise";
import TechMarquee from "@/components/sections/TechMarquee";
import ContactCta from "@/components/sections/ContactCta";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = pageMetadata({ description: PROFILE.summary, path: "/" });

export default function Home() {
  return (
    <>
      <JsonLd data={graph(websiteSchema(), personSchema())} />
      <Hero />
      <Showreel />
      <TechMarquee />
      <Philosophy />
      <SelectedWork />
      <Expertise index="04" />
      <ContactCta index="05" />
    </>
  );
}
