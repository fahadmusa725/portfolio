import { closingQuote } from "@/content/site";

export default function ClosingQuote() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-10 sm:py-16">
      <blockquote className="max-w-3xl">
        <p className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-[1.1] tracking-tight text-ink">
          {closingQuote.text}
        </p>
        <footer className="mt-3">
          <cite className="font-mono text-label uppercase not-italic text-muted">
            — {closingQuote.attribution}
          </cite>
        </footer>
      </blockquote>
    </section>
  );
}
