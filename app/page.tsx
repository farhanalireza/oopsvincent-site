import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import { projectsOverview } from "@/data/projects";
import { homeHighlights, skillGroups, workFocus } from "@/data/site";
import SkillsList from "@/components/site/SkillsList";
import type { Metadata } from "next";
import { SkillIcon } from "@/components/site/SkillIcon";

export const metadata: Metadata = {
  title: "Home",
  description:
    "I build software products. Right now, I'm building Rhythme—a daily system for planning, habits, and reflection.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Home | Farhan Ali Reza",
    description:
      "I build software products. Right now, I'm building Rhythme—a daily system for planning, habits, and reflection.",
    url: "/",
  },
};

export default function Home() {
  const featuredProject = projectsOverview.find((project) => project.featured);
  const secondaryProject = projectsOverview.find((project) => !project.featured);

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Farhan Ali Reza",
    url: "https://farhan.amplecen.com",
    description: "I build software products from idea to code.",
    publisher: {
      "@type": "Person",
      name: "Farhan Ali Reza",
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <section className="page-shell section-shell flex min-h-screen items-center pt-28">
        <div className="flex flex-col gap-14">
          <Reveal className="max-w-4xl">
            <p className="eyebrow">Developer & Founder</p>
            <h1 className="display-title mt-6">
              I build software products from idea to code.
            </h1>
            <p className="lede mt-8 max-w-3xl">
              I am a full-stack developer and entrepreneur. Right now, I am building Rhythme—a daily planning and habits tool designed to work without streaks or noisy notifications.
            </p>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
            <Reveal>
              <div className="flex flex-wrap gap-3">
                <Link href="/projects" className="button-primary">
                  View projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/about" className="button-secondary">
                  About me
                </Link>
                <Link href="/connect" className="button-secondary">
                  Contact
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="surface-muted p-7 md:p-8">
                <p className="eyebrow">Current focus</p>
                <h2 className="mt-4 font-space-grotesk text-2xl font-bold">Building Rhythme</h2>
                <p className="mt-4 prose-copy">
                  I am building Rhythme because I wanted a daily planner that does not treat my time like a game. I am focusing on making the daily check-in feel fast and simple.
                </p>
                <ul className="mt-6 space-y-3">
                  {workFocus.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="page-shell section-shell">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Approach</p>
            <h2 className="section-title mt-5">Writing code is only part of the work.</h2>
            <p className="lede mt-5">
              I prefer solving problems on paper before writing a line of code. Good software comes from understanding user flows and database tables first, not from typing fast.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {homeHighlights.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="surface p-7">
                  <h3 className="font-space-grotesk text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="page-shell section-shell">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <Reveal className="max-w-3xl">
              <p className="eyebrow">Projects</p>
              <h2 className="section-title mt-5">Real projects, not tutorials.</h2>
              <p className="lede mt-5">
                I focus on projects where I designed the database and wrote the code myself. Each project represents a concrete challenge I wanted to solve.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <Link href="/projects" className="button-ghost">
                See all projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {[featuredProject, secondaryProject].filter(Boolean).map((project, index) => (
              <Reveal key={project!.slug} delay={index * 0.08}>
                <Link href={`/projects/${project!.slug}`} className="group block surface-muted p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="chip">{project!.year}</span>
                    <span className="chip capitalize">
                      {project!.status === "in-progress" ? "In progress" : project!.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mt-5">
                    {project!.logoImage && (
                      <div className={`relative h-12 w-12 shrink-0 overflow-hidden border border-border bg-card p-1 ${
                        project!.slug === "grooveestrella" ? "rounded-full" : "rounded-xl"
                      }`}>
                        <Image 
                          src={project!.logoImage} 
                          alt={`${project!.title} logo`} 
                          width={48}
                          height={48}
                          className={`h-full w-full object-contain ${
                            project!.slug === "grooveestrella" ? "rounded-full" : "rounded-lg"
                          }`}
                        />
                      </div>
                    )}
                    <h3 className="font-space-grotesk text-3xl font-bold transition-colors group-hover:text-primary">
                      {project!.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-base leading-7 text-muted-foreground">
                    {project!.summary}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project!.techStack.slice(0, 4).map((tech) => (
                      <span key={tech} className="chip gap-2">
                        <SkillIcon name={tech} className="h-4 w-4 shrink-0" />
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium">
                    Read case study
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="page-shell section-shell">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Tools</p>
            <h2 className="section-title mt-5">Technologies I use to build.</h2>
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

      <section className="border-t border-border">
        <div className="page-shell section-shell">
          <Reveal className="surface-muted max-w-4xl p-8 md:p-12">
            <p className="eyebrow">Contact</p>
            <h2 className="section-title mt-5">Let&apos;s talk about building products.</h2>
            <p className="lede mt-5 max-w-2xl">
              I am always glad to talk with other developers, founders, or recruitment teams who value clear communication and straightforward code.
            </p>
            <div className="mt-8">
              <Link href="/connect" className="button-primary">
                Reach out
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
