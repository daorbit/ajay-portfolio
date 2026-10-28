import Hero from "@/components/sections/Hero";
import Showreel from "@/components/sections/Showreel";
import Philosophy from "@/components/sections/Philosophy";
import SelectedWork from "@/components/sections/SelectedWork";
import Expertise from "@/components/sections/Expertise";
import TechMarquee from "@/components/sections/TechMarquee";
import ContactCta from "@/components/sections/ContactCta";

export default function Home() {
  return (
    <>
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
