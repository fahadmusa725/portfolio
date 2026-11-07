import Image from "next/image";

import ProjectRow from "@/components/ProjectRow";
import { flagshipProject, selectedWork, workProjects } from "@/content/site";

const cardLink =
  "font-mono text-label uppercase underline underline-offset-4 transition-colors duration-200";

export default function SelectedWork() {
  const { image, links, stack, summary, title } = flagshipProject;

  return (
    <section
      id="work"
      className="mx-auto w-full max-w-5xl scroll-mt-28 px-6 pt-8 pb-16 sm:pt-12 sm:pb-24"
    >
      <p className="font-mono text-label uppercase text-muted">{selectedWork.label}</p>
      <h2 className="mt-4 text-heading">{selectedWork.title}</h2>

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

      <ol className="mt-6 sm:mt-8">
        {workProjects.map((project, index) => (
          <ProjectRow
            key={project.title}
            project={project}
            number={String(index + 2).padStart(2, "0")}
          />
        ))}
      </ol>
    </section>
  );
}
