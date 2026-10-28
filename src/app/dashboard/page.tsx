import type { Metadata } from "next";
import GitHubActivity from "@/components/sections/GitHubActivity";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Live GitHub contributions and coding activity.",
};

export default function DashboardPage() {
  return <GitHubActivity />;
}
