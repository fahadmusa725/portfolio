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

export type ProjectCategory = "saas" | "fullstack" | "frontend";

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
  category: ProjectCategory;
  image?: ProjectImage;
  year?: number;
  hasCaseStudy?: boolean;
};

export type WorkFilterId = "all" | "live" | ProjectCategory;

export type WorkFilter = {
  id: WorkFilterId;
  label: string;
};

export type WorkSection = {
  label: string;
  title: string;
  linkLabels: {
    live: string;
    repo: string;
  };
  filterGroupLabel: string;
  filters: WorkFilter[];
  countTemplate: string;
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
  filterGroupLabel: "Filter projects",
  filters: [
    { id: "all", label: "All" },
    { id: "live", label: "Live" },
    { id: "saas", label: "SaaS" },
    { id: "fullstack", label: "Full stack" },
    { id: "frontend", label: "Frontend" },
  ],
  countTemplate: "Showing {count} projects",
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
    category: "saas",
    links: {
      repo: "https://github.com/fahadmusa725/pos-saas",
    },
  },
  {
    title: "ProjectFlow",
    summary:
      "Kanban project management tool with real-time board sync, role-based projects and a delivery dashboard.",
    stack: ["Next.js", "TypeScript", "MongoDB", "Ably"],
    category: "fullstack",
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
    category: "fullstack",
    links: {
      live: "https://vibely-e8zu.vercel.app",
    },
  },
  {
    title: "Strideon",
    summary:
      "Footwear store with stock per colorway and size, Stripe test-mode checkout and an admin dashboard.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    category: "fullstack",
    links: {
      live: "https://strideon-store.vercel.app",
    },
  },
  {
    title: "Booksy",
    summary:
      "Online bookstore for PDF, hard copy and CD books with cart, checkout and an admin dashboard.",
    stack: ["PHP", "MySQL"],
    category: "fullstack",
    links: {
      repo: "https://github.com/fahadmusa725/Booksy",
    },
  },
  {
    title: "Premium Shine Detailing",
    summary:
      "Mobile car detailing website with services, pricing, gallery and a booking form with email notifications.",
    stack: ["HTML", "CSS", "JavaScript", "EmailJS"],
    category: "frontend",
    links: {
      live: "https://premiumshinedetailing.vercel.app",
    },
  },
  {
    title: "32 Smile",
    summary:
      "Dental clinic website built as a team project, covering services, education, case studies and appointment booking.",
    stack: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
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
  category: "saas",
  links: {
    live: "https://hms-project-hhtz.vercel.app",
    repo: "https://github.com/fahadmusa725/HMS-Project",
  },
};

export type ExperienceEntry = {
  role: string;
  period: string;
  points: string[];
};

export type EducationEntry = {
  institution: string;
  programme: string;
  period: string;
  note?: string;
};

export type ExperienceSection = {
  label: string;
  title: string;
  subLabels: {
    experience: string;
    education: string;
  };
  entries: ExperienceEntry[];
  education: EducationEntry[];
};

export const experienceSection: ExperienceSection = {
  label: "02 / Experience",
  title: "Experience and education",
  subLabels: {
    experience: "Experience",
    education: "Education",
  },
  entries: [
    {
      role: "Full Stack Development Intern, CodeAlpha",
      period: "2026",
      points: [
        "Built three full stack projects: Strideon (e-commerce with Stripe checkout), Vibely (social platform) and ProjectFlow (real-time project management).",
      ],
    },
    {
      role: "Independent full stack projects",
      period: "Aug 2024 to present",
      points: [
        "Built and deployed CareFlow HMS, a multi-tenant hospital management platform, and built DineFlow, a multi-tenant restaurant POS.",
        "Built ProjectFlow with Next.js, TypeScript and MongoDB, with real-time board sync using Ably.",
        "Worked on individual and team projects, from responsive frontends to REST APIs, authentication and database design.",
        "Deployed projects on Vercel and Netlify.",
      ],
    },
    {
      role: "Call center, sales agent (chat-based)",
      period: "Aug 2024 to 2026",
      points: [
        "Worked as a chat-based sales agent on Facebook Messenger.",
        "Handled customer queries through written communication.",
        "Built communication, time management and teamwork skills.",
      ],
    },
  ],
  education: [
    {
      institution: "Aptech Institute",
      programme: "Advanced Diploma in Software Engineering",
      period: "2024 to present",
      note: "Web development, object-oriented programming, database systems, software design and full stack development.",
    },
    {
      institution: "Siraj-ul-Daulah Government Degree College, F.C. Area, Karachi",
      programme: "Intermediate, Commerce",
      period: "2021 to 2023",
    },
    {
      institution: "JMA Boys and Girls Secondary School Campus 2",
      programme: "Matriculation, Computer Science",
      period: "2019 to 2021",
    },
  ],
};

export type StackGroup = {
  title: string;
  items: string[];
};

export type StackSection = {
  label: string;
  title: string;
  groups: StackGroup[];
};

export const stackSection: StackSection = {
  label: "03 / Stack",
  title: "Stack",
  groups: [
    {
      title: "Frontend",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Bootstrap",
        "jQuery",
      ],
    },
    {
      title: "Backend",
      items: ["Node.js", "Express.js", "PHP", "Laravel", "C#"],
    },
    {
      title: "Mobile",
      items: ["Dart", "Flutter"],
    },
    {
      title: "Data and hosting",
      items: ["MongoDB", "MySQL", "SQL Server", "Vercel", "Netlify"],
    },
    {
      title: "Tools",
      items: [
        "Git",
        "GitHub",
        "Ably",
        "Stripe",
        "Cloudinary",
        "Microsoft Word",
        "Microsoft Excel",
        "Microsoft PowerPoint",
      ],
    },
  ],
};

export type ContactAction = {
  label: string;
  href: string;
};

export type ContactDetail = {
  label: string;
  value?: string;
  links?: SocialLink[];
};

export type ContactSection = {
  label: string;
  title: string;
  line: string;
  actions: {
    primary: ContactAction;
    secondary: ContactAction;
  };
  details: ContactDetail[];
  availability: string;
};

export const contactSection: ContactSection = {
  label: "05 / Contact",
  title: "Hiring or have a project? Write to me.",
  line: "Email or WhatsApp, whichever is easier for you.",
  actions: {
    primary: {
      label: "Email me",
      href: `mailto:${profile.email}`,
    },
    secondary: {
      label: "WhatsApp",
      href: "https://wa.me/923313687521",
    },
  },
  details: [
    { label: "Email", value: profile.email },
    { label: "WhatsApp", value: "+92 331 3687521" },
    { label: "Elsewhere", links: profile.socials },
    { label: "Based in", value: "Karachi, Pakistan" },
  ],
  availability: profile.availability,
};
