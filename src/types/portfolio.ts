export type Profile = {
  name: string;
  role: string;
  email: string;
  summary: string;
};

export type Highlight = {
  value: string;
  label: string;
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

export type FormEmbedMessage = {
  type?: string;
  height?: number;
};
