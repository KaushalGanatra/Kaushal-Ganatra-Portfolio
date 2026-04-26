import { useState } from "react";
import { usePortfolio } from "@/context/PortfolioContext";

/**
 * Venetian-blind theme toggle.
 * - Window-shaped icon with hint label so users see it as the theme switch
 * - Dark = blinds fully closed (solid wall of slats covering the window)
 * - Light = blinds tilted open, sky + sun visible behind
 * - Pull-string animation tugs down on click, then springs back
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = usePortfolio();
  const [pulling, setPulling] = useState(false);
  const isLight = theme === "light";

  const handleClick = () => {
    setPulling(true);
    window.setTimeout(() => toggleTheme(), 220);
    window.setTimeout(() => setPulling(false), 600);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
      title={isLight ? "Pull the cord to close the blinds (dark)" : "Pull the cord to open the blinds (light)"}
      className={`venetian-toggle group ${isLight ? "is-light" : "is-dark"} ${pulling ? "is-pulling" : ""} ${className}`}
    >
      {/* Window */}
      <span aria-hidden className="venetian-window">
        {/* Outside sky / night */}
        <span className="venetian-sky" />
        {/* Sun / moon */}
        <span className="venetian-celestial" />
        {/* Slats */}
        <span className="venetian-slats">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="venetian-slat"
              style={{ transitionDelay: `${i * 35}ms` }}
            />
          ))}
        </span>
        {/* Frame inset */}
        <span className="venetian-frame" />
      </span>
      {/* Pull cord, hangs outside the window on the right */}
      <span aria-hidden className="venetian-cord-wrap">
        <span className="venetian-cord" />
        <span className="venetian-knob" />
      </span>
      {/* Hint label */}
      <span className="venetian-hint">{isLight ? "Light" : "Dark"}</span>
    </button>
  );
}
