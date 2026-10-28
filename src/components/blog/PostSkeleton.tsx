import { cn } from "@/lib/cn";

const BLOCK = "animate-pulse rounded-panel bg-canvas-raised";

export default function PostSkeleton() {
  return (
    <div aria-busy="true" aria-label="Loading post">
      <div className={cn(BLOCK, "h-4 w-24")} />
      <div className="mt-10 border-b border-hairline pb-5">
        <div className={cn(BLOCK, "h-3 w-40")} />
      </div>
      <div className={cn(BLOCK, "mt-10 h-14 w-full max-w-3xl")} />
      <div className={cn(BLOCK, "mt-4 h-14 w-2/3 max-w-2xl")} />
      <div className={cn(BLOCK, "mt-12 aspect-video w-full")} />
    </div>
  );
}
