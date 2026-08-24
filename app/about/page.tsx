import Reveal from "@/components/site/Reveal";
import PageIntro from "@/components/site/PageIntro";
import { siteConfig, aboutPrinciples, experienceTimeline, skillGroups } from "@/data/site";
import type { Metadata } from "next";
import SkillsList from "@/components/site/SkillsList";
import { Compass, Lightbulb, Hammer, Target, Terminal, Layers, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "I study computer science and build software products. What I enjoy most is the process of taking a problem, thinking through how it should work, and turning the idea into functional software.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `About | ${siteConfig.name}`,
    description:
      "I study computer science and build software products. What I enjoy most is the process of taking a problem, thinking through how it should work, and turning the idea into functional software.",
    url: "/about",
  },
};

export default function AboutPage() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": `About | ${siteConfig.name}`,
    "description": "I study computer science and build software products. What I enjoy most is the process of taking a problem, thinking through how it should work, and turning the idea into functional software.",
    "url": `${siteConfig.siteUrl}/about`,
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": siteConfig.siteUrl
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About",
          "item": `${siteConfig.siteUrl}/about`
        }
      ]
    },
    "author": {
      "@type": "Person",
      "name": siteConfig.name,
      "url": siteConfig.siteUrl
    }
  };

  const narrativeCards = [
    {
      icon: Compass,
      eyebrow: "Motivation",
      title: "Why I build",
      body: "I enjoy the process of turning an idea into something real. There is a specific satisfaction in sketching a layout on a piece of paper, writing the code, and seeing it function. I don't build software to show off complex code; I build it because I like making daily life a little more orderly.",
    },
    {
      icon: Lightbulb,
      eyebrow: "Methodology",
      title: "How I think",
      body: "I prefer to understand the problem fully before opening a text editor. A confusing user flow cannot be fixed by writing cleaner code. I would rather spend two days figuring out the simplest layout on paper than write code I will have to delete later.",
    },
    {
      icon: Hammer,
      eyebrow: "Current Work",
      title: "What I'm building now",
      body: "Right now, I am building Rhythmé—a Personal Alignment System that unifies execution (tasks, habits, deep work) with emotional awareness (zero-knowledge encrypted reflections) and explainable behavioral mathematics. I started it because I got tired of fragmented productivity apps that use constant notifications and punitive streaks to capture attention. A good system should act as a thoughtful mirror, helping you build momentum without overwhelm.",
    },
    {
      icon: Target,
      eyebrow: "Vision",
      title: "Where I'm heading",
      body: "I am a Computer Science Diploma Graduate focused on becoming a disciplined product developer. My goal is to build software that lasts, which means choosing readability and solid fundamentals over temporary trends. I want to spend my career building simple, reliable tools that people use every day.",
    },
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <PageIntro
        eyebrow="About"
        title={`About ${siteConfig.name}`}
        description="I study computer science and build software products. What I enjoy most is the process of taking a problem, thinking through how it should work, and turning the idea into functional software."
      />

      {/* ================= NARRATIVE CARDS ================= */}
      <section className="border-t border-border">
        <div className="page-shell section-shell grid gap-6 md:grid-cols-2">
          {narrativeCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={index * 0.07}>
                <div className="surface p-6 sm:p-8 md:p-10 h-full flex flex-col justify-between transition-all hover:border-accent/40">
                  <div>
                    <div className="flex items-center justify-between">
                      <p className="eyebrow">{card.eyebrow}</p>
                      <Icon className="h-4 w-4 text-accent" />
                    </div>
                    <h2 className="font-newsreader text-2xl sm:text-3xl font-semibold mt-3">
                      {card.title}
                    </h2>
                    <p className="mt-4 prose-copy text-sm sm:text-base leading-relaxed">
                      {card.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ================= PRINCIPLES ================= */}
      <section className="border-t border-border">
        <div className="page-shell section-shell">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Building Philosophy</p>
            <h2 className="section-title mt-3 sm:mt-4">Principles I value.</h2>
            <p className="lede mt-3 sm:mt-4">
              Core beliefs that guide how I design databases, write clean functions, and make product decisions.
            </p>
          </Reveal>
          <div className="mt-10 sm:mt-12 grid gap-6 md:grid-cols-2">
            {aboutPrinciples.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 0.06}>
                <article className="surface p-6 sm:p-8 h-full flex flex-col justify-between transition-all hover:border-accent/40">
                  <div>
                    <span className="font-newsreader text-2xl font-bold text-accent">
                      0{index + 1}
                    </span>
                    <h3 className="font-newsreader text-xl sm:text-2xl font-semibold mt-3">
                      {principle.title}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                      {principle.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE TIMELINE ================= */}
      <section className="border-t border-border">
        <div className="page-shell section-shell">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Experience</p>
            <h2 className="section-title mt-3 sm:mt-4">My work and milestones so far.</h2>
          </Reveal>

          <div className="mt-10 sm:mt-12 space-y-6">
            {experienceTimeline.map((item, index) => (
              <Reveal key={item.year} delay={index * 0.06}>
                <article className="surface p-6 sm:p-8 grid gap-4 md:grid-cols-[180px_1fr] md:items-start transition-all hover:border-accent/40">
                  <div className="space-y-1">
                    <span className="chip text-accent font-semibold">{item.year}</span>
                    <p className="text-xs sm:text-sm font-medium text-muted-foreground pt-1">{item.role}</p>
                  </div>
                  <div>
                    <h3 className="font-newsreader text-xl sm:text-2xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 prose-copy text-sm sm:text-base leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="border-t border-border">
        <div className="page-shell section-shell">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Skills</p>
            <h2 className="section-title mt-3 sm:mt-4">Grouped by how I actually use them.</h2>
          </Reveal>
          <div className="mt-10 sm:mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {skillGroups.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.06}>
                <div className="surface p-6 sm:p-8 h-full">
                  <div className="flex items-center gap-2.5">
                    {index === 0 && <Terminal className="h-4 w-4 text-accent" />}
                    {index === 1 && <Layers className="h-4 w-4 text-accent" />}
                    {index === 2 && <Sparkles className="h-4 w-4 text-accent" />}
                    <h3 className="font-newsreader text-xl sm:text-2xl font-semibold">
                      {group.title}
                    </h3>
                  </div>
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
