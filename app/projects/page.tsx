import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import PageIntro from "@/components/site/PageIntro";
import Reveal from "@/components/site/Reveal";
import { projectsOverview } from "@/data/projects";

export const metadata = {
  title: "Projects",
  description:
    "Selected software projects by Farhan Ali Reza, including Rhythme and GrooveEstrella, with a focus on problem, solution, stack, and outcomes.",
};

export default function ProjectsPage() {
  const featuredProjects = projectsOverview.filter((project) => project.featured);
  const otherProjects = projectsOverview.filter((project) => !project.featured);

  return (
    <main>
      <PageIntro
        eyebrow="Projects"
        title="Software built to solve real problems."
        description="I build applications from scratch to explore specific challenges: from matching algorithms to client-side state synchronization. Here is my core work."
      />

      <section className="border-t border-border">
        <div className="page-shell section-shell">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Featured</p>
            <h2 className="section-title mt-5">Current focus</h2>
          </Reveal>

          <div className="mt-12 space-y-6">
            {featuredProjects.map((project) => (
              <Reveal key={project.slug}>
                <Link href={`/projects/${project.slug}`} className="group block surface-muted p-8 md:p-10">
                  <div className="flex flex-wrap gap-3">
                    <span className="chip">{project.year}</span>
                    <span className="chip">Founder-led</span>
                    <span className="chip capitalize">
                      {project.status === "in-progress" ? "In progress" : project.status}
                    </span>
                  </div>
                  <div className="mt-6 grid gap-8 lg:grid-cols-[1.5fr_0.9fr]">
                    <div>
                      <div className="flex items-center gap-4">
                        {project.logoImage && (
                          <div className={`relative h-14 w-14 shrink-0 overflow-hidden border border-border bg-card p-1 ${
                            project.slug === "grooveestrella" ? "rounded-full" : "rounded-xl"
                          }`}>
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
                        <h3 className="font-space-grotesk text-4xl font-bold transition-colors group-hover:text-primary">
                          {project.title}
                        </h3>
                      </div>
                      <p className="mt-3 text-lg leading-8 text-muted-foreground">
                        {project.tagline}
                      </p>
                      <p className="mt-6 prose-copy">{project.summary}</p>
                    </div>
                    <div>
                      <p className="eyebrow">Stack</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="chip">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium">
                    View case study
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
            <p className="eyebrow">Past work</p>
            <h2 className="section-title mt-5">Earlier projects that still matter.</h2>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {otherProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.06}>
                <Link href={`/projects/${project.slug}`} className="group block surface p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="chip">{project.year}</span>
                    <span className="chip">{project.role}</span>
                  </div>
                  <div className="flex items-center gap-4 mt-5">
                    {project.logoImage && (
                      <div className={`relative h-12 w-12 shrink-0 overflow-hidden border border-border bg-card p-1 ${
                        project.slug === "grooveestrella" ? "rounded-full" : "rounded-xl"
                      }`}>
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
                    <h3 className="font-space-grotesk text-2xl font-bold transition-colors group-hover:text-primary">
                      {project.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-base leading-7 text-muted-foreground">{project.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="chip">
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
          <Reveal className="surface-muted max-w-4xl p-8 md:p-12">
            <p className="eyebrow">How I evaluate projects</p>
            <h2 className="section-title mt-5">I value depth over volume.</h2>
            <p className="lede mt-5 max-w-3xl">
              I would rather build one application from scratch and run into real database bottlenecks than copy ten tutorials. Every project here was built to solve a concrete problem I faced.
            </p>
            <div className="mt-8">
              <Link href="/connect" className="button-primary">
                Discuss a project
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
