import { educationSection } from "@/content/site";

export default function Education() {
  const { education, label, title } = educationSection;

  return (
    <section
      id="education"
      className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-14 lg:py-20"
    >
      <p className="font-mono text-label uppercase text-accent">{label}</p>
      <h2 className="mt-4 text-heading">{title}</h2>

      <ul className="mt-8 sm:mt-10">
        {education.map((entry) => (
          <li key={entry.institution} className="border-t border-line last:border-b">
            <div className="grid gap-x-10 gap-y-2 py-6 sm:grid-cols-[minmax(0,1fr)_auto]">
              <div>
                <h3 className="text-lg font-bold sm:text-xl">{entry.institution}</h3>
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
