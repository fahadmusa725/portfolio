import Link from "next/link";

import { notFoundContent } from "@/content/site";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-1 flex-col items-start justify-center px-6 py-24 sm:px-12 lg:px-20">
      <div className="max-w-xl space-y-6">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          {notFoundContent.label}
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {notFoundContent.title}
        </h1>
        <p className="text-base text-muted sm:text-lg">
          {notFoundContent.description}
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-surface-ink transition-colors hover:border-accent-on-surface hover:text-accent-on-surface"
          >
            ← {notFoundContent.backLabel}
          </Link>
        </div>
      </div>
    </main>
  );
}
