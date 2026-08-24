import type { Metadata } from "next";

export const siteConfig = {
  name: "Farhan Ali Reza",
  shortName: "farhanalireza",
  title: "Farhan Ali Reza | Full-Stack Developer & Founder",
  description:
    "I build software products. Right now, I'm building Rhythmé—a personal alignment system unifying execution, emotional awareness, and behavioral intelligence.",
  email: "farhan44@duck.com",
  github: "https://github.com/farhanalireza",
  linkedin: "https://linkedin.com/in/farhanalireza",
  x: "https://x.com/farhanalirezaa",
  calendar: "https://cal.eu/farhanalireza",
  nowUpdatedAt: "August 24, 2026",
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
    creator: "@farhanalirezaa",
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
  "Refining Rhythmé's single-goal command center to unify tasks, habits, and reflections into one calm view.",
  "Developing explainable behavioral correlation models (Pearson & Point-Biserial) to surface momentum patterns without black-box AI.",
  "Hardening client-side zero-knowledge AES-GCM-256 encryption and multi-timezone date aggregation.",
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
    title: "Building Rhythmé",
    role: "Founder & Full-Stack Architect",
    body: "Architecting a Personal Alignment System from scratch with Next.js 16 and Supabase. Implementing client-side zero-knowledge AES-GCM-256 encryption, explainable statistical behavioral correlation models, and sub-50ms optimistic UI workflows.",
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
    note: "For discussing a role, team projects, or giving feedback on Rhythmé.",
  },
  {
    title: "X / Twitter",
    href: siteConfig.x,
    label: "@farhanalirezaa",
    note: "For quick questions, casual chat, or following progress.",
  },
];

export const nowSections = [
  {
    title: "Amplecen & Rhythmé",
    body: "I’m building Amplecen around Rhythmé. I’m narrowing my attention back to the product: refining its core experience, questioning what actually deserves to exist in the MVP, and turning it from an idea I’ve been developing into something people can genuinely use.",
  },
  {
    title: "What I'm learning",
    body: "I’m learning to build beyond the code. I’m spending more time on product thinking, validation, positioning, and understanding why a product should exist before worrying about how much technology I can put into it.",
  },
  {
    title: "What I'm optimizing for",
    body: "Execution over preparation. I’m trying to spend less time endlessly researching, planning, and refining ideas, and more time shipping, testing, learning, and repeating. The goal is simple: build something real and let reality shape the next decision.",
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
