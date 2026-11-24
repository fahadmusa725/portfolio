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
  const eyebrowText = profile.eyebrowParts.join(" · ");

  // Render headline with optional emphasis phrase underlined
  const renderHeadline = () => {
    if (!profile.headlineEmphasis || !profile.headline.includes(profile.headlineEmphasis)) {
      return profile.headline;
    }

    const [before, after] = profile.headline.split(profile.headlineEmphasis);
    return (
      <>
        {before}
        <span className="underline decoration-accent decoration-[0.08em] underline-offset-[0.12em]">
          {profile.headlineEmphasis}
        </span>
        {after}
      </>
    );
  };

  return (
    <section
      id="intro"
      className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-14 lg:py-20"
    >
      <p className="font-mono text-label uppercase text-accent">
        {eyebrowText}
      </p>

      <h1 className="mt-8 max-w-4xl text-[clamp(2.5rem,5.5vw,5rem)] font-bold leading-[1.05] tracking-tight text-ink">
        {renderHeadline()}
      </h1>

      <p className="measure mt-8 text-muted">{profile.intro}</p>

      {/* Stats strip */}
      <div className="mt-12 grid grid-cols-3 gap-4 border-t border-line pt-6 sm:mt-14 sm:max-w-xl">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl font-bold tracking-tight text-accent sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 font-mono text-label uppercase text-muted">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Status lines under stats */}
      <div className="mt-6 border-t border-line pt-4 sm:max-w-xl space-y-1.5 font-mono text-label text-muted">
        {profile.statusLines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </section>
  );
}
