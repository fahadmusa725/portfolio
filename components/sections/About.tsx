import Image from "next/image";
import { aboutSection, profile } from "@/content/site";

export default function About() {
  const { label, paragraphs, title } = aboutSection;

  return (
    <section
      id="about"
      className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-14 lg:py-20"
    >
      <p className="font-mono text-label uppercase text-muted">{label}</p>
      <h2 className="mt-4 text-heading">{title}</h2>

      {profile.photo ? (
        <div className="mt-8 grid gap-10 sm:mt-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-start">
          <div className="measure space-y-5 text-ink/75">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[24px] border border-line bg-surface/5">
            <Image
              src={profile.photo}
              alt="Portrait of Fahad Musa"
              fill
              sizes="(min-width: 64rem) 22rem, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      ) : (
        <div className="measure mt-8 space-y-5 text-ink/75 sm:mt-10">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      )}
    </section>
  );
}
