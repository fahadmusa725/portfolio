"use client";

import { toggleTheme } from "@/lib/theme";

export default function ThemeToggle() {
  return (
    <button
      type="button"
      aria-label="Switch colour theme"
      onClick={toggleTheme}
      className="relative flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-line bg-paper text-ink transition-colors duration-200 hover:border-ink focus-visible:outline-2 focus-visible:outline-accent"
    >
      {/* Sun Glyph (SVG) */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="theme-glyph-sun absolute h-4 w-4 transition-all duration-300 ease-out"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>

      {/* Moon Glyph (SVG) */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="theme-glyph-moon absolute h-4 w-4 transition-all duration-300 ease-out"
        aria-hidden="true"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    </button>
  );
}
