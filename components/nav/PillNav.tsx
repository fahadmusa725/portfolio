"use client";

import { useEffect, useRef, useState } from "react";

import ThemeToggle from "@/components/ThemeToggle";
import { navLinks } from "@/content/site";

const pillItem =
  "rounded-full px-4 py-2 font-mono text-label uppercase transition-colors duration-200 hover:bg-surface-ink/10";

export default function PillNav() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") {
        return;
      }

      setOpen(false);
      menuButtonRef.current?.focus();
    }

    function handlePointerDown(event: PointerEvent) {
      if (!(event.target instanceof Node)) {
        return;
      }

      if (
        panelRef.current?.contains(event.target) ||
        menuButtonRef.current?.contains(event.target)
      ) {
        return;
      }

      setOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <div className="pointer-events-auto relative">
        <nav
          aria-label="Main"
          className="flex items-center gap-1 rounded-full bg-surface p-1 text-surface-ink"
        >
          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((current) => !current)}
            className={`${pillItem} w-24 text-center`}
          >
            {open ? "Close" : "Menu"}
          </button>
          <span aria-hidden="true" className="h-3.5 w-px bg-surface-ink/20" />
          <ThemeToggle />
        </nav>

        {open ? (
          <div
            ref={panelRef}
            id="site-menu"
            className="absolute left-1/2 top-full mt-3 w-[min(22rem,calc(100vw-2rem))] -translate-x-1/2 rounded-3xl bg-surface p-2 text-surface-ink"
          >
            <ul className="flex flex-col">
              {navLinks.map((link, index) => (
                <li key={link.href} className="border-t border-surface-ink/15 first:border-t-0">
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 rounded-2xl px-4 py-3 transition-colors duration-200 hover:bg-surface-ink/10"
                  >
                    <span aria-hidden="true" className="font-mono text-label text-surface-ink/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-2xl">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </header>
  );
}
