import type { Metadata } from "next";
import About from "@/components/sections/About";
import Expertise from "@/components/sections/Expertise";

export const metadata: Metadata = {
  title: "About",
  description: "Background, expertise and recognition.",
};

export default function AboutPage() {
  return (
    <>
      <About />
      <Expertise />
    </>
  );
}
