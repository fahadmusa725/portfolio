"use client";

import Image from "next/image";
import { useState } from "react";

import ProjectRow from "@/components/ProjectRow";
import {
  flagshipProject,
  selectedWork,
  workProjects,
  type Project,
  type WorkFilterId,
} from "@/content/site";

const allProjects: Project[] = [flagshipProject, ...workProjects];

function matchesFilter(project: Project, filter: WorkFilterId) {
  if (filter === "all") {
    return true;
  }

  if (filter === "live") {
    return Boolean(project.links.live);
  }

  return project.category === filter;
}

function formatNumber(position: number) {
  return String(position).padStart(2, "0");
}

/* Counts are derived from the project data, so a chip cannot go stale. */
const filterOptions = selectedWork.filters.map((filter) => ({
  ...filter,
  count: allProjects.filter((project) => matchesFilter(project, filter.id)).length,
}));

const chip =
  "inline-flex cursor-pointer items-baseline gap-2 rounded-full border px-3 py-1.5 font-mono text-label uppercase";

const cardLink =
  "font-mono text-label uppercase underline underline-offset-4 transition-colors duration-200";

export default function SelectedWork() {
  const [activeFilter, setActiveFilter] = useState<WorkFilterId>("all");
  const { image, links, stack, summary, title } = flagshipProject;

  const showFlagship = activeFilter === "all";
  const rows = showFlagship
    ? workProjects
    : allProjects.filter((project) => matchesFilter(project, activeFilter));
  const visibleCount = showFlagship ? allProjects.length : rows.length;
  const countMessage = selectedWork.countTemplate.replace("{count}", String(visibleCount));

  return (
    <section
      id="work"
      className="mx-auto w-full max-w-5xl scroll-mt-28 px-6 pt-8 pb-16 sm:pt-12 sm:pb-24"
    >
      <p className="font-mono text-label uppercase text-muted">{selectedWork.label}</p>
      <h2 className="mt-4 text-heading">{selectedWork.title}</h2>

      <div
        role="group"
        aria-label={selectedWork.filterGroupLabel}
        className="mt-8 flex flex-wrap gap-2 sm:mt-10"
      >
        {filterOptions.map((option) => {
          const pressed = option.id === activeFilter;

          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={pressed}
              onClick={() => setActiveFilter(option.id)}
              className={`${chip} ${
                pressed
                  ? "border-surface bg-surface text-surface-ink"
                  : "border-line text-ink/75"
              }`}
            >
              {option.label}
              <span className={pressed ? "text-surface-ink/70" : "text-ink/65"}>
                {option.count}
              </span>
            </button>
          );
        })}
      </div>
      <p aria-live="polite" className="sr-only">
        {countMessage}
      </p>

      {showFlagship ? (
        <article className="mt-10 overflow-hidden rounded-3xl bg-surface text-surface-ink sm:mt-12">
          {image ? (
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(min-width: 64rem) 64rem, 100vw"
              className="w-full"
            />
          ) : null}

          <div className="p-6 sm:p-10">
            <h3 className="text-3xl sm:text-4xl">{title}</h3>

            <p className="measure mt-5 text-surface-ink/75">{summary}</p>

            <ul className="mt-8 flex flex-wrap gap-2">
              {stack.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-surface-ink/20 px-3 py-1 font-mono text-label uppercase text-surface-ink/65"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              {links.live ? (
                <a
                  href={links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${cardLink} text-surface-ink decoration-surface-ink/40 hover:decoration-surface-ink`}
                >
                  {selectedWork.linkLabels.live}
                  <span aria-hidden="true"> ↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : null}

              {links.repo ? (
                <a
                  href={links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${cardLink} text-surface-ink/65 decoration-surface-ink/25 hover:text-surface-ink hover:decoration-surface-ink/60`}
                >
                  {selectedWork.linkLabels.repo}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : null}
            </div>
          </div>
        </article>
      ) : null}

      <ol className="mt-6 sm:mt-8">
        {rows.map((project, index) => (
          <ProjectRow
            key={project.title}
            project={project}
            number={formatNumber(showFlagship ? index + 2 : index + 1)}
          />
        ))}
      </ol>
    </section>
  );
}
