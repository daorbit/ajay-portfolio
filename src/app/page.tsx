import Hero from "@/components/sections/Hero";
import Highlights from "@/components/sections/Highlights";
import TechMarquee from "@/components/sections/TechMarquee";
import FeaturedWork from "@/components/sections/FeaturedWork";
import ContactCta from "@/components/sections/ContactCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <TechMarquee />
      <FeaturedWork />
      <ContactCta />
    </>
  );
}
