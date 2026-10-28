type PostTagsProps = {
  tags: string[];
};

export default function PostTags({ tags }: PostTagsProps) {
  return (
    <p className="type-label mt-14 border-t border-hairline pt-6 text-label-tertiary">
      Filed under <span className="text-earth">{tags.join("  ·  ")}</span>
    </p>
  );
}
