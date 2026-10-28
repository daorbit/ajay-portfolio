import type { Project } from "@/types/portfolio";
import DeviceShot from "@/components/media/DeviceShot";

type ProjectMediaProps = {
  project: Project;
  sizes: string;
};

export default function ProjectMedia({ project, sizes }: ProjectMediaProps) {
  const { name, image, url, monogram } = project;

  if (image) {
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

  return (
    <div className="flex size-full items-center justify-center">
      <span className="type-hero text-metal opacity-90">{monogram}</span>
    </div>
  );
}
