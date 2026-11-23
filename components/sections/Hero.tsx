import { flagshipProject, profile, workProjects, type Project } from "@/content/site";

const allProjects: Project[] = [flagshipProject, ...workProjects];
const liveCount = allProjects.filter((p) => Boolean(p.links.live)).length;
const saasCount = allProjects.filter((p) => p.category === "saas").length;
const totalCount = allProjects.length;

const stats = [
  { value: totalCount, label: "Projects" },
  { value: liveCount, label: "Live" },
  { value: saasCount, label: "SaaS Platforms" },
];

export default function Hero() {
  return (
    <section
      id="intro"
      className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-14 lg:py-20"
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-label uppercase text-muted">00 / INTRO</p>
        <p className="font-mono text-label uppercase text-muted">{profile.location}</p>
      </div>

      <h1 className="mt-8 max-w-4xl text-display">{profile.headline}</h1>

      <p className="measure mt-8 text-muted">{profile.intro}</p>

      {/* Stats strip */}
      <div className="mt-12 grid grid-cols-3 gap-4 border-y border-line py-6 sm:mt-14 sm:max-w-xl">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl font-bold tracking-tight text-accent sm:text-4xl">
              {String(stat.value).padStart(2, "0")}
            </p>
            <p className="mt-1 font-mono text-label uppercase text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
