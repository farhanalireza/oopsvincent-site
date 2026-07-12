import type { Metadata } from "next";

export const siteConfig = {
  name: "Farhan Ali Reza",
  shortName: "farhanalireza",
  title: "Farhan Ali Reza | Full-Stack Developer & Founder",
  description:
    "I build software products. Right now, I'm building Rhythme—a daily system for planning, habits, and reflection.",
  email: "farhan44@duck.com",
  github: "https://github.com/farhanalireza",
  linkedin: "https://linkedin.com/in/farhanalireza",
  x: "https://twitter.com/oopsvincent",
  calendar: "https://cal.eu/farhanalireza",
  nowUpdatedAt: "July 9, 2026",
  siteUrl: "https://farhan.amplecen.com",
} as const;

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.title,
    template: "%s | Farhan Ali Reza",
  },
  description: siteConfig.description,
  applicationName: "Farhan Ali Reza portfolio",
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: [
    "Farhan Ali Reza",
    "farhanalireza",
    "full-stack developer",
    "product builder",
    "portfolio",
    "Next.js",
    "TypeScript",
    "Supabase",
    "software founder",
  ],
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: "website",
    siteName: "Farhan Ali Reza",
    images: [
      {
        url: "/Rhythme.png",
        width: 1200,
        height: 630,
        alt: "Farhan Ali Reza Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: "@oopsvincent",
    images: ["/Rhythme.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const homeHighlights = [
  {
    title: "Paper before code",
    body: "I sketch user flows on paper before writing any code. If a flow feels confusing on paper, writing code won't make it any clearer.",
  },
  {
    title: "Readability over cleverness",
    body: "I prefer simple, readable code over clever abstractions. I want to look at my code a year from now and understand exactly what it does.",
  },
  {
    title: "Full-stack ownership",
    body: "I build the front-end interface, design the PostgreSQL tables in Supabase, and handle client state. I enjoy owning the product from database to UI.",
  },
];

export const workFocus = [
  "Speeding up Rhythme's interface by checking habits instantly on the client and syncing with Supabase in the background.",
  "Simplifying the Postgres database schema to keep user diaries and habit records clean.",
  "Stripping away unnecessary custom options so Rhythme focuses only on the core planner.",
];

export const aboutPrinciples = [
  {
    title: "Solve the problem before writing code",
    body: "I spend time understanding the problem before thinking about implementation. A clear problem usually leads to a simpler solution.",
  },
  {
    title: "Build for change",
    body: "Requirements evolve. I try to write code and organize projects so they can grow without becoming difficult to maintain.",
  },
  {
    title: "Simplicity takes work",
    body: "Simple software rarely happens by accident. I prefer removing unnecessary complexity over adding more features.",
  },
  {
    title: "Products are more than code",
    body: "Good software comes from balancing engineering, design, usability, and clear communication—not from technology alone.",
  },
  {
    title: "Learn by building",
    body: "The fastest way I learn is by creating real projects, making mistakes, and improving them over time.",
  },
];

export const experienceTimeline = [
  {
    year: "2023",
    title: "Learning & Browser Games",
    role: "Independent Developer",
    body: "Built web browser games to learn programming fundamentals and React state management. This taught me how even small changes in layout or latency change how a user feels.",
  },
  {
    year: "2024",
    title: "GrooveEstrella Music Engine",
    role: "Technical Lead (Team Project)",
    body: "A music recommendation web app built in a team of five. Instead of calling third-party recommendation APIs, we designed a custom scoring algorithm based on survey inputs and tag weightings. Shipped using Vite and React.",
  },
  {
    year: "2025-Present",
    title: "Building Rhythme",
    role: "Founder & Developer",
    body: "Building a personal focus product from scratch. Designing the interface, structuring the PostgreSQL schemas in Supabase, and building the Next.js frontend.",
  },
];

export const skillGroups = [
  {
    title: "Languages & Frameworks",
    items: ["TypeScript", "JavaScript", "React", "Next.js", "Node.js"],
  },
  {
    title: "Database & Backend",
    items: ["Supabase", "PostgreSQL", "SQL"],
  },
  {
    title: "Interface & Tooling",
    items: ["Tailwind CSS", "Framer Motion", "Git", "Figma", "shadcn/ui"],
  },
];

export const contactChannels = [
  {
    title: "Email",
    href: `mailto:${siteConfig.email}`,
    label: siteConfig.email,
    note: "Best for recruitment, project opportunities, or technical discussions.",
  },
  {
    title: "Cal.com",
    href: siteConfig.calendar,
    label: "Schedule a call",
    note: "For discussing a role, team projects, or giving feedback on Rhythme.",
  },
  {
    title: "X / Twitter",
    href: siteConfig.x,
    label: "@oopsvincent",
    note: "For quick questions, casual chat, or following progress.",
  },
];

export const nowSections = [
  {
    title: "Rhythme",
    body: "I am simplifying Rhythme's daily interface. I found that having too many custom options made planning feel like work, so I am stripping the app down to just a calendar list, habits checklist, and reflection text box.",
  },
  {
    title: "What I'm learning",
    body: "I'm learning how to handle optimistic updates in Next.js. I want the checkbox to check instantly when clicked, even if the user has a slow mobile connection to Supabase.",
  },
  {
    title: "What I'm optimizing for",
    body: "Code readability and clean folder structures. I'm cleaning up my git commits and standardizing file structures to make future updates easier.",
  },
];

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  email: siteConfig.email,
  jobTitle: "Software Developer",
  url: siteConfig.siteUrl,
  image: `${siteConfig.siteUrl}/avatar.png`,
  description: siteConfig.description,
  sameAs: [siteConfig.github, siteConfig.linkedin, siteConfig.x],
  knowsAbout: [
    "Full-stack development",
    "Web design",
    "Next.js",
    "TypeScript",
    "React",
    "PostgreSQL",
    "Supabase",
    "Tailwind CSS"
  ]
};
