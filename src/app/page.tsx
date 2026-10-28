import Hero from "@/components/sections/Hero";
import Highlights from "@/components/sections/Highlights";
import Work from "@/components/sections/Work";
import Expertise from "@/components/sections/Expertise";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Highlights />
      <Work />
      <Expertise />
      <About />
      <Contact />
    </main>
  );
}
