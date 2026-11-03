"use client";

import { toggleTheme } from "@/lib/theme";

export default function ThemeToggle() {
  return (
    <button
      type="button"
      aria-label="Switch colour theme"
      onClick={toggleTheme}
      className="rounded-full px-4 py-2 font-mono text-label uppercase transition-colors duration-200 hover:bg-surface-ink/10"
    >
      Theme
    </button>
  );
}
