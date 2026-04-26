import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Mode = "pro" | "personal";
type Theme = "light" | "dark";

type Ctx = {
  mode: Mode;
  setMode: (m: Mode) => void;
  toggleMode: () => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
};

const PortfolioContext = createContext<Ctx | null>(null);

const MODE_KEY = "kg-mode";
const THEME_KEY = "kg-theme";

function applyClasses(mode: Mode, theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("mode-personal", mode === "personal");
  root.classList.toggle("dark", theme === "dark");
  root.classList.toggle("light", theme === "light");
}

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<Mode>(
    () => typeof window !== "undefined" ? (localStorage.getItem(MODE_KEY) as Mode) || "pro" : "pro"
  );
  const [theme, setThemeState] = useState<Theme>(
    () => typeof window !== "undefined" ? (localStorage.getItem(THEME_KEY) as Theme) || "dark" : "dark"
  );

  useEffect(() => {
    applyClasses(mode, theme);
  }, []);

  const setMode = (m: Mode) => {
    setModeState(m);
    localStorage.setItem(MODE_KEY, m);
    applyClasses(m, theme);
  };
  const setTheme = (t: Theme) => {
    setThemeState(t);
    localStorage.setItem(THEME_KEY, t);
    applyClasses(mode, t);
  };

  return (
    <PortfolioContext.Provider
      value={{
        mode,
        setMode,
        toggleMode: () => setMode(mode === "pro" ? "personal" : "pro"),
        theme,
        setTheme,
        toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark"),
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const ctx = useContext(PortfolioContext);
  if (!ctx) throw new Error("usePortfolio must be used within PortfolioProvider");
  return ctx;
}
