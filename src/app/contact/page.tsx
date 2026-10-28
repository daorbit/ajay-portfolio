import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, graph } from "@/lib/structuredData";
import Contact from "@/components/sections/Contact";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Get in touch with Ajay Goswami about a front-end role or a project.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={graph(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        )}
      />
      <Contact />
    </>
  );
}
