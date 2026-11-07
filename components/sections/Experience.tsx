import { experienceSection } from "@/content/site";

export default function Experience() {
  const { education, entries, label, subLabels, title } = experienceSection;

  return (
    <section
      id="experience"
      className="mx-auto w-full max-w-5xl scroll-mt-28 px-6 pt-8 pb-16 sm:pt-12 sm:pb-24"
    >
      <p className="font-mono text-label uppercase text-muted">{label}</p>
      <h2 className="mt-4 text-heading">{title}</h2>

      <h3 className="mt-10 font-mono text-label uppercase text-ink/65 sm:mt-12">
        {subLabels.experience}
      </h3>

      <ul className="mt-4">
        {entries.map((entry) => (
          <li key={entry.role} className="border-t border-line last:border-b">
            <div className="grid gap-x-10 gap-y-3 py-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] sm:py-7">
              <div>
                <h4 className="text-xl sm:text-2xl">{entry.role}</h4>
                <p className="mt-2 font-mono text-label uppercase text-ink/65">
                  {entry.period}
                </p>
              </div>

              <ul className="list-disc space-y-2 pl-5 text-ink/75 marker:text-ink/40 sm:pt-1">
                {entry.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>

      <h3 className="mt-12 font-mono text-label uppercase text-ink/65">
        {subLabels.education}
      </h3>

      <ul className="mt-4">
        {education.map((entry) => (
          <li key={entry.institution} className="border-t border-line last:border-b">
            <div className="grid gap-x-10 gap-y-2 py-6 sm:grid-cols-[minmax(0,1fr)_auto]">
              <div>
                <h4 className="text-lg sm:text-xl">{entry.institution}</h4>
                <p className="mt-1 text-ink/75">{entry.programme}</p>
                {entry.note ? (
                  <p className="measure mt-2 text-ink/65">{entry.note}</p>
                ) : null}
              </div>

              <p className="font-mono text-label uppercase text-ink/65 sm:text-right">
                {entry.period}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
