export type Profile = {
  name: string;
  role: string;
  email: string;
  summary: string;
};

export type Highlight = {
  value: number;
  suffix?: string;
  label: string;
};

export type MediaDevice = "macbook-pro-16" | "browser" | "iphone-pro";

export type Screenshot = {
  src: string;
  alt: string;
};

export type ProjectLayout = "featured" | "standard";

export type ProjectGroupId = "products" | "tools" | "websites";

export type ProjectGroup = {
  id: ProjectGroupId;
  title: string;
  description: string;
};

export type Project = {
  name: string;
  category: string;
  description: string;
  group: ProjectGroupId;
  layout: ProjectLayout;
  image: string;
  tech?: string[];
  url?: string;
};

export type Feature = {
  title: string;
  description: string;
};

export type Recognition = {
  title: string;
  detail: string;
};

export type ToolLogo = {
  title: string;
  path: string;
};

export type HeadlineSegment = {
  text: string;
  muted?: boolean;
};

export type FormEmbedMessage = {
  type?: string;
  height?: number;
};
