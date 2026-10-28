import type { Project } from "@/types/portfolio";
import DeviceShot from "@/components/media/DeviceShot";

type ProjectMediaProps = {
  project: Project;
  sizes: string;
};

export default function ProjectMedia({ project, sizes }: ProjectMediaProps) {
  const { name, image, url } = project;

  return (
    <DeviceShot
      device="browser"
      src={image}
      alt={`${name} screenshot`}
      url={url ? new URL(url).hostname : undefined}
      sizes={sizes}
    />
  );
}
