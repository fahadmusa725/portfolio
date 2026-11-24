import fs from "fs";
import path from "path";
import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import Decision from "@/components/case-study/Decision";
import Flow from "@/components/case-study/Flow";
import Toc, { type TocItem } from "@/components/case-study/Toc";
import { getCaseStudySlugs, getProjectBySlug } from "@/lib/projects";
import type { MDXComponents } from "mdx/types";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || !project.hasCaseStudy) {
    return {};
  }

  return {
    title: `${project.title} | Fahad Musa`,
    description: project.summary,
  };
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function extractHeadings(content: string): TocItem[] {
  const lines = content.split("\n");
  const headings: TocItem[] = [];

  for (const line of lines) {
    const match = line.match(/^##\s+(.+)$/);
    if (match && match[1]) {
      const title = match[1].trim();
      headings.push({
        id: slugify(title),
        title,
      });
    }
  }

  return headings;
}

async function CaseStudyContent({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || !project.hasCaseStudy) {
    notFound();
  }

  const filePath = path.join(process.cwd(), "content", "projects", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const rawMDX = fs.readFileSync(filePath, "utf-8");
  const headings = extractHeadings(rawMDX);

  // Dynamic import of the MDX component
  let MDXContent: React.ComponentType<{
    components?: MDXComponents;
  }>;
  try {
    const mod = await import(`@/content/projects/${slug}.mdx`);
    MDXContent = mod.default;
  } catch {
    notFound();
  }

  const mdxComponents: MDXComponents = {
    Decision,
    Flow: Flow as React.ComponentType<unknown>,
    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
      const text = typeof props.children === "string" ? props.children : "";
      const id = props.id || (text ? slugify(text) : undefined);
      return (
        <h2
          id={id}
          className="mt-14 mb-4 scroll-mt-24 text-heading text-ink first:mt-0"
          {...props}
        />
      );
    },
    h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h3 className="mt-8 mb-3 text-xl font-bold tracking-tight text-ink sm:text-2xl" {...props} />
    ),
    p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
      <p className="measure my-4 leading-relaxed text-ink/80" {...props} />
    ),
    ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
      <ul className="my-4 list-disc space-y-2 pl-6 text-ink/80 marker:text-muted" {...props} />
    ),
    ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
      <ol className="my-4 list-decimal space-y-2 pl-6 text-ink/80 marker:text-muted" {...props} />
    ),
    li: (props: React.HTMLAttributes<HTMLLIElement>) => (
      <li className="leading-relaxed" {...props} />
    ),
    code: (props: React.HTMLAttributes<HTMLElement>) => (
      <code
        className="rounded border border-line bg-surface/5 px-1.5 py-0.5 font-mono text-[0.875em] text-ink whitespace-nowrap"
        {...props}
      />
    ),
    a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <a
        className="text-accent underline underline-offset-4 transition-colors duration-200 hover:text-ink"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    ),
  };

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-12 lg:py-16">
      {/* Back link */}
      <div>
        <Link
          href="/#work"
          className="group inline-flex items-center gap-2 font-mono text-label uppercase text-muted transition-colors duration-200 hover:text-ink"
        >
          <span aria-hidden="true" className="transition-transform duration-200 group-hover:-translate-x-1">
            ←
          </span>
          All projects
        </Link>
      </div>

      {/* Header */}
      <header className="mt-8">
        <p className="font-mono text-label uppercase text-accent">Case study</p>
        <h1 className="mt-3 text-heading">{project.title}</h1>
        <p className="measure mt-4 text-xl text-muted leading-relaxed sm:text-2xl">
          {project.summary}
        </p>

        {/* Project Image */}
        {project.image ? (
          <div className="mt-8 overflow-hidden rounded-3xl border border-line bg-surface/5">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              sizes="(min-width: 64rem) 60rem, 100vw"
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        ) : null}

        {/* Meta row: Stack and links */}
        <div className="mt-8 flex flex-col gap-6 border-y border-line py-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-label uppercase text-muted">Stack</p>
            <p className="mt-1 font-mono text-sm uppercase text-ink">
              {project.stack.join(" \u00b7 ")}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {project.links.live ? (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-surface px-4 py-2 font-mono text-label uppercase text-surface-ink transition-colors duration-200 hover:bg-surface/85"
              >
                Live site
                <span aria-hidden="true"> ↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : null}

            {project.links.repo ? (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 font-mono text-label uppercase text-ink transition-colors duration-200 hover:border-ink"
              >
                Repository
                <span aria-hidden="true"> ↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : null}
          </div>
        </div>
      </header>

      {/* Main content + Toc */}
      <div className="mt-8 flex flex-col xl:flex-row xl:items-start xl:gap-16">
        <article className="min-w-0 flex-1">
          {/* Mobile TOC inside article flow at the top */}
          <Toc items={headings} variant="mobile" />

          {/* MDX Body */}
          <div className="case-study-body">
            <MDXContent components={mdxComponents} />
          </div>
        </article>

        {/* Desktop Sticky Toc */}
        <Toc items={headings} variant="desktop" />
      </div>
    </div>
  );
}

export default function CaseStudyPage(props: PageProps) {
  return (
    <Suspense
      fallback={
        <div className="mx-auto w-full max-w-5xl px-6 py-12 lg:py-16">
          <div className="h-4 w-24 rounded bg-surface/10 animate-pulse" />
        </div>
      }
    >
      <CaseStudyContent {...props} />
    </Suspense>
  );
}
