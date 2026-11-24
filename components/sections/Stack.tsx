import { stackSection } from "@/content/site";

export default function Stack() {
  const { groups, label, title } = stackSection;

  return (
    <section
      id="stack"
      className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-14 lg:py-20"
    >
      <p className="font-mono text-label uppercase text-accent">{label}</p>
      <h2 className="mt-4 text-heading">{title}</h2>

      <div className="mt-10 grid grid-cols-1 gap-10 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="border-b border-line pb-2 font-mono text-label uppercase text-muted">
              {group.title}
            </h3>

            <ul className="mt-4 space-y-2.5 text-base text-ink">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
