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

/**
 * Ordered hairline rows shown under the flagship card. Row numbers are derived
 * from position, so the flagship card counts as 01.
 */
export const workProjects: Project[] = [
  {
    title: "DineFlow",
    summary:
      "Multi-tenant restaurant POS. Each restaurant's menu, staff, inventory, orders and reports stay separate, with plan-based access control.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    links: {
      repo: "https://github.com/fahadmusa725/pos-saas",
    },
  },
  {
    title: "ProjectFlow",
    summary:
      "Kanban project management tool with real-time board sync, role-based projects and a delivery dashboard.",
    stack: ["Next.js", "TypeScript", "MongoDB", "Ably"],
    links: {
      live: "https://fahad-projectflow.vercel.app",
      repo: "https://github.com/fahadmusa725/projectflow",
    },
  },
  {
    title: "Vibely",
    summary:
      "Instagram-style social app with posts, 24-hour stories, follows, notifications and an admin dashboard.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
    links: {
      live: "https://vibely-e8zu.vercel.app",
    },
  },
  {
    title: "Strideon",
    summary:
      "Footwear store with stock per colorway and size, Stripe test-mode checkout and an admin dashboard.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    links: {
      live: "https://strideon-store.vercel.app",
    },
  },
  {
    title: "Booksy",
    summary:
      "Online bookstore for PDF, hard copy and CD books with cart, checkout and an admin dashboard.",
    stack: ["PHP", "MySQL"],
    links: {
      repo: "https://github.com/fahadmusa725/Booksy",
    },
  },
  {
    title: "Premium Shine Detailing",
    summary:
      "Mobile car detailing website with services, pricing, gallery and a booking form with email notifications.",
    stack: ["HTML", "CSS", "JavaScript", "EmailJS"],
    links: {
      live: "https://premiumshinedetailing.vercel.app",
    },
  },
  {
    title: "32 Smile",
    summary:
      "Dental clinic website built as a team project, covering services, education, case studies and appointment booking.",
    stack: ["HTML", "CSS", "JavaScript"],
    links: {
      live: "https://dental-clinic-website-jade-kappa.vercel.app",
    },
  },
];

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
