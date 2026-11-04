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
