import { profile } from "@/content/site";

const meta = [profile.name, profile.role, profile.location];

export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 pt-32 pb-16 sm:pt-40 sm:pb-24">
      <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-label uppercase text-muted">
        {meta.map((item) => (
          <li key={item}>{item}</li>
        ))}
        <li className="flex items-center gap-2">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
          {profile.availability}
        </li>
      </ul>

      <h1 className="mt-8 max-w-4xl text-display">{profile.headline}</h1>

      <p className="measure mt-8 text-muted">{profile.intro}</p>
    </section>
  );
}
