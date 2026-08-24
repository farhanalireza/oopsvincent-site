import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Info } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import { getProjectBySlug, projects } from "@/data/projects";
import { SkillIcon } from "@/components/site/SkillIcon";
import { siteConfig } from "@/data/site";

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
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.summary,
      url: `/projects/${slug}`,
      images: [
        {
          url: project.logoImage || "/Rhythme.png",
          alt: `${project.title} Project Logo`,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": project.title,
        "item": `${siteConfig.siteUrl}/projects/${project.slug}`
      }
    ]
  };

  const techArticleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": `${project.title} Case Study`,
    "description": project.summary,
    "image": project.logoImage ? `${siteConfig.siteUrl}${project.logoImage}` : `${siteConfig.siteUrl}/Rhythme.png`,
    "datePublished": project.year.includes("2025") ? "2025-01-01T00:00:00Z" : "2024-01-01T00:00:00Z",
    "author": {
      "@type": "Person",
      "name": siteConfig.name,
      "url": siteConfig.siteUrl
    },
    "publisher": {
      "@type": "Person",
      "name": siteConfig.name,
      "url": siteConfig.siteUrl
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteConfig.siteUrl}/projects/${project.slug}`
    },
    "dependencies": project.techStack.join(", ")
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleJsonLd) }}
      />
      <div className="page-shell border-b border-border pt-24 sm:pt-28 pb-4 sm:pb-5">
        <Link href="/projects" className="button-ghost">
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>
      </div>

      <section className="page-shell section-shell">
        <Reveal className="max-w-4xl">
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            <span className="chip">{project.year}</span>
            <span className="chip">{project.role}</span>
            <span className="chip capitalize">
              {project.status === "in-progress" ? "In progress" : project.status}
            </span>
          </div>
          <div className="flex items-center gap-4 sm:gap-5 mt-5 sm:mt-6">
            {project.logoImage && (
              <div className={`relative h-13 w-13 sm:h-16 sm:w-16 shrink-0 overflow-hidden border border-border bg-card p-1.5 ${
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
          <p className="lede mt-5 sm:mt-6 max-w-3xl">{project.tagline}</p>
          <p className="prose-copy mt-6 sm:mt-8 max-w-3xl text-sm sm:text-base md:text-lg">{project.summary}</p>
          
          {project.statusNotice && (
            <div className="mt-6 max-w-3xl rounded-2xl border border-accent/30 bg-accent/10 p-5 sm:p-6">
              <div className="flex items-start gap-3.5">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">Availability Notice</p>
                  <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">{project.statusNotice}</p>
                </div>
              </div>
            </div>
          )}

          {project.links && project.links.length > 0 && (
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-primary"
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
        <div className="page-shell section-shell grid gap-8 sm:gap-12 lg:grid-cols-[1.25fr_0.75fr]">
          <Reveal>
            <p className="eyebrow">Case study</p>
            <div className="mt-6 sm:mt-8 space-y-8 sm:space-y-10">
              {project.sections.map((section, index) => (
                <article key={section.heading} className="space-y-3">
                  <span className="font-newsreader text-2xl font-bold text-accent">
                    0{index + 1}
                  </span>
                  <h2 className="font-newsreader text-2xl sm:text-3xl font-semibold">{section.heading}</h2>
                  <p className="prose-copy text-sm sm:text-base leading-relaxed">{section.body}</p>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <aside className="surface-muted p-6 sm:p-8 md:p-10 sticky top-24">
              <p className="eyebrow">Tech stack</p>
              <div className="mt-4 sm:mt-5 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="chip gap-1.5 sm:gap-2">
                    <SkillIcon name={tech} className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 sm:mt-10 pt-6 border-t border-border/70">
                <p className="eyebrow">Key takeaways</p>
                <ul className="mt-4 space-y-3">
                  {project.takeaways.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-xs sm:text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="page-shell section-shell">
        <Reveal className="surface-muted max-w-4xl p-7 sm:p-10 md:p-12">
          <p className="eyebrow">Next step</p>
          <h2 className="section-title mt-3 sm:mt-4">Let&apos;s talk about building products.</h2>
          <p className="lede mt-4 max-w-2xl">
            I am always glad to talk with other developers, founders, or recruitment teams who value clear communication and straightforward code.
          </p>
          <div className="mt-7 sm:mt-9 flex flex-wrap items-center gap-3.5">
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
