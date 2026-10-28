import { cacheLife } from "next/cache";
import { CMS_API_URL, CMS_WORKSPACE_ID } from "@/constants/cms";
import type { CmsListResponse, CmsPage } from "@/types/blog";

const WORKSPACE_URL = `${CMS_API_URL}/workspaces/${CMS_WORKSPACE_ID}`;

type ListOptions = {
  group?: string;
  fields?: (keyof CmsPage)[];
  perPage?: number;
};

async function readJson<T>(response: Response): Promise<T | null> {
  const type = response.headers.get("content-type") ?? "";
  return type.includes("json") ? ((await response.json()) as T) : null;
}

export async function listCmsPages({ group, fields, perPage = 100 }: ListOptions): Promise<CmsPage[]> {
  "use cache";
  cacheLife("minutes");

  const query = new URLSearchParams({ perPage: String(perPage) });
  if (group) query.set("group", group);
  if (fields?.length) query.set("fields", fields.join(","));

  try {
    const response = await fetch(`${WORKSPACE_URL}/pagebyslug?${query}`);
    if (!response.ok) return [];
    const data = await readJson<CmsListResponse>(response);
    return data?.items ?? [];
  } catch {
    return [];
  }
}

export async function getCmsPage(slug: string): Promise<CmsPage | null> {
  "use cache";
  cacheLife("minutes");

  try {
    const response = await fetch(`${WORKSPACE_URL}/page-details/${encodeURIComponent(slug)}`);
    if (!response.ok) return null;
    return await readJson<CmsPage>(response);
  } catch {
    return null;
  }
}
