export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  role: string;
  location: string;
  availability: string;
  headline: string;
  intro: string;
  email: string;
  socials: SocialLink[];
};

export type ProjectLinks = {
  live?: string;
  repo?: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  title: string;
  summary: string;
  stack: string[];
  links: ProjectLinks;
  image?: ProjectImage;
  year?: number;
  hasCaseStudy?: boolean;
};

export type WorkSection = {
  label: string;
  title: string;
  linkLabels: {
    live: string;
    repo: string;
  };
};

export const navLinks: NavLink[] = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Stack", href: "/#stack" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export const profile: Profile = {
  name: "Fahad Musa",
  role: "Full Stack Developer",
  location: "Karachi",
  availability: "Open to work",
  headline: "I build multi-tenant software that works end to end.",
  intro:
    "Full stack developer in Karachi. I build production-style web apps with the MERN stack, including multi-tenant systems for hospitals and restaurants, and real-time tools with Next.js and TypeScript.",
  email: "fahadmusa725@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/fahadmusa725" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/fahad-musa-ba30ab355" },
  ],
};

export const selectedWork: WorkSection = {
  label: "01 / Selected work",
  title: "Selected work",
  linkLabels: {
    live: "Live site",
    repo: "Repository",
  },
};

export const flagshipProject: Project = {
  title: "CareFlow HMS",
  summary:
    "Multi-tenant hospital management platform. Hospitals run OPD, IPD, lab, pharmacy and billing on one system with isolated data.",
  stack: ["React", "Node.js", "Express", "MongoDB"],
  links: {
    live: "https://hms-project-hhtz.vercel.app",
    repo: "https://github.com/fahadmusa725/HMS-Project",
  },
};
