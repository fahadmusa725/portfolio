# Portfolio

The personal portfolio of Fahad Musa, a software engineer in Karachi.

![Next.js](https://img.shields.io/badge/Next.js-16.4.6-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19.3.0-23272F?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![MDX](https://img.shields.io/badge/MDX-3.1.1-1B1F24?logo=mdx&logoColor=F9AC00)

## Overview

A personal portfolio built with Next.js App Router, React 19, Tailwind CSS v4, and MDX. The site features a fixed desktop sidebar with internal scrolling and a mobile drawer, an editorial single-page layout for core profile sections, dedicated project case studies rendered from MDX, and dual light and dark colour themes without page flash.

## Features

### Home Page
- **Sidebar Navigation**: Fixed left panel on desktop (`lg+`) with profile tile, role, availability pill, numbered section index with active scroll observer, social links, resume link, and theme switch. Sticky top bar on mobile with full keyboard accessibility (`aria-expanded`, `aria-controls`, outside click, and `Escape` handling).
- **Hero**: Display headline, introductory summary, location, and dynamically computed project statistics (`PROJECTS`, `LIVE`, `SAAS PLATFORMS`).
- **About**: Profile narrative with an optional 4:5 portrait photograph beside the text on desktop screens.
- **Selected Work**: Interactive category filtering (`All`, `Live`, `SaaS`, `Full stack`, `Frontend`) with dynamic count badges, full-width flagship case study card, and a responsive two-column card grid with metadata and direct case study or external links.
- **Experience & Education**: Split timeline sections detailing professional internships, independent project development, and academic credentials.
- **Stack**: Categorised technology cards covering Frontend, Backend, Mobile, Data and hosting, and Tools.
- **Contact & Footer**: Direct communication channels (Email, WhatsApp, professional links) and an unobtrusive footer with a name watermark.
- **Closing Quote**: Typographic quote section positioned after contact actions.

### Case Study Pages
- **MDX Dynamic Routing**: Static route generation (`/projects/[slug]`) powered by `@next/mdx` and Turbopack.
- **Sticky Table of Contents**: Automatically parsed from raw `## ` heading markers, rendering a sticky sidebar index on desktop and a collapsible `<details>` dropdown on smaller viewports with intersection tracking.
- **Custom Case Study Components**:
  - `<Flow />`: Accessible ordered list rendered as a vertical stepper with numeral badges, labels, notes, and hairline connector lines.
  - `<Decision />`: Structured decision cards detailing architecture choices, rationale (`Why`), and trade-offs without markup duplication.
- **Metadata Integration**: Back navigation to projects, summary intro, full-width interface screenshot, stack list, and external repository or live preview actions.

### Design & System
- **Colour Tokens**: Structured CSS variable palette mapped in Tailwind CSS (`paper`, `ink`, `muted`, `line`, `surface`, `surface-ink`, `accent`, `accent-on-surface`, `card-border`).
- **Zero-Flash Theme Switching**: CSS-driven toggle supporting OS preferences (`prefers-color-scheme`) and manual overrides (`data-theme`) via an inline blocking script.
- **Switch-Style Theme Toggle**: Custom interactive button with sliding thumb and SVG sun/moon glyph transitions.
- **Accessibility & Motion**: Full keyboard focus visibility (`focus-visible`), contrast ratios verified above WCAG AA thresholds, and comprehensive `prefers-reduced-motion` guards disabling smooth scrolling and animations.

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 16.4.6 (App Router, Turbopack) |
| UI Library | React 19.3.0 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 (`@tailwindcss/turbopack`) |
| Content & Case Studies | MDX (`@next/mdx`, `@mdx-js/loader`, `@mdx-js/react`) |
| Fonts | Inter Tight and JetBrains Mono via `next/font/google` |
| Linting | ESLint 9 (`eslint-config-next`) |

## Project Structure

```text
.
├── app/
│   ├── globals.css              # Theme CSS variables, Tailwind tokens, and base styles
│   ├── layout.tsx               # Root HTML layout, font setup, theme script, and sidebar
│   ├── page.tsx                 # Home page view assembling profile sections
│   └── projects/
│       └── [slug]/
│           └── page.tsx         # Dynamic case study route and MDX renderer
├── components/
│   ├── ThemeToggle.tsx          # Animated switch button for dark and light modes
│   ├── case-study/
│   │   ├── Decision.tsx         # Architectural decision callout component
│   │   ├── Flow.tsx             # Vertical stepper component for request lifecycles
│   │   └── Toc.tsx              # Sticky desktop and collapsible mobile table of contents
│   ├── nav/
│   │   └── SidebarNav.tsx       # Desktop sidebar and mobile sticky navigation header
│   └── sections/
│       ├── About.tsx            # About section and optional portrait image
│       ├── ClosingQuote.tsx     # Closing attribution quote section
│       ├── Contact.tsx          # Contact links, email, WhatsApp, and resume link
│       ├── Education.tsx        # Academic history listing
│       ├── Experience.tsx       # Work experience timeline
│       ├── Footer.tsx           # Minimal footer with email and name watermark
│       ├── Hero.tsx             # Intro section with headline and dynamic stats strip
│       ├── SelectedWork.tsx     # Project grid with category filtering and flagship card
│       └── Stack.tsx            # Technical stack cards
├── content/
│   ├── projects/
│   │   ├── careflow-hms.mdx     # CareFlow HMS case study body
│   │   └── dineflow.mdx         # DineFlow case study body
│   └── site.ts                  # Central structured data for profile, nav, and projects
├── lib/
│   ├── projects.ts              # Helpers for slug queries and case study indexing
│   └── theme.ts                 # Theme initialisation script and toggle utility
├── public/
│   ├── photo.jpeg               # Profile portrait image
│   ├── resume.pdf               # Downloadable curriculum vitae
│   └── work/                    # Project screenshot assets
├── mdx-components.tsx           # Required MDX component mapping config for App Router
├── next.config.ts               # Next.js configuration with MDX and Turbopack rules
├── package.json                 # Project scripts and dependency declarations
└── tsconfig.json                # TypeScript compiler settings
```

## Getting Started

### Prerequisites
A current Node.js LTS release and npm.

### Installation

Clone the repository and install dependencies:

```bash
npm install
```

### Development

Run the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Next.js development server with Turbopack |
| `npm run build` | Compiles the production build with type checking and static generation |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs ESLint to check code quality and conventions |
| `npm run typecheck` | Runs TypeScript compiler checks without emitting files |

## Adding a Project

To add a new project to the portfolio:

1. **Add Project Screenshot**:
   Place the image file in `public/work/<project-name>.png`.

2. **Register in `content/site.ts`**:
   Add an object to the `workProjects` array (or update `flagshipProject`):
   ```typescript
   {
     slug: "project-slug",           // Required if hasCaseStudy is true
     hasCaseStudy: true,             // Set to true to link to an MDX case study
     title: "Project Name",
     summary: "Brief project summary describing architecture and scope.",
     stack: ["Next.js", "TypeScript", "MongoDB"],
     category: "saas",               // "saas" | "fullstack" | "frontend"
     links: {
       live: "https://example.com",  // Optional live URL
       repo: "https://github.com/...", // Optional repository URL
     },
     image: {
       src: "/work/project-name.png",
       alt: "Screenshot of the Project Name interface",
       width: 1600,
       height: 900,
     },
   }
   ```

3. **Create Case Study (Optional)**:
   If `hasCaseStudy` is set to `true`, create `content/projects/<slug>.mdx`:
   ```mdx
   ## Overview
   Describe the background, target problem, and role.

   ## Architecture
   Explain technical design, data boundaries, and tenant or request flow.

   <Flow steps={[
     { label: "Client", note: "Sends request with auth token" },
     { label: "Server", note: "Validates and executes logic" }
   ]} />

   ## Key decisions

   <Decision title="Decision Title" why="Rationale explaining trade-offs and constraints.">
   Implementation details or trade-offs.
   </Decision>

   ## Current limitations
   - Note any unfinished or scope-limited items.
   ```
   Headings starting with `## ` are automatically collected into the page's table of contents. Available custom components in MDX are `<Flow steps={[{ label, note }]} />` and `<Decision title="..." why="...">children</Decision>`.

## Deployment

The application is configured for deployment on [Vercel](https://vercel.com).

No environment variables are required to build or run the project. All content, metadata, and static assets are self-contained within the repository.

## Author

Fahad Musa ([https://github.com/fahadmusa725](https://github.com/fahadmusa725))

## License

Proprietary, all rights reserved.
