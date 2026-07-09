import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project",
    };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <div className="page-shell border-b border-border pt-28 pb-5">
        <Link href="/projects" className="button-ghost">
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>
      </div>

      <section className="page-shell section-shell">
        <Reveal className="max-w-4xl">
          <div className="flex flex-wrap gap-3">
            <span className="chip">{project.year}</span>
            <span className="chip">{project.role}</span>
            <span className="chip capitalize">
              {project.status === "in-progress" ? "In progress" : project.status}
            </span>
          </div>
          <div className="flex items-center gap-5 mt-6">
            {project.logoImage && (
              <div className={`relative h-16 w-16 shrink-0 overflow-hidden border border-border bg-card p-1.5 ${
                project.slug === "grooveestrella" ? "rounded-full" : "rounded-2xl"
              }`}>
                <Image 
                  src={project.logoImage} 
                  alt={`${project.title} logo`} 
                  width={64}
                  height={64}
                  className={`h-full w-full object-contain ${
                    project.slug === "grooveestrella" ? "rounded-full" : "rounded-xl"
                  }`}
                />
              </div>
            )}
            <h1 className="page-title mt-0">{project.title}</h1>
          </div>
          <p className="lede mt-6 max-w-3xl">{project.tagline}</p>
          <p className="prose-copy mt-8 max-w-3xl">{project.summary}</p>
          {project.links && project.links.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary"
                >
                  {link.label}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              ))}
            </div>
          )}
        </Reveal>
      </section>

      <section className="border-y border-border">
        <div className="page-shell section-shell grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <Reveal>
            <p className="eyebrow">Case study</p>
            <div className="mt-8 space-y-10">
              {project.sections.map((section, index) => (
                <article key={section.heading}>
                  <p className="text-sm font-medium text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 font-space-grotesk text-2xl font-bold">{section.heading}</h2>
                  <p className="mt-4 prose-copy">{section.body}</p>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <aside className="surface-muted p-8">
              <p className="eyebrow">Tech stack</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-10">
                <p className="eyebrow">Key takeaways</p>
                <ul className="mt-5 space-y-3">
                  {project.takeaways.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="page-shell section-shell">
        <Reveal className="surface p-8 md:p-10">
          <p className="eyebrow">Next step</p>
          <h2 className="section-title mt-5">Let&apos;s talk about building products.</h2>
          <p className="lede mt-5 max-w-2xl">
            I am always glad to talk with other developers, founders, or recruitment teams who value clear communication and straightforward code.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/connect" className="button-primary">
              Get in touch
            </Link>
            <Link href="/projects" className="button-secondary">
              Back to all projects
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
