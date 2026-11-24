"use client";

import { useSyncExternalStore } from "react";
import { Monitor, Moon, Sun } from "lucide-react";

type Theme = "system" | "light" | "dark";

const THEME_EVENT = "portfolio-theme-change";

const OPTIONS: { value: Theme; label: string; Icon: typeof Monitor }[] = [
  { value: "system", label: "System", Icon: Monitor },
  { value: "light", label: "Light", Icon: Sun },
  { value: "dark", label: "Dark", Icon: Moon },
];

function getSnapshot(): Theme {
  const current = document.documentElement.dataset.theme;
  return current === "light" || current === "dark" ? current : "system";
}

function getServerSnapshot(): Theme | null {
  return null;
}

function subscribe(callback: () => void) {
  function onStorage(event: StorageEvent) {
    if (event.key !== "portfolio-theme" && event.key !== null) return;
    const next = event.newValue;
    if (next === "light" || next === "dark") document.documentElement.dataset.theme = next;
    else delete document.documentElement.dataset.theme;
    callback();
  }
  window.addEventListener("storage", onStorage);
  window.addEventListener(THEME_EVENT, callback);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(THEME_EVENT, callback);
  };
}

function applyTheme(next: Theme) {
  if (next === "system") delete document.documentElement.dataset.theme;
  else document.documentElement.dataset.theme = next;
  try {
    if (next === "system") localStorage.removeItem("portfolio-theme");
    else localStorage.setItem("portfolio-theme", next);
  } catch {
    /* An explicit theme still applies when storage is unavailable. */
  }
  window.dispatchEvent(new Event(THEME_EVENT));
}

export default function ThemeSelect() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <div
      role="group"
      aria-label="Color theme"
      className="inline-flex h-8 items-center border border-foreground/20 bg-card/80 p-0.5"
    >
      {OPTIONS.map(({ value, label, Icon }) => {
        const active = theme === value;
        return (
          <button
            key={value}
            type="button"
            title={`${label} theme`}
            aria-label={`${label} theme`}
            aria-pressed={active}
            onClick={() => applyTheme(value)}
            className={`grid size-7 cursor-pointer place-items-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
              active
                ? "bg-primary text-primary-foreground"
                : "text-gray-400 hover:bg-foreground/10 hover:text-foreground"
            }`}
          >
            <Icon className="size-3.5" aria-hidden />
          </button>
        );
      })}
    </div>
  );
}
