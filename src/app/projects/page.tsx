import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph, projectListSchema } from "@/lib/structuredData";
import Work from "@/components/sections/Work";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = pageMetadata({
  title: "Projects",
  description: "SaaS products, open-source React packages and websites built by Ajay Goswami.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <JsonLd
        data={graph(
          projectListSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
          ]),
        )}
      />
      <Work />
    </>
  );
}
