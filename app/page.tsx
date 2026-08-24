import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Sparkles, Terminal, Layers } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import { projectsOverview } from "@/data/projects";
import { siteConfig, homeHighlights, skillGroups, workFocus } from "@/data/site";
import SkillsList from "@/components/site/SkillsList";
import type { Metadata } from "next";
import { SkillIcon } from "@/components/site/SkillIcon";

export const metadata: Metadata = {
  title: {
    absolute: siteConfig.title,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "/",
  },
};

export default function Home() {
  const featuredProject = projectsOverview.find((project) => project.featured);
  const secondaryProject = projectsOverview.find((project) => !project.featured);

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    description: siteConfig.description,
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      {/* ================= HERO SECTION ================= */}
      <section className="page-shell pt-24 sm:pt-28 md:pt-36 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-4xl">
          {/* Status Badge */}
          <Reveal>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/80 px-3.5 py-1.5 backdrop-blur-sm shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-xs font-medium tracking-wide text-foreground/90">
                Available for select client projects &amp; building Rhythmé
              </span>
            </div>
          </Reveal>

          {/* Main Headline */}
          <Reveal delay={0.05}>
            <h1 className="display-title mt-5 sm:mt-7 font-newsreader font-semibold">
              Crafting disciplined software, thoughtful interfaces &amp; scalable products.
            </h1>
          </Reveal>

          {/* Bio / Value Prop */}
          <Reveal delay={0.1}>
            <p className="lede mt-5 sm:mt-7 max-w-2xl text-muted-foreground text-base sm:text-lg md:text-xl font-normal leading-relaxed">
              I&apos;m <span className="text-foreground font-medium">{siteConfig.name}</span>, a full-stack engineer and founder. I specialize in turning complex product challenges into fast, resilient web applications with clean databases and intuitive design.
            </p>
          </Reveal>

          {/* Actions & Social Links */}
          <Reveal delay={0.15}>
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link href="/projects" className="button-primary">
                Explore Work
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/connect" className="button-secondary">
                Get in Touch
              </Link>
              <Link href="/about" className="button-ghost px-2">
                About Me
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* ================= CURRENT SPOTLIGHT BANNER ================= */}
        <Reveal delay={0.2} className="mt-12 sm:mt-16">
          <div className="surface-muted overflow-hidden p-6 sm:p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              {/* Left Column: Spotlight details */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="eyebrow flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-accent" />
                    Current Spotlight
                  </span>
                  <span className="chip text-[11px] font-medium">Founder &amp; Full-Stack Architect</span>
                </div>

                <h2 className="font-newsreader text-2xl sm:text-3xl md:text-4xl font-semibold">
                  Rhythmé — The Personal Alignment System.
                </h2>

                <p className="prose-copy text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Harmonizing execution (tasks, flexible habits, deep work) with emotional awareness (zero-knowledge encrypted journaling, mood sparklines) and explainable behavioral mathematics into one calm, private workspace.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link href="/projects/rhythme" className="button-primary text-xs sm:text-sm py-2 sm:py-2.5">
                    Read Rhythmé Case Study
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link href="/now" className="button-secondary text-xs sm:text-sm py-2 sm:py-2.5">
                    View Weekly Log (/now)
                  </Link>
                </div>
              </div>

              {/* Right Column: Focus bullets */}
              <div className="lg:col-span-5 rounded-2xl border border-border/80 bg-card/70 p-5 sm:p-6 backdrop-blur-xs">
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  Active Engineering Focus
                </p>
                <ul className="mt-4 space-y-3">
                  {workFocus.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-xs sm:text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ================= SELECTED PROJECTS ================= */}
      <section className="border-t border-border">
        <div className="page-shell section-shell">
          <div className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-end lg:justify-between">
            <Reveal className="max-w-2xl">
              <p className="eyebrow">Selected Work</p>
              <h2 className="section-title mt-3 sm:mt-4">Real products built from scratch.</h2>
              <p className="lede mt-3 sm:mt-4">
                I focus on projects where I architected the database, designed the interface, and implemented the full production stack.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <Link href="/projects" className="button-ghost">
                View all case studies
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-10 sm:mt-12 grid gap-6 lg:grid-cols-2">
            {[featuredProject, secondaryProject].filter(Boolean).map((project, index) => (
              <Reveal key={project!.slug} delay={index * 0.08}>
                <Link
                  href={`/projects/${project!.slug}`}
                  className="group flex h-full flex-col justify-between surface p-6 sm:p-8 md:p-10 transition-all hover:border-accent/40"
                >
                  <div>
                    {/* Top Row: Meta Tags */}
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="chip">{project!.year}</span>
                        {project!.status === "unavailable" ? (
                          <span className="chip text-accent border-accent/40 font-medium">
                            Unavailable
                          </span>
                        ) : (
                          <span className="chip capitalize">
                            {project!.status === "in-progress" ? "In progress" : project!.status}
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {project!.role}
                      </span>
                    </div>

                    {/* Title & Logo */}
                    <div className="flex items-center gap-4 mt-6">
                      {project!.logoImage && (
                        <div
                          className={`relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 overflow-hidden border border-border bg-card p-1.5 shadow-2xs ${
                            project!.slug === "grooveestrella" ? "rounded-full" : "rounded-xl"
                          }`}
                        >
                          <Image
                            src={project!.logoImage}
                            alt={`${project!.title} logo`}
                            width={56}
                            height={56}
                            className={`h-full w-full object-contain ${
                              project!.slug === "grooveestrella" ? "rounded-full" : "rounded-lg"
                            }`}
                          />
                        </div>
                      )}
                      <div>
                        <h3 className="font-newsreader text-2xl sm:text-3xl font-semibold transition-colors group-hover:text-accent">
                          {project!.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                          {project!.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed text-muted-foreground">
                      {project!.summary}
                    </p>

                    {project!.statusNotice && (
                      <p className="mt-3 text-xs text-accent font-medium leading-relaxed">
                        Note: {project!.statusNotice}
                      </p>
                    )}

                    {/* Tech Stack */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project!.techStack.slice(0, 4).map((tech) => (
                        <span key={tech} className="chip gap-1.5">
                          <SkillIcon name={tech} className="h-3.5 w-3.5 shrink-0" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div className="mt-8 pt-6 border-t border-border/60 flex items-center justify-between text-sm font-medium text-foreground">
                    <span>Explore Case Study</span>
                    <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1.5" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ENGINEERING PHILOSOPHY ================= */}
      <section className="border-t border-border">
        <div className="page-shell section-shell">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Engineering Philosophy</p>
            <h2 className="section-title mt-3 sm:mt-4">Writing code is only part of the work.</h2>
            <p className="lede mt-3 sm:mt-4">
              I prefer solving problems on paper before writing a line of code. Good software comes from understanding user flows and database tables first, not from typing fast.
            </p>
          </Reveal>

          <div className="mt-10 sm:mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {homeHighlights.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="surface p-6 sm:p-8 h-full flex flex-col justify-between">
                  <div>
                    <span className="font-newsreader text-2xl font-bold text-accent">
                      0{index + 1}
                    </span>
                    <h3 className="font-newsreader text-xl sm:text-2xl font-semibold mt-3">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TOOLS & STACK ================= */}
      <section className="border-t border-border">
        <div className="page-shell section-shell">
          <div className="flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-end lg:justify-between">
            <Reveal className="max-w-2xl">
              <p className="eyebrow">Toolkit &amp; Architecture</p>
              <h2 className="section-title mt-3 sm:mt-4">Technologies I use to ship products.</h2>
              <p className="lede mt-3 sm:mt-4">
                Proven tools chosen for reliability, developer ergonomics, and long-term maintainability.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <Link href="/about" className="button-ghost">
                More about my background
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-10 sm:mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
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

      {/* ================= CTA BANNER ================= */}
      <section className="border-t border-border">
        <div className="page-shell section-shell">
          <Reveal className="surface-muted max-w-4xl p-7 sm:p-10 md:p-12">
            <p className="eyebrow">Collaboration &amp; Hiring</p>
            <h2 className="section-title mt-3 sm:mt-4">Let&apos;s build something durable together.</h2>
            <p className="lede mt-4 max-w-2xl">
              Whether you need a senior full-stack engineer for a new product build, architectural consultation, or are exploring recruitment opportunities, I&apos;d love to connect.
            </p>
            <div className="mt-7 sm:mt-9 flex flex-wrap items-center gap-3.5">
              <Link href="/connect" className="button-primary">
                Start a Conversation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={siteConfig.calendar} target="_blank" rel="noopener noreferrer" className="button-secondary">
                Book a 15-min Call
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
