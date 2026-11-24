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
  headlineEmphasis?: string;
  eyebrowParts: string[];
  statusLines: string[];
  intro: string;
  email: string;
  photo?: string;
  resume?: string;
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
  slug?: string;
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
  { label: "Intro", href: "/#intro" },
  { label: "About", href: "/#about" },
  { label: "Selected work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Education", href: "/#education" },
  { label: "Stack", href: "/#stack" },
  { label: "Contact", href: "/#contact" },
];

export const profile: Profile = {
  name: "Fahad Musa",
  role: "Software Engineer",
  location: "Karachi",
  availability: "Open to work",
  headline: "I build multi-tenant software that works end to end.",
  headlineEmphasis: "works end to end.",
  eyebrowParts: [
    "Fahad Musa",
    "Software Engineer",
    "MERN and Next.js",
    "Karachi",
  ],
  statusLines: [
    "Open to full-time, part-time and freelance work",
    "Currently: studying software engineering at Aptech",
  ],
  intro:
    "Software engineer in Karachi. I build production-style web apps with the MERN stack, including multi-tenant systems for hospitals and restaurants and real-time tools with Next.js and TypeScript.",
  email: "fahadmusa725@gmail.com",
  photo: "/photo.jpeg",
  resume: "/resume.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/fahadmusa725" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/fahad-musa-ba30ab355" },
  ],
};

export const selectedWork: WorkSection = {
  label: "02 / Selected work",
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
    slug: "dineflow",
    hasCaseStudy: true,
    title: "DineFlow",
    summary:
      "Multi-tenant restaurant POS. Each restaurant's menu, staff, inventory, orders and reports stay separate, with plan-based access control.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    category: "saas",
    links: {
      live: "https://dineflow-saas-taupe.vercel.app",
      repo: "https://github.com/fahadmusa725/pos-saas",
    },
    image: {
      src: "/work/dineflow.png",
      alt: "Screenshot of the DineFlow interface",
      width: 1599,
      height: 892,
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
    image: {
      src: "/work/projectflow.png",
      alt: "Screenshot of the ProjectFlow interface",
      width: 1600,
      height: 900,
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
    image: {
      src: "/work/vibely.png",
      alt: "Screenshot of the Vibely interface",
      width: 1599,
      height: 892,
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
    image: {
      src: "/work/strideon.png",
      alt: "Screenshot of the Strideon interface",
      width: 1599,
      height: 893,
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
    image: {
      src: "/work/booksy.png",
      alt: "Screenshot of the Booksy interface",
      width: 1599,
      height: 892,
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
    image: {
      src: "/work/premiumshine.png",
      alt: "Screenshot of the Premium Shine Detailing interface",
      width: 1600,
      height: 900,
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
    image: {
      src: "/work/32smile.png",
      alt: "Screenshot of the 32 Smile interface",
      width: 1599,
      height: 892,
    },
  },
];

export const flagshipProject: Project = {
  slug: "careflow-hms",
  hasCaseStudy: true,
  title: "CareFlow HMS",
  summary:
    "Multi-tenant hospital management platform. Hospitals run OPD, IPD, lab, pharmacy and billing on one system with isolated data.",
  stack: ["React", "Node.js", "Express", "MongoDB"],
  category: "saas",
  links: {
    live: "https://hms-project-hhtz.vercel.app",
    repo: "https://github.com/fahadmusa725/HMS-Project",
  },
  image: {
    src: "/work/careflow.png",
    alt: "Screenshot of the CareFlow HMS interface",
    width: 1600,
    height: 894,
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
  entries: ExperienceEntry[];
};

export const experienceSection: ExperienceSection = {
  label: "03 / Experience",
  title: "Experience",
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
};

export type EducationSection = {
  label: string;
  title: string;
  education: EducationEntry[];
};

export const educationSection: EducationSection = {
  label: "04 / Education",
  title: "Education",
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

export type StackItem = {
  name: string;
  note?: string;
};

export type StackGroup = {
  title: string;
  descriptor?: string;
  items: (string | StackItem)[];
};

export type StackSection = {
  label: string;
  title: string;
  groups: StackGroup[];
};

export const stackSection: StackSection = {
  label: "05 / Stack",
  title: "Stack",
  groups: [
    {
      title: "Languages",
      descriptor: "core",
      items: [
        { name: "JavaScript", note: "daily" },
        { name: "TypeScript", note: "daily" },
        { name: "HTML", note: "daily" },
        { name: "CSS", note: "daily" },
        { name: "PHP", note: "basic" },
        { name: "C#", note: "basic" },
        { name: "Dart", note: "learning" },
      ],
    },
    {
      title: "Frontend",
      descriptor: "web",
      items: [
        { name: "React", note: "daily" },
        { name: "Next.js", note: "daily" },
        { name: "Tailwind CSS", note: "daily" },
        { name: "Flutter", note: "learning" },
      ],
    },
    {
      title: "Backend",
      descriptor: "apis",
      items: [
        { name: "Node.js", note: "daily" },
        { name: "Express.js", note: "daily" },
        { name: "Laravel", note: "basic" },
      ],
    },
    {
      title: "Data",
      descriptor: "storage",
      items: [
        { name: "MongoDB", note: "daily" },
        { name: "MySQL", note: "basic" },
        { name: "SQL Server", note: "basic" },
      ],
    },
    {
      title: "Tooling",
      descriptor: "ship",
      items: [
        { name: "Git", note: "daily" },
        { name: "GitHub", note: "daily" },
        { name: "Vercel", note: "deploy" },
        { name: "Netlify", note: "deploy" },
        { name: "Ably", note: "when needed" },
        { name: "Stripe", note: "checkout" },
        { name: "Cloudinary", note: "media" },
      ],
    },
    {
      title: "Office",
      descriptor: "daily",
      items: [
        { name: "Word" },
        { name: "Excel" },
        { name: "PowerPoint" },
      ],
    },
  ],
};

export type AboutSection = {
  label: string;
  title: string;
  paragraphs: string[];
};

export const aboutSection: AboutSection = {
  label: "01 / About",
  title: "About",
  paragraphs: [
    "I'm a software engineer in Karachi, currently studying at Aptech. I build with the MERN stack and Next.js and I care most about security, clean design and software that is easy to use and does not break.",
    "That shows in how I build. In CareFlow HMS, tenant isolation lives in the framework and fails closed, so a missed filter cannot leak another hospital's data. In DineFlow, the server re-checks stock, coupons and tax instead of trusting the client.",
    "I'm open to full-time, part-time and freelance work.",
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
  label: "06 / Contact",
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

export type QuoteSection = {
  text: string;
  attribution: string;
};

export const siteUrl = "https://fahadmusa-dev.vercel.app";

export const siteMetadata = {
  title: "Fahad Musa | Software Engineer",
  description:
    "Portfolio of Fahad Musa, a software engineer in Karachi building multi-tenant MERN applications, with case studies on CareFlow HMS and DineFlow.",
};

export const notFoundContent = {
  label: "404 / NOT FOUND",
  title: "Page not found",
  description: "The page you are looking for does not exist or has been moved.",
  backLabel: "Back to home",
};

export const closingQuote: QuoteSection = {
  text: "“Well done is better than well said.”",
  attribution: "Benjamin Franklin",
};
