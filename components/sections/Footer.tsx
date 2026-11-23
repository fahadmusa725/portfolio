import { profile } from "@/content/site";

export default function Footer() {
  return (
    <footer className="overflow-hidden border-t border-line">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-end px-6 pt-6 pb-2">
        <a
          href={`mailto:${profile.email}`}
          className="font-mono text-label uppercase text-muted underline decoration-line underline-offset-4 transition-colors duration-200 hover:text-ink hover:decoration-accent"
        >
          {profile.email}
        </a>
      </div>

      <p
        aria-hidden="true"
        className="mx-auto w-full max-w-5xl px-6 pb-2 text-display text-muted/40 select-none"
      >
        {profile.name}
      </p>
    </footer>
  );
}
