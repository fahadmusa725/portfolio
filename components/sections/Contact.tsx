import { contactSection, profile } from "@/content/site";

const primaryButton =
  "inline-flex items-center gap-2 rounded-[12px] bg-surface px-6 py-3 font-sans text-base font-medium text-surface-ink transition-opacity hover:opacity-90";

const secondaryButton =
  "inline-flex items-center rounded-[12px] border border-line px-6 py-3 font-sans text-base font-medium text-ink transition-colors hover:border-ink";

export default function Contact() {
  const { actions, details, label, line, title } = contactSection;

  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-14 lg:py-20"
    >
      <p className="flex items-center gap-3 font-mono text-label uppercase text-muted">
        <span aria-hidden="true" className="h-px w-8 bg-accent shrink-0" />
        <span>{label}</span>
      </p>

      <div className="mt-8 rounded-[24px] border border-line bg-paper p-8 sm:mt-10 sm:p-12 lg:grid lg:grid-cols-2 lg:gap-12">
        {/* Left column */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-[clamp(2rem,3.6vw,3.25rem)] font-bold leading-[1.1] tracking-tight text-ink">
              {title}
            </h2>

            <p className="measure mt-4 text-base text-muted sm:text-lg">{line}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href={actions.primary.href} className={primaryButton}>
                <span>{actions.primary.label}</span>
                <span aria-hidden="true">→</span>
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
          </div>

          {/* Availability line with accent dot at bottom of left column */}
          <div className="mt-10 pt-4">
            <p className="flex items-center gap-2 font-mono text-label text-muted">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span>Open to full-time, part-time and freelance work</span>
            </p>
          </div>
        </div>

        {/* Right column: info list separated by hairlines */}
        <div className="mt-10 border-t border-line pt-10 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
          <dl className="divide-y divide-line">
            {details.map((detail) => (
              <div key={detail.label} className="py-4 first:pt-0 last:pb-0">
                <dt className="font-mono text-label uppercase text-muted">
                  {detail.label}
                </dt>

                <dd className="mt-1.5 text-[1.125rem] text-ink">
                  {detail.value ? <p>{detail.value}</p> : null}

                  {detail.links ? (
                    <ul className="flex flex-wrap gap-x-5 gap-y-1">
                      {detail.links.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
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

            {profile.resume ? (
              <div className="py-4 last:pb-0">
                <dt className="font-mono text-label uppercase text-muted">
                  Resume
                </dt>
                <dd className="mt-1.5 text-[1.125rem] text-ink">
                  <a
                    href={profile.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
                  >
                    Resume (PDF)
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </dd>
              </div>
            ) : null}
          </dl>
        </div>
      </div>
    </section>
  );
}
