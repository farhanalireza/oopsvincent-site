export type ProjectSection = {
  heading: string;
  body: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  status: "in-progress" | "shipped" | "archived" | "unavailable";
  statusNotice?: string;
  summary: string;
  role: string;
  techStack: string[];
  links?: { label: string; href: string }[];
  sections: ProjectSection[];
  takeaways: string[];
  logoImage?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "rhythme",
    title: "Rhythmé",
    tagline: "A Personal Alignment System unifying execution, emotional awareness, and behavioral intelligence in one calm workspace.",
    year: "2025-Present",
    status: "in-progress",
    summary:
      "Built to bridge discipline and mindfulness. Rhythmé harmonizes execution tools (tasks, habits, deep work focus) with emotional awareness (zero-knowledge encrypted journaling, mood logging, weekly reflections) and explainable behavioral mathematics.",
    role: "Founder & Full-Stack Architect",
    techStack: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Supabase",
      "PostgreSQL",
      "Framer Motion",
      "Zustand",
      "TanStack Query",
      "Web Crypto API",
    ],
    links: [
      { label: "Live preview", href: "https://rhythme-gamma.vercel.app/" },
      {
        label: "Documentation",
        href: "https://github.com/farhanalireza/rhythme/tree/master/docs",
      },
    ],
    sections: [
      {
        heading: "The Problem & Market Context",
        body: "Modern knowledge workers operate across 4 to 6 disconnected tools: task managers with infinite anxiety-inducing backlogs, habit trackers with punitive streaks, and siloed journals. Most tools function as cold activity ledgers—recording what was done or missed without acknowledging how the user feels, why patterns break down, or what single action matters next.",
      },
      {
        heading: "System Architecture & Zero-Knowledge Privacy",
        body: "Built with Next.js 16 (App Router), React 19, and Supabase PostgreSQL with strict Row-Level Security (RLS). Journal entries are protected by client-side AES-GCM-256 encryption with local PBKDF2 key derivation (100,000 iterations) via the Web Crypto API—ensuring sensitive reflections never touch servers or databases in cleartext.",
      },
      {
        heading: "Unified Execution & Deep Work Engine",
        body: "Features a Single Primary Goal Command Center that eliminates opening paralysis. Habits use a generalized frequency model with 90-day heatmaps and rule-based risk detection. Deep work focus sessions integrate ambient timers with contextual task associations and sub-50ms optimistic UI updates backed by TanStack Query and Zustand.",
      },
      {
        heading: "Explainable Behavioral Mathematics",
        body: "Rather than pushing black-box LLM directives, Rhythmé employs deterministic statistical correlation engines (Pearson correlation for continuous variables and Point-Biserial correlation for dichotomous events) across 14-day rolling windows to surface explainable, actionable momentum patterns without privacy degradation.",
      },
      {
        heading: "Engineering Challenges & Edge Performance",
        body: "Overcame multi-timezone aggregation shifts with an isolated UTC-to-local normalization pipeline. Minimized dashboard TTFB to sub-350ms by moving strict route protection to Next.js Edge Middleware and implemented in-memory session key caching for 60 FPS streaming zero-knowledge decryption.",
      },
    ],
    takeaways: [
      "Execution tools must harmonize with emotional awareness to sustain long-term consistency without burnout.",
      "Client-side zero-knowledge encryption (AES-GCM-256) protects user vulnerability while maintaining instant UI performance.",
      "Deterministic statistical correlation (Pearson & Point-Biserial) delivers explainable, trustworthy insights over opaque AI guesses.",
      "A Single Primary Goal workspace eliminates decision fatigue and opening paralysis for ambitious builders.",
    ],
    logoImage: "/R.png",
    featured: true,
  },
  {
    slug: "grooveestrella",
    title: "GrooveEstrella",
    tagline: "A music matching app built in a team of five using a deterministic scoring matrix.",
    year: "2024",
    status: "unavailable",
    statusNotice: "Spotify now requires a Spotify Premium account for third-party Web Playback & API access to function. You can still visit and test the live application.",
    summary:
      "Instead of plugging in Spotify or Last.fm recommendation APIs, we wanted to build a music recommendation engine ourselves. We designed our own matching logic using survey responses and weighted preferences.",
    role: "Technical Lead",
    techStack: ["React", "TypeScript", "Node.js", "Vite"],
    links: [{ label: "Visit live application", href: "https://grooveestrella.vercel.app/" }],
    sections: [
      {
        heading: "Why we built it",
        body: "We wanted to see if we could build a music matcher without relying on black-box recommendation APIs. We set out to write our own scoring logic that matches user surveys against a local track database.",
      },
      {
        heading: "The Challenge",
        body: "Qualitative preferences like mood or tempo are hard to map. We designed a simple scoring matrix. When a user selects a mood, our script weights matching genre tags and filters out tracks below a specific score threshold.",
      },
      {
        heading: "My Role",
        body: "I coordinated the development workflow for our team of five and wrote the React frontend. I also helped write the scoring parser. This was my first experience managing git branches and pull requests across a team.",
      },
      {
        heading: "What I Learned",
        body: "We wasted three days at the start because our database parser expected one date format while the frontend sent another. This taught me that before writing any code, team developers must agree on data structures first.",
      },
    ],
    takeaways: [
      "Agree on API data formats before writing frontend or backend code.",
      "Simple matching logic is much easier to test and debug than complex heuristics.",
      "A clear coordination strategy keeps team projects moving forward.",
    ],
    logoImage: "/G.png",
  },
];

export const projectsOverview = projects;

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
