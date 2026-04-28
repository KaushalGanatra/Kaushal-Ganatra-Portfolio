import { Link, useLocation } from "@tanstack/react-router";
import { Github, Linkedin, Mail, X, Lock } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";
import { PRO_NAV, PER_NAV, profile } from "@/data/portfolio";


type Props = {
  open?: boolean;
  onClose?: () => void;
};

export function Sidebar({ open = false, onClose }: Props) {
  const { mode } = usePortfolio();
  const nav = mode === "pro" ? PRO_NAV : PER_NAV;
  const location = useLocation();

  return (
    <>
      {/* Mobile overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity md:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
      />
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-border bg-surface transition-transform md:sticky md:top-0 md:h-screen md:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
      >
        <div className="flex items-start justify-between border-b border-border px-5 py-5">
          <div>
            <div className="text-sm font-medium text-foreground">{profile.name}</div>
            <div className="mt-0.5 text-xs text-faint">
              {mode === "pro"
                ? profile.proTagline.replace(" · Builder", "")
                : profile.perTagline}
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-faint md:hidden"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>


        <nav className="flex-1 overflow-y-auto px-2 py-4">
          <div className="px-3 pb-2 text-[10px] font-medium uppercase tracking-wider text-faint">
            {mode === "pro" ? "Professional" : "Personal"}
          </div>
          <ul className="space-y-0.5">
            {nav.map((item) => {
              const Icon = item.icon;
              const active =
                !item.locked && (
                location.pathname === item.to ||
                (item.to !== "/" && location.pathname.startsWith(item.to)));

              if (item.locked) {
                return (
                  <li key={item.id}>
                    <div
                      className="flex cursor-not-allowed items-center justify-between rounded-lg px-3 py-2 text-sm text-faint/50 transition-colors"
                      title="Coming soon"
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={15} />
                        {item.label}
                      </div>
                      <Lock size={12} className="opacity-60" />
                    </div>
                  </li>
                );
              }

              return (
                <li key={item.id}>
                  <Link
                    to={item.to}
                    onClick={onClose}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${active
                        ? "bg-primary-soft text-primary"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                      }`}
                  >
                    <Icon size={15} />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-border px-5 py-4">
          <div className="flex gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-surface-2 text-faint transition-colors hover:border-primary hover:text-primary"
              aria-label="GitHub"
            >
              <Github size={14} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-surface-2 text-faint transition-colors hover:border-primary hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin size={14} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-surface-2 text-faint transition-colors hover:border-primary hover:text-primary"
              aria-label="Email"
            >
              <Mail size={14} />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
