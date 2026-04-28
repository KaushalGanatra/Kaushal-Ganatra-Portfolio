import { startTransition, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Briefcase, Coffee } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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

    // Disable transitions while the drop is active.
    document.documentElement.classList.add("no-transition");

    // Change mode in the middle of the drop (when it fully covers the screen).
    window.setTimeout(() => {
      startTransition(() => {
        setMode(next);
      });
    }, 600);

    // Clean up.
    window.setTimeout(() => {
      setWiping(null);
      document.documentElement.classList.remove("no-transition");
    }, 1300);
  };

  const isPro = mode === "pro";

  return (
    <>
      <div
        role="group"
        aria-label="Switch portfolio mode"
        className="mode-curtain-toggle relative flex items-center rounded-lg border border-border-strong bg-surface p-1.5"
      >
        <button
          type="button"
          onClick={() => switchTo("pro")}
          aria-pressed={isPro}
          className={`relative flex h-8 flex-1 items-center justify-center gap-2 rounded-md px-3 text-xs font-bold uppercase tracking-wider transition-colors duration-200 ${
            isPro ? "text-primary-foreground" : "text-faint hover:text-foreground"
          }`}
        >
          {isPro && (
            <motion.div
              layoutId="toggle-pill"
              className="absolute inset-0 z-0 rounded-md bg-primary shadow-sm"
              transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
            />
          )}
          <Briefcase size={13} className="relative z-10" />
          <span className="relative z-10 hidden sm:inline">Portfolio</span>
        </button>

        <button
          type="button"
          onClick={() => switchTo("personal")}
          aria-pressed={!isPro}
          className={`relative flex h-8 flex-1 items-center justify-center gap-2 rounded-md px-3 text-xs font-bold uppercase tracking-wider transition-colors duration-200 ${
            !isPro ? "text-primary-foreground" : "text-faint hover:text-foreground"
          }`}
        >
          {!isPro && (
            <motion.div
              layoutId="toggle-pill"
              className="absolute inset-0 z-0 rounded-md bg-primary shadow-sm"
              transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
            />
          )}
          <Coffee size={13} className="relative z-10" />
          <span className="relative z-10 hidden sm:inline">Personal</span>
        </button>
      </div>

      {wiping &&
        target &&
        createPortal(
          <DropOverlay mode={wiping} theme={theme} />,
          target,
        )}
    </>
  );
}

/**
 * Heavy shutter-drop transition.
 */
function DropOverlay({ mode, theme }: { mode: string; theme: string }) {
  return (
    <div className={`${theme} ${mode === "personal" ? "mode-personal" : ""} h-full w-full`}>
      <div className="mode-drop-overlay is-dropping" aria-hidden>
        <div className="drop-content">
          <div className="drop-text">{mode === "pro" ? "INITIALIZING_PRO" : "SWITCHING_PERSONAL"}</div>
          <div className="drop-line" />
        </div>
      </div>
    </div>
  );
}
