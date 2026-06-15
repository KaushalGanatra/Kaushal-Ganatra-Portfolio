import { useLocation } from "@tanstack/react-router";
import { Download, Menu } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";
import { PRO_NAV, PER_NAV } from "@/data/portfolio";
import { ThemeToggle } from "./ThemeToggle";

export function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  const { mode } = usePortfolio();
  const location = useLocation();
  const nav = mode === "pro" ? PRO_NAV : PER_NAV;
  const current = nav.find((n) => n.to === location.pathname);
  const label = current?.label.toLowerCase() ?? "home";

  return (
    <div className="sticky top-0 z-30 flex h-14 items-center justify-between gap-2 border-b border-border bg-background/80 px-4 backdrop-blur md:px-8">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-foreground md:hidden"
          aria-label="Open menu"
        >
          <Menu size={16} />
        </button>
        <div className="text-xs text-faint">
          {mode === "pro" ? "portfolio" : "personal"} / <span className="text-foreground">{label}</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <a
          href="/Kaushal_Ganatra_CV.pdf"
          download="Kaushal_Ganatra_CV.pdf"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:px-4"
        >
          <Download size={13} />
          <span className="hidden sm:inline">Download CV</span>
          <span className="sm:hidden">CV</span>
        </a>
      </div>
    </div>
  );
}
