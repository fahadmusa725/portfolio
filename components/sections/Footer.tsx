import { navLinks, profile } from "@/content/site";

export default function Footer() {
  return (
    <footer className="mt-24 overflow-hidden border-t border-line">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-label uppercase text-muted transition-colors duration-200 hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={`mailto:${profile.email}`}
          className="w-fit font-mono text-label uppercase text-muted underline decoration-line underline-offset-4 transition-colors duration-200 hover:text-ink hover:decoration-accent"
        >
          {profile.email}
        </a>
      </div>

      <p
        aria-hidden="true"
        className="mx-auto w-full max-w-5xl px-6 pb-4 text-display text-muted/60"
      >
        {profile.name}
      </p>
    </footer>
  );
}
