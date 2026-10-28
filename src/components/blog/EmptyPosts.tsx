import Reveal from "@/components/ui/Reveal";

export default function EmptyPosts() {
  return (
    <Reveal className="border-t border-hairline pt-10">
      <p className="type-serif-sm text-label-secondary">Nothing published yet.</p>
      <p className="type-body mt-3 text-label-tertiary">The first posts are on their way. Check back soon.</p>
    </Reveal>
  );
}
