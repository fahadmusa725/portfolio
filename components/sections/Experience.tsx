import { experienceSection } from "@/content/site";

export default function Experience() {
  const { entries, label, title } = experienceSection;

  return (
    <section
      id="experience"
      className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-14 lg:py-20"
    >
      <p className="font-mono text-label uppercase text-accent">{label}</p>
      <h2 className="mt-4 text-heading">{title}</h2>

      <ul className="mt-8 sm:mt-10">
        {entries.map((entry) => (
          <li key={entry.role} className="border-t border-line last:border-b">
            <div className="grid gap-x-10 gap-y-3 py-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] sm:py-7">
              <div>
                <h3 className="text-xl font-bold sm:text-2xl">{entry.role}</h3>
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
    </section>
  );
}
