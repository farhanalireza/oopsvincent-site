import Reveal from "@/components/site/Reveal";
import PageIntro from "@/components/site/PageIntro";
import { aboutPrinciples, experienceTimeline, skillGroups } from "@/data/site";
import type { Metadata } from "next";
import SkillsList from "@/components/site/SkillsList";

export const metadata: Metadata = {
  title: "About",
  description:
    "I write code, design database tables, and think about user flows. The part I enjoy most isn't writing code—it's turning an idea into something people can actually use.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Farhan Ali Reza",
    description:
      "I write code, design database tables, and think about user flows. The part I enjoy most isn't writing code—it's turning an idea into something people can actually use.",
    url: "/about",
  },
};

export default function AboutPage() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "About | Farhan Ali Reza",
    "description": "I write code, design database tables, and think about user flows. The part I enjoy most isn't writing code—it's turning an idea into something people can actually use.",
    "url": "https://farhan.amplecen.com/about",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://farhan.amplecen.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About",
          "item": "https://farhan.amplecen.com/about"
        }
      ]
    },
    "author": {
      "@type": "Person",
      "name": "Farhan Ali Reza",
      "url": "https://farhan.amplecen.com"
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <PageIntro
        eyebrow="About"
        title="I build software products from idea to code."
        description="I study computer science, write code, and design database tables. What I enjoy most is the step-by-step process of starting with a problem, drafting a layout, and making it functional."
      />

      <section className="border-t border-border">
        <div className="page-shell section-shell grid gap-6 md:grid-cols-2">
          <Reveal className="surface p-8 md:p-10">
            <p className="eyebrow">Why I build</p>
            <p className="mt-5 prose-copy text-sm md:text-base">
              I enjoy the process of turning an idea into something real. There is a specific satisfaction in sketching a layout on a piece of paper, writing the code, and seeing it function. I don&apos;t build software to show off complex code; I build it because I like making daily life a little more orderly.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="surface p-8 md:p-10">
            <p className="eyebrow">How I think</p>
            <p className="mt-5 prose-copy text-sm md:text-base">
              I prefer to understand the problem fully before opening a text editor. A confusing user flow cannot be fixed by writing cleaner code. I would rather spend two days figuring out the simplest layout on paper than write code I will have to delete later.
            </p>
          </Reveal>
          <Reveal delay={0.16} className="surface p-8 md:p-10">
            <p className="eyebrow">What I&apos;m building now</p>
            <p className="mt-5 prose-copy text-sm md:text-base">
              Right now, I am building Rhythme—a daily planner that combines tasks, habits, and reflections on a single screen. I started it because I got tired of productivity apps that use constant notifications and streaks to capture attention. A planner should help you organize your day and get back to your life, not keep you staring at a screen.
            </p>
          </Reveal>
          <Reveal delay={0.24} className="surface p-8 md:p-10">
            <p className="eyebrow">Where I&apos;m heading</p>
            <p className="mt-5 prose-copy text-sm md:text-base">
              I am a Computer Science graduate focused on becoming a disciplined product developer. My goal is to build software that lasts, which means choosing readability and solid fundamentals over temporary trends. I want to spend my career building simple, reliable tools that people use every day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="page-shell section-shell">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Building Philosophy</p>
            <h2 className="section-title mt-5">Principles I value.</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {aboutPrinciples.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 0.06}>
                <article className="surface p-7">
                  <h3 className="font-space-grotesk text-xl font-semibold">{principle.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{principle.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="page-shell section-shell">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Experience</p>
            <h2 className="section-title mt-5">My work so far.</h2>
          </Reveal>

          <div className="mt-12 space-y-8">
            {experienceTimeline.map((item, index) => (
              <Reveal key={item.year} delay={index * 0.06}>
                <article className="grid gap-5 border-l border-border pl-6 md:grid-cols-[160px_1fr] md:pl-0">
                  <div className="md:pr-6">
                    <p className="font-space-grotesk text-3xl font-bold">{item.year}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{item.role}</p>
                  </div>
                  <div className="relative pb-2 md:border-l md:border-border md:pl-8">
                    <span className="absolute -left-[6px] top-2 hidden h-3 w-3 rounded-full bg-primary md:block" />
                    <h3 className="font-space-grotesk text-2xl font-semibold">{item.title}</h3>
                    <p className="mt-3 prose-copy">{item.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="page-shell section-shell">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Skills</p>
            <h2 className="section-title mt-5">Grouped by how I actually use them.</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {skillGroups.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.06}>
                <div className="surface p-7">
                  <h3 className="font-space-grotesk text-xl font-semibold">{group.title}</h3>
                  <SkillsList items={group.items} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
