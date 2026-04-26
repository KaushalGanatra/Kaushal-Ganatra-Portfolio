import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Briefcase, Coffee } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";

/**
 * Portfolio / Personal toggle — "Diagonal Curtain Wipe" style.
 * The wipe overlay is portaled into #mode-wipe-target inside <main>,
 * so the animation only plays over the main content area (not the sidebar).
 */
export function ModeToggle() {
  const { mode, setMode, theme } = usePortfolio();
  const [wiping, setWiping] = useState<null | "pro" | "personal">(null);
  const [target, setTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setTarget(document.getElementById("mode-wipe-target"));
  }, []);

  const switchTo = (next: "pro" | "personal") => {
    if (next === mode || wiping) return;
    setWiping(next);
    window.setTimeout(() => setMode(next), 380);
    window.setTimeout(() => setWiping(null), 950);
  };

  const isPro = mode === "pro";

  return (
    <>
      <div
        role="group"
        aria-label="Switch portfolio mode"
        className={`mode-curtain-toggle flex items-stretch overflow-hidden rounded-lg border border-border-strong bg-surface ${
          isPro ? "is-pro" : "is-personal"
        }`}
      >
        <button
          type="button"
          onClick={() => switchTo("pro")}
          aria-pressed={isPro}
          className="mft-opt mft-prof flex items-center justify-center gap-1.5"
        >
          <Briefcase size={12} />
          <span className="hidden sm:inline">Portfolio</span>
        </button>
        <span aria-hidden className="mft-divider" />
        <button
          type="button"
          onClick={() => switchTo("personal")}
          aria-pressed={!isPro}
          className="mft-opt mft-pers flex items-center justify-center gap-1.5"
        >
          <Coffee size={12} />
          <span className="hidden sm:inline">Personal</span>
        </button>
      </div>

      {wiping &&
        target &&
        createPortal(
          <div className={`${theme} ${wiping === "personal" ? "mode-personal" : ""} h-full w-full`}>
            <div
              className="mode-wipe-overlay"
              aria-hidden
              ref={(el) => {
                if (!el) return;
                el.classList.remove("is-wiping");
                requestAnimationFrame(() => {
                  requestAnimationFrame(() => el.classList.add("is-wiping"));
                });
              }}
            />
          </div>,
          target,
        )}
    </>
  );
}
