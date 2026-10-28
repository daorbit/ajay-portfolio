import type { Metadata } from "next";
import Work from "@/components/sections/Work";

export const metadata: Metadata = {
  title: "Projects",
  description: "SaaS products, open-source React packages and websites built by Ajay Goswami.",
};

export default function ProjectsPage() {
  return <Work />;
}
