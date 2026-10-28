"use client";

import Image from "next/image";
import { DeviceFrame, frameSize, getDevice, useFitScale } from "da-frame-set";
import type { MediaDevice } from "@/types/portfolio";
import { cn } from "@/lib/cn";

type DeviceShotProps = {
  device: MediaDevice;
  src: string;
  alt: string;
  sizes: string;
  url?: string;
  preload?: boolean;
  className?: string;
};

export default function DeviceShot({ device, src, alt, sizes, url, preload, className }: DeviceShotProps) {
  const spec = getDevice(device);
  const frame = frameSize(spec);
  const { ref, scale, measured } = useFitScale({ contentWidth: frame.width, contentHeight: frame.height });

  return (
    <div ref={ref} className={cn("flex size-full items-center justify-center", className)}>
      <DeviceFrame device={device} scale={scale} hidden={!measured} url={url}>
        <Image
          src={src}
          alt={alt}
          width={spec.width}
          height={spec.height}
          sizes={sizes}
          preload={preload}
          className="block h-auto w-full"
        />
      </DeviceFrame>
    </div>
  );
}
