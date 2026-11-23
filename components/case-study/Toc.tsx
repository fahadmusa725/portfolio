"use client";

import { useEffect, useState } from "react";

export type TocItem = {
  id: string;
  title: string;
};

type TocProps = {
  items: TocItem[];
  variant?: "mobile" | "desktop";
};

export default function Toc({ items, variant }: TocProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || "");

  useEffect(() => {
    if (items.length === 0) return;

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const intersecting = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      const first = intersecting[0];
      if (first) {
        setActiveId(first.target.id);
      }
    };

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: "-20% 0% -60% 0%",
      threshold: 0,
    });

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  if (variant === "mobile") {
    return (
      <div className="xl:hidden my-8 rounded-2xl border border-line bg-paper/60 p-4">
        <details className="group">
          <summary className="flex cursor-pointer items-center justify-between font-mono text-label uppercase text-ink">
            <span>Table of contents</span>
            <span className="text-muted transition-transform duration-200 group-open:rotate-180">
              ↓
            </span>
          </summary>
          <ul className="mt-4 flex flex-col gap-2 border-t border-line/60 pt-3">
            {items.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "location" : undefined}
                    className={`block py-1 text-sm transition-colors duration-200 ${
                      isActive ? "text-accent font-semibold" : "text-muted hover:text-ink"
                    }`}
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </details>
      </div>
    );
  }

  if (variant === "desktop") {
    return (
      <aside className="hidden xl:block w-64 shrink-0">
        <div className="sticky top-28 space-y-4">
          <p className="font-mono text-label uppercase text-muted">On this page</p>
          <ul className="space-y-2 border-l border-line pl-4">
            {items.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id} className="relative">
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "location" : undefined}
                    className={`block text-sm transition-colors duration-200 ${
                      isActive
                        ? "text-accent font-semibold -ml-[17px] pl-4 border-l-2 border-accent"
                        : "text-muted hover:text-ink"
                    }`}
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    );
  }

  return (
    <>
      <div className="xl:hidden my-8 rounded-2xl border border-line bg-paper/60 p-4">
        <details className="group">
          <summary className="flex cursor-pointer items-center justify-between font-mono text-label uppercase text-ink">
            <span>Table of contents</span>
            <span className="text-muted transition-transform duration-200 group-open:rotate-180">
              ↓
            </span>
          </summary>
          <ul className="mt-4 flex flex-col gap-2 border-t border-line/60 pt-3">
            {items.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "location" : undefined}
                    className={`block py-1 text-sm transition-colors duration-200 ${
                      isActive ? "text-accent font-semibold" : "text-muted hover:text-ink"
                    }`}
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </details>
      </div>

      <aside className="hidden xl:block w-64 shrink-0">
        <div className="sticky top-28 space-y-4">
          <p className="font-mono text-label uppercase text-muted">On this page</p>
          <ul className="space-y-2 border-l border-line pl-4">
            {items.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id} className="relative">
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "location" : undefined}
                    className={`block text-sm transition-colors duration-200 ${
                      isActive
                        ? "text-accent font-semibold -ml-[17px] pl-4 border-l-2 border-accent"
                        : "text-muted hover:text-ink"
                    }`}
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
}
