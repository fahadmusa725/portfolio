import { selectedWork, type Project } from "@/content/site";

type ProjectRowProps = {
  project: Project;
  number: string;
};

const rowLink =
  "font-mono text-label uppercase text-ink underline decoration-accent underline-offset-4";

export default function ProjectRow({ project, number }: ProjectRowProps) {
  const { links, stack, summary, title } = project;

  return (
    <li className="border-t border-line last:border-b">
      <div className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 gap-y-2 py-6 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-x-6 sm:py-7">
        <p className="font-mono text-label uppercase text-ink/65 sm:pt-1">{number}</p>

        <div className="min-w-0">
          <h3 className="text-xl sm:text-2xl">{title}</h3>

          <p className="measure mt-2 text-ink/75">{summary}</p>

          <p className="mt-3 font-mono text-label uppercase text-ink/65">
            {stack.join(" \u00b7 ")}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
            {links.live ? (
              <a
                href={links.live}
                target="_blank"
                rel="noopener noreferrer"
                className={rowLink}
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
                className={rowLink}
              >
                {selectedWork.linkLabels.repo}
                <span aria-hidden="true"> ↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </li>
  );
}
