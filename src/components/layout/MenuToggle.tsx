import { cn } from "@/lib/cn";

type MenuToggleProps = {
  open: boolean;
  onClick: () => void;
};

const LINE = "block h-px w-full bg-current transition-transform duration-500 ease-expo";

export default function MenuToggle({ open, onClick }: MenuToggleProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      className="type-label -my-2 flex items-center gap-3 py-2 transition-opacity duration-300 hover:opacity-60"
    >
      <span aria-hidden className="flex h-3 w-6 flex-col justify-between">
        <span className={cn(LINE, open && "translate-y-[5.5px] rotate-45")} />
        <span className={cn(LINE, open && "translate-y-[-5.5px] -rotate-45")} />
      </span>
      <span aria-hidden>{open ? "Close" : "Menu"}</span>
    </button>
  );
}
