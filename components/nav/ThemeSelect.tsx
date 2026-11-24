"use client";

import { useEffect, useRef } from "react";

export default function ThemeSelect() {
  const select = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    function sync() {
      if (select.current) select.current.value = document.documentElement.dataset.theme ?? "system";
    }
    function onStorage(event: StorageEvent) {
      if (event.key !== "portfolio-theme" && event.key !== null) return;
      const theme = event.newValue;
      if (theme === "light" || theme === "dark") document.documentElement.dataset.theme = theme;
      else delete document.documentElement.dataset.theme;
      sync();
    }
    sync();
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return (
    <select ref={select} aria-label="Color theme" title="Color theme" defaultValue="system"
      className="min-h-11 cursor-pointer bg-background px-1 text-sm text-foreground focus-visible:outline-primary"
      onChange={({ currentTarget: { value } }) => {
        if (value === "system") delete document.documentElement.dataset.theme;
        else document.documentElement.dataset.theme = value;
        try {
          if (value === "system") localStorage.removeItem("portfolio-theme");
          else localStorage.setItem("portfolio-theme", value);
        } catch { /* An explicit theme still applies when storage is unavailable. */ }
      }}>
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  );
}
