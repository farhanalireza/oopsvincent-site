import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import PageIntro from "@/components/site/PageIntro";
import Reveal from "@/components/site/Reveal";
import { projectsOverview } from "@/data/projects";

import type { Metadata } from "next";
import { SkillIcon } from "@/components/site/SkillIcon";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    `Selected software projects by ${siteConfig.name}, including Rhythme and GrooveEstrella, with a focus on problem, solution, stack, and outcomes.`,
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: `Projects | ${siteConfig.name}`,
    description:
      `Selected software projects by ${siteConfig.name}, including Rhythme and GrooveEstrella, with a focus on problem, solution, stack, and outcomes.`,
    url: "/projects",
  },
};

export default function ProjectsPage() {
  const featuredProjects = projectsOverview.filter((project) => project.featured);
  const otherProjects = projectsOverview.filter((project) => !project.featured);

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `Projects | ${siteConfig.name}`,
    "description": `Selected software projects by ${siteConfig.name}, including Rhythme and GrooveEstrella, with a focus on problem, solution, stack, and outcomes.`,
    "url": `${siteConfig.siteUrl}/projects`,
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
          "name": "Projects",
          "item": `${siteConfig.siteUrl}/projects`
        }
      ]
    },
    "author": {
      "@type": "Person",
      "name": siteConfig.name,
      "url": siteConfig.siteUrl
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <PageIntro
        eyebrow="Projects"
        title="Software built to solve real problems."
        description="I build applications from scratch to explore specific challenges: from matching algorithms to client-side state synchronization. Here is my core work."
      />

      {/* ================= FEATURED PROJECT ================= */}
      <section className="border-t border-border">
        <div className="page-shell section-shell">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Featured Project</p>
            <h2 className="section-title mt-3 sm:mt-4">Current flagship build</h2>
          </Reveal>

          <div className="mt-10 sm:mt-12 space-y-6">
            {featuredProjects.map((project) => (
              <Reveal key={project.slug}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block surface-muted p-6 sm:p-8 md:p-12 transition-all hover:border-accent/40"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="chip">{project.year}</span>
                      <span className="chip font-medium text-accent">Founder &amp; Lead</span>
                      <span className="chip capitalize">
                        {project.status === "in-progress" ? "In progress" : project.status}
                      </span>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Flagship Case Study
                    </span>
                  </div>

                  <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-center">
                    <div className="lg:col-span-7 space-y-4">
                      <div className="flex items-center gap-4">
                        {project.logoImage && (
                          <div
                            className={`relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 overflow-hidden border border-border bg-card p-1.5 shadow-2xs ${
                              project.slug === "grooveestrella" ? "rounded-full" : "rounded-xl"
                            }`}
                          >
                            <Image
                              src={project.logoImage}
                              alt={`${project.title} logo`}
                              width={56}
                              height={56}
                              className={`h-full w-full object-contain ${
                                project.slug === "grooveestrella" ? "rounded-full" : "rounded-lg"
                              }`}
                            />
                          </div>
                        )}
                        <div>
                          <h3 className="font-newsreader text-3xl sm:text-4xl font-semibold transition-colors group-hover:text-accent">
                            {project.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-0.5">
                            {project.tagline}
                          </p>
                        </div>
                      </div>

                      <p className="prose-copy text-sm sm:text-base leading-relaxed text-muted-foreground">
                        {project.summary}
                      </p>

                      <div className="pt-2 flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="chip gap-1.5">
                            <SkillIcon name={tech} className="h-3.5 w-3.5 shrink-0" />
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-5 rounded-2xl border border-border/80 bg-card/70 p-6 backdrop-blur-xs space-y-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                        Architecture Highlights
                      </p>
                      <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                        <li className="flex items-start gap-2.5">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span>Single-goal command center uniting tasks, flexible habits, and reflections</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span>Zero-knowledge client-side encryption (AES-GCM-256) via Web Crypto API</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span>Explainable behavioral intelligence (Pearson &amp; Point-Biserial correlation)</span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span>Sub-50ms optimistic UI with TanStack Query, Zustand &amp; Supabase RLS</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border/60 flex items-center justify-between text-sm font-medium text-foreground">
                    <span>Read Full Case Study</span>
                    <ArrowRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-1.5" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PAST WORK ================= */}
      <section className="border-t border-border">
        <div className="page-shell section-shell">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Past Work</p>
            <h2 className="section-title mt-3 sm:mt-4">Earlier projects that still matter.</h2>
            <p className="lede mt-3 sm:mt-4">
              Products built to explore concrete engineering challenges like realtime collaboration and complex search algorithms.
            </p>
          </Reveal>

          <div className="mt-10 sm:mt-12 grid gap-6 lg:grid-cols-2">
            {otherProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.06}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group flex h-full flex-col justify-between surface p-6 sm:p-8 md:p-10 transition-all hover:border-accent/40"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="chip">{project.year}</span>
                        <span className="chip">{project.role}</span>
                        {project.status === "unavailable" ? (
                          <span className="chip text-accent border-accent/40 font-medium">
                            Unavailable
                          </span>
                        ) : (
                          <span className="chip capitalize">
                            {project.status === "in-progress" ? "In progress" : project.status}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mt-6">
                      {project.logoImage && (
                        <div
                          className={`relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 overflow-hidden border border-border bg-card p-1.5 shadow-2xs ${
                            project.slug === "grooveestrella" ? "rounded-full" : "rounded-xl"
                          }`}
                        >
                          <Image
                            src={project.logoImage}
                            alt={`${project.title} logo`}
                            width={56}
                            height={56}
                            className={`h-full w-full object-contain ${
                              project.slug === "grooveestrella" ? "rounded-full" : "rounded-lg"
                            }`}
                          />
                        </div>
                      )}
                      <div>
                        <h3 className="font-newsreader text-2xl sm:text-3xl font-semibold transition-colors group-hover:text-accent">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                          {project.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                      {project.summary}
                    </p>

                    {project.statusNotice && (
                      <p className="mt-3 text-xs text-accent font-medium leading-relaxed">
                        Note: {project.statusNotice}
                      </p>
                    )}

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="chip gap-1.5">
                          <SkillIcon name={tech} className="h-3.5 w-3.5 shrink-0" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

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

      {/* ================= EVALUATION BANNER ================= */}
      <section className="border-t border-border">
        <div className="page-shell section-shell">
          <Reveal className="surface-muted max-w-4xl p-7 sm:p-10 md:p-12">
            <p className="eyebrow">How I evaluate projects</p>
            <h2 className="section-title mt-3 sm:mt-4">I value depth over volume.</h2>
            <p className="lede mt-4 max-w-3xl">
              I would rather build one application from scratch and run into real database bottlenecks than copy ten tutorials. Every project here was built to solve a concrete problem I faced.
            </p>
            <div className="mt-7 sm:mt-9 flex flex-wrap items-center gap-3.5">
              <Link href="/connect" className="button-primary">
                Discuss a project
                <ExternalLink className="h-4 w-4" />
              </Link>
              <Link href="/about" className="button-secondary">
                Learn About My Process
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
