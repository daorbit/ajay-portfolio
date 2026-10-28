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
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icons/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
