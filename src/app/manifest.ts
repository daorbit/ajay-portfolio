import type { MetadataRoute } from "next";
import { PROFILE } from "@/data/profile";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${PROFILE.name} · ${PROFILE.role}`,
    short_name: PROFILE.name,
    description: PROFILE.summary,
    start_url: "/",
    display: "standalone",
    background_color: "#f2eee5",
    theme_color: "#4a6b3a",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
}
