import {
  siAntdesign,
  siBootstrap,
  siCss,
  siHtml5,
  siJavascript,
  siMui,
  siNextdotjs,
  siReact,
  siRedux,
  siSocketdotio,
  siTailwindcss,
  siTypescript,
} from "simple-icons";
import type { ToolLogo } from "@/types/portfolio";

export const TOOLKIT_LOGOS: ToolLogo[] = [
  siReact,
  siNextdotjs,
  siTypescript,
  siJavascript,
  siRedux,
  siTailwindcss,
  siMui,
  siAntdesign,
  siBootstrap,
  siSocketdotio,
  siHtml5,
  siCss,
].map(({ title, path }) => ({ title, path }));
