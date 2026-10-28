import SidebarContent from "@/components/layout/SidebarContent";

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 border-r border-hairline bg-canvas-raised lg:block">
      <SidebarContent layoutId="sidebar-active" />
    </aside>
  );
}
