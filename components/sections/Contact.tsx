import { contactSection } from "@/content/site";

const primaryButton =
  "inline-flex items-center rounded-full bg-surface-ink px-5 py-2.5 font-mono text-label uppercase text-surface";

const secondaryButton =
  "inline-flex items-center rounded-full border border-surface-ink/40 px-5 py-2.5 font-mono text-label uppercase text-surface-ink";

export default function Contact() {
  const { actions, availability, details, label, line, title } = contactSection;

  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-5xl scroll-mt-28 px-6 pt-8 pb-16 sm:pt-12 sm:pb-24"
    >
      <p className="font-mono text-label uppercase text-muted">{label}</p>
      <h2 className="mt-4 max-w-3xl text-heading">{title}</h2>

      <div className="mt-10 rounded-3xl border border-line bg-surface p-6 text-surface-ink sm:mt-12 sm:p-10">
        <p className="flex items-center gap-2 font-mono text-label uppercase text-surface-ink/70">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
          {availability}
        </p>

        <p className="measure mt-6 text-surface-ink/85">{line}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={actions.primary.href} className={primaryButton}>
            {actions.primary.label}
          </a>

          <a
            href={actions.secondary.href}
            target="_blank"
            rel="noopener noreferrer"
            className={secondaryButton}
          >
            {actions.secondary.label}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>

        <dl className="mt-10 grid gap-x-8 gap-y-6 border-t border-surface-ink/15 pt-8 sm:grid-cols-2">
          {details.map((detail) => (
            <div key={detail.label}>
              <dt className="font-mono text-label uppercase text-surface-ink/65">
                {detail.label}
              </dt>

              <dd className="mt-2">
                {detail.value ? <p>{detail.value}</p> : null}

                {detail.links ? (
                  <ul className="flex flex-wrap gap-x-5 gap-y-1">
                    {detail.links.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline decoration-surface-ink/40 underline-offset-4"
                        >
                          {link.label}
                          <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
