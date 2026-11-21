import { aboutSection } from "@/content/site";

export default function About() {
  const { label, paragraphs, title } = aboutSection;

  return (
    <section
      id="about"
      className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-16 sm:py-24"
    >
      <p className="font-mono text-label uppercase text-muted">{label}</p>
      <h2 className="mt-4 text-heading">{title}</h2>

      <div className="measure mt-8 space-y-5 text-ink/75 sm:mt-10">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
