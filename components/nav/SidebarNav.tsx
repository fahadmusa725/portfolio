"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { navLinks, profile, type NavLink } from "@/content/site";

export default function SidebarNav() {
  const [activeId, setActiveId] = useState<string>("intro");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);

  // Active section observer
  useEffect(() => {
    const sectionIds = navLinks
      .map((link) => link.href.split("#")[1])
      .filter(Boolean) as string[];

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      // Find the first intersecting entry from top to bottom
      const intersecting = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      const firstEntry = intersecting[0];
      if (firstEntry) {
        setActiveId(firstEntry.target.id);
      }
    };

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: "-20% 0% -60% 0%",
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Keyboard and outside click handling for mobile drawer
  useEffect(() => {
    if (!mobileMenuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    function handlePointerDown(event: PointerEvent) {
      if (!(event.target instanceof Node)) return;
      if (
        mobilePanelRef.current?.contains(event.target) ||
        menuButtonRef.current?.contains(event.target)
      ) {
        return;
      }
      setMobileMenuOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [mobileMenuOpen]);

  const githubLink = profile.socials.find((s) => s.label.toLowerCase() === "github");
  const linkedinLink = profile.socials.find((s) => s.label.toLowerCase() === "linkedin");

  const renderNavList = (isMobile = false) => (
    <ul className="flex flex-col">
      {navLinks.map((link: NavLink, index: number) => {
        const sectionId = link.href.split("#")[1];
        const isActive = activeId === sectionId;

        return (
          <li key={link.href} className="relative">
            <a
              href={link.href}
              aria-current={isActive ? "location" : undefined}
              onClick={() => {
                if (isMobile) setMobileMenuOpen(false);
              }}
              className={`group flex items-baseline gap-3 py-2.5 font-mono text-label uppercase transition-colors duration-200 ${
                isMobile ? "px-6 text-base" : "px-6"
              } ${
                isActive
                  ? "text-ink font-semibold"
                  : "text-muted hover:text-ink"
              }`}
            >
              {/* 2px accent bar on active item's left */}
              {isActive ? (
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1/2 h-5 w-[2px] -translate-y-1/2 bg-accent"
                />
              ) : null}
              <span
                aria-hidden="true"
                className={`transition-colors duration-200 ${
                  isActive ? "text-accent" : "text-muted/60 group-hover:text-ink/60"
                }`}
              >
                {String(index).padStart(2, "0")}
              </span>
              <span>{link.label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      {/* Mobile Sticky Top Bar (below lg) */}
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-line bg-paper px-6 py-4 lg:hidden">
        <Link href="/#intro" className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-surface text-surface-ink font-mono text-sm font-bold">
            {profile.photo ? (
              <Image
                src={profile.photo}
                alt={profile.name}
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            ) : (
              "FM"
            )}
          </div>
          <span className="font-bold text-ink">{profile.name}</span>
        </Link>

        <button
          ref={menuButtonRef}
          type="button"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-panel"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="rounded-full border border-line px-4 py-2 font-mono text-label uppercase text-ink transition-colors duration-200 hover:border-ink"
        >
          {mobileMenuOpen ? "Close" : "Menu"}
        </button>
      </header>

      {/* Mobile Drawer Panel */}
      {mobileMenuOpen ? (
        <div
          ref={mobilePanelRef}
          id="mobile-nav-panel"
          className="fixed inset-x-0 top-[73px] z-40 border-b border-line bg-paper py-6 shadow-sm lg:hidden"
        >
          <nav aria-label="Mobile Navigation">{renderNavList(true)}</nav>
          <div className="mt-6 flex items-center justify-between border-t border-line px-6 pt-4">
            <div className="flex flex-wrap items-center gap-4">
              {githubLink ? (
                <a
                  href={githubLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-label uppercase text-muted transition-colors duration-200 hover:text-ink"
                >
                  GitHub
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : null}
              {linkedinLink ? (
                <a
                  href={linkedinLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-label uppercase text-muted transition-colors duration-200 hover:text-ink"
                >
                  LinkedIn
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : null}
              {profile.resume ? (
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-label uppercase text-muted transition-colors duration-200 hover:text-ink"
                >
                  Resume (PDF)
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : null}
            </div>
            <ThemeToggle />
          </div>
        </div>
      ) : null}

      {/* Desktop Fixed Left Panel (lg and up: 18rem / 72 wide, full height, hairline right border) */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 flex-col justify-between overflow-y-auto border-r border-line bg-paper p-8 lg:flex">
        <div className="flex flex-col gap-6">
          {/* Top tile: 96px, 16px radius */}
          <div className="relative flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-surface text-surface-ink font-mono text-2xl font-bold">
            {profile.photo ? (
              <Image
                src={profile.photo}
                alt={profile.name}
                width={96}
                height={96}
                className="h-full w-full object-cover"
                priority
              />
            ) : (
              "FM"
            )}
          </div>

          {/* Name & Role */}
          <div>
            <h1 className="text-xl font-bold tracking-tight text-ink">{profile.name}</h1>
            <p className="mt-1 font-mono text-label uppercase text-muted">{profile.role}</p>
          </div>

          {/* Availability pill */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-label uppercase text-muted">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
              {profile.availability}
            </span>
          </div>

          {/* Numbered Nav List */}
          <nav aria-label="Main Navigation" className="-mx-8 mt-2">
            {renderNavList(false)}
          </nav>
        </div>

        {/* Bottom actions: links and ThemeToggle */}
        <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {githubLink ? (
              <a
                href={githubLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-label uppercase text-muted transition-colors duration-200 hover:text-ink"
              >
                GitHub
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : null}
            {linkedinLink ? (
              <a
                href={linkedinLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-label uppercase text-muted transition-colors duration-200 hover:text-ink"
              >
                LinkedIn
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : null}
            {profile.resume ? (
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-label uppercase text-muted transition-colors duration-200 hover:text-ink"
              >
                Resume (PDF)
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : null}
          </div>
          <div>
            <ThemeToggle />
          </div>
        </div>
      </aside>
    </>
  );
}
