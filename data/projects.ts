export type ProjectSection = {
  heading: string;
  body: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  status: "in-progress" | "shipped" | "archived";
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
    title: "Rhythme",
    tagline: "A daily planner built to combine tasks, habits, and reflection on a single quiet page.",
    year: "2025-Present",
    status: "in-progress",
    summary:
      "I got tired of productivity apps that treat planning like a game with streaks and badges. I wanted a quiet page to organize my day and write down what I got done.",
    role: "Founder & Developer",
    techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Framer Motion"],
    links: [
      { label: "Live preview", href: "https://rhythme-gamma.vercel.app/" },
      {
        label: "Documentation",
        href: "https://github.com/farhanalireza/rhythme/tree/master/docs",
      },
    ],
    sections: [
      {
        heading: "The Problem",
        body: "Most productivity apps are designed to keep you inside the app. They use push notifications, streaks, and badges to capture attention. A good planner should do the opposite: it should help you get out of the app and back to your life.",
      },
      {
        heading: "The Database",
        body: "I chose PostgreSQL through Supabase. Instead of complex schema designs, I kept tables flat. A single log table links habit completions and tasks to a specific calendar date, which makes reading a user's day straightforward.",
      },
      {
        heading: "The Frontend",
        body: "I built the frontend with Next.js. Habit tracking requires instant feedback. If checking a habit takes two seconds because of database latency, it feels broken. I update the checkbox immediately on the screen and sync the state to the database in the background.",
      },
      {
        heading: "What I Learned",
        body: "Building alone forces you to prioritize. I realized that a database with perfect theoretical schema normalization is useless if it makes the frontend queries slow and hard to read. I learned to choose simplicity over perfect database theory.",
      },
    ],
    takeaways: [
      "A daily tracker is only useful if checking an item feels immediate.",
      "Flat table structures are easier to query, debug, and change.",
      "Deleting half-finished features is often better than trying to make them work.",
    ],
    logoImage: "/R.png",
    featured: true,
  },
  {
    slug: "grooveestrella",
    title: "GrooveEstrella",
    tagline: "A music matching app built in a team of five using a deterministic scoring matrix.",
    year: "2024",
    status: "shipped",
    summary:
      "Instead of plugging in Spotify or Last.fm recommendation APIs, we wanted to build a music recommendation engine ourselves. We designed our own matching logic using survey responses and weighted preferences.",
    role: "Technical Lead",
    techStack: ["React", "TypeScript", "Node.js", "Vite"],
    links: [{ label: "Live project", href: "https://grooveestrella.vercel.app/" }],
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
