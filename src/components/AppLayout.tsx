import { useState, type ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

export function AppLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="relative flex min-w-0 flex-1 flex-col overflow-hidden">
        <Topbar onMenuClick={() => setSidebarOpen(true)} />
        <div className="flex-1 px-4 py-6 md:px-8 md:py-8">{children}</div>
        {/* Mount target for the diagonal-curtain mode-wipe overlay.
            Scoped to the main area so the wipe doesn't cover the sidebar. */}
        <div id="mode-wipe-target" className="pointer-events-none absolute inset-0 z-[80] overflow-hidden" />
      </main>
    </div>
  );
}
