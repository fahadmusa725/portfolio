import { stackSection } from "@/content/site";

export default function Stack() {
  const { groups, label, title } = stackSection;

  return (
    <section
      id="stack"
      className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-14 lg:py-20"
    >
      <p className="flex items-center gap-3 font-mono text-label uppercase text-muted">
        <span aria-hidden="true" className="h-px w-8 bg-accent shrink-0" />
        <span>{label}</span>
      </p>
      <h2 className="mt-4 text-heading">{title}</h2>

      <div className="mt-10 grid grid-cols-1 items-start gap-8 sm:mt-12 sm:grid-cols-2 xl:grid-cols-4">
        {groups.map((group) => (
          <div key={group.title} className="flex flex-col">
            <div className="flex h-8 items-baseline justify-between border-b border-line pb-2 whitespace-nowrap">
              <h3 className="font-mono text-label uppercase text-muted">
                {group.title}
              </h3>
              {group.descriptor ? (
                <span className="font-mono text-label text-muted/70">
                  {group.descriptor}
                </span>
              ) : null}
            </div>

            <ul className="mt-3 space-y-2 text-base text-ink">
              {group.items.map((rawItem) => {
                const item = typeof rawItem === "string" ? { name: rawItem } : rawItem;
                return (
                  <li key={item.name} className="flex items-baseline justify-between gap-2">
                    <span className="text-[1rem] leading-snug">{item.name}</span>
                    {item.note ? (
                      <span className="shrink-0 font-mono text-[12px] text-muted/70">
                        {item.note}
                      </span>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
