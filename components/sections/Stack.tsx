import { stackSection } from "@/content/site";

export default function Stack() {
  const { groups, label, title } = stackSection;

  return (
    <section
      id="stack"
      className="mx-auto w-full max-w-5xl scroll-mt-28 px-6 pt-8 pb-16 sm:pt-12 sm:pb-24"
    >
      <p className="font-mono text-label uppercase text-muted">{label}</p>
      <h2 className="mt-4 text-heading">{title}</h2>

      <ul className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <li key={group.title} className="rounded-3xl bg-surface p-6 text-surface-ink">
            <h3 className="font-mono text-label uppercase text-surface-ink/65">
              {group.title}
            </h3>

            <ul className="mt-4 space-y-1 text-base text-surface-ink/90">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
