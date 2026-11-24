"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Monitor, Moon, Sun } from "lucide-react";

type Theme = "system" | "light" | "dark";

export default function ThemeSelect() {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    function sync() {
      const current = document.documentElement.dataset.theme;
      setTheme(current === "light" || current === "dark" ? current : "system");
    }
    function onStorage(event: StorageEvent) {
      if (event.key !== "portfolio-theme" && event.key !== null) return;
      const next = event.newValue;
      if (next === "light" || next === "dark") document.documentElement.dataset.theme = next;
      else delete document.documentElement.dataset.theme;
      sync();
    }
    sync();
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const Icon = theme === "light" ? Sun : theme === "dark" ? Moon : Monitor;

  return (
    <div className="relative inline-flex items-center">
      <Icon
        className="pointer-events-none absolute left-2.5 size-3.5 text-primary"
        aria-hidden
      />
      <select
        aria-label="Color theme"
        title="Color theme"
        value={theme}
        className="h-9 cursor-pointer appearance-none border border-foreground/15 bg-card/80 pl-8 pr-7 font-mono text-xs text-foreground transition-colors hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        onChange={({ currentTarget: { value } }) => {
          const next: Theme =
            value === "light" || value === "dark" ? value : "system";
          setTheme(next);
          if (next === "system") delete document.documentElement.dataset.theme;
          else document.documentElement.dataset.theme = next;
          try {
            if (next === "system") localStorage.removeItem("portfolio-theme");
            else localStorage.setItem("portfolio-theme", next);
          } catch {
            /* An explicit theme still applies when storage is unavailable. */
          }
        }}
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <ChevronDown
        className="pointer-events-none absolute right-2 size-3.5 text-muted-foreground"
        aria-hidden
      />
    </div>
  );
}
