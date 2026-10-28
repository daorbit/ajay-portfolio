import { ImageResponse } from "next/og";
import { OG_IMAGE_SIZE } from "@/constants/og";
import OgCard from "@/components/seo/OgCard";

export function GET() {
  return new ImageResponse(<OgCard />, OG_IMAGE_SIZE);
}
