import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import GitHubActivity from "@/components/sections/GitHubActivity";

export const metadata: Metadata = pageMetadata({
  title: "Dashboard",
  description: "Live GitHub contributions and coding activity from Ajay Goswami.",
  path: "/dashboard",
});

export default function DashboardPage() {
  return <GitHubActivity />;
}
