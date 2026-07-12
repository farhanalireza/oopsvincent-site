import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageIntro from "@/components/site/PageIntro";
import Reveal from "@/components/site/Reveal";
import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Thoughtful software development, design, and product strategy for founders and startups.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: `Services | ${siteConfig.name}`,
    description: "Thoughtful software development, design, and product strategy for founders and startups.",
    url: "/services",
  },
};

const servicesList = [
  {
    title: "Full-Stack Web Development",
    description: "Build modern web applications using technologies like React, Next.js, TypeScript, Node.js, PostgreSQL, and Supabase.",
    deliverables: [
      "Responsive websites",
      "Dashboards",
      "SaaS applications",
      "Authentication",
      "API integration",
      "Database integration",
    ],
  },
  {
    title: "Custom Software Development",
    description: "Develop software tailored to a specific workflow or business problem instead of forcing an existing tool to fit.",
    deliverables: [
      "Internal tools",
      "Business applications",
      "Productivity software",
      "Custom workflows",
      "Automation",
    ],
  },
  {
    title: "Technical Support",
    description: "Help maintain, improve, debug, or extend existing applications.",
    deliverables: [
      "Bug fixing",
      "Performance improvements",
      "Feature additions",
      "Refactoring",
      "Deployment support",
    ],
  },
  {
    title: "Web Design",
    description: "Design clean, modern interfaces that prioritize clarity and usability.",
    deliverables: [
      "Landing pages",
      "Dashboard layouts",
      "Wireframes",
      "Responsive UI",
      "Design systems",
    ],
  },
  {
    title: "Brand Design",
    description: "Create a consistent visual identity beyond the logo.",
    deliverables: [
      "Typography",
      "Color palette",
      "Brand guidelines",
      "Social assets",
      "Visual direction",
    ],
  },
];

const idealProjects = [
  "SaaS products",
  "Startup MVPs",
  "Productivity software",
  "Internal business tools",
  "Modern company websites",
  "Portfolio websites",
  "Design systems",
  "Long-term product development",
];

const goodFitReasons = [
  "You have a clear problem but aren't sure how to solve it.",
  "You value maintainable software over shortcuts.",
  "You want someone who thinks about the product, not just the code.",
  "You prefer collaboration and honest communication.",
];

const processSteps = [
  {
    step: "01",
    title: "Understand the problem",
    description: "Discuss goals, users, and requirements.",
  },
  {
    step: "02",
    title: "Plan the solution",
    description: "Define scope, architecture, and priorities.",
  },
  {
    step: "03",
    title: "Build",
    description: "Develop the product while sharing progress regularly.",
  },
  {
    step: "04",
    title: "Refine",
    description: "Test, polish, deploy, and improve.",
  },
];

const faqs = [
  {
    question: "What types of clients do you work with?",
    answer: "I work with early-stage founders, small startup teams, and businesses looking to build web applications or internal tools. I fit best with teams that value clear collaboration and maintainable code.",
  },
  {
    question: "Do you work with startups?",
    answer: "Yes. I enjoy working with startups to build MVPs from scratch or improve existing codebases. I focus on keeping the scope realistic so we can ship the first version quickly.",
  },
  {
    question: "Can you join an existing project?",
    answer: "Yes, if the codebase has a clear structure and uses technologies I work with. I can help debug, extend features, or refactor sections that have become hard to maintain.",
  },
  {
    question: "Do you redesign existing websites?",
    answer: "Yes. If your website is slow or hard for users to navigate, I can redesign and rebuild it with a focus on simplicity, speed, and clear hierarchy.",
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes. I can provide monthly maintenance to keep dependency packages updated, monitor performance, and fix bugs as they arise.",
  },
  {
    question: "How do we get started?",
    answer: "The best way is to send an email or schedule a short call. We will discuss your project requirements, goals, and see if our working styles align.",
  },
];

export default function ServicesPage() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `Services | ${siteConfig.name}`,
    "description": "Thoughtful software development, design, and product strategy for founders and startups.",
    "url": `${siteConfig.siteUrl}/services`,
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
          "name": "Services",
          "item": `${siteConfig.siteUrl}/services`
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
        eyebrow="Services"
        title="Let's build something worth keeping."
        description="I work with founders, startups, and businesses that need thoughtful software, clear communication, and reliable execution. Whether it's building a product from scratch or improving an existing one, I focus on work that solves real problems."
      />

      <section className="border-t border-border">
        <div className="page-shell section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="eyebrow">Philosophy</p>
            <h2 className="section-title mt-5">How I approach client work</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="prose-copy space-y-6">
              <p className="text-xl font-medium text-foreground">
                I prefer long-term thinking over quick fixes.
              </p>
              <p>
                Before writing code, I try to understand the problem, the users, and the goals of the project. Good software is rarely the result of rushing into implementation.
              </p>
              <p>
                I value clear communication, realistic expectations, and maintainable solutions that can continue to evolve after launch.
              </p>
              <div className="pt-4">
                <Link href="/connect" className="button-primary">
                  Discuss a project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="page-shell section-shell">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Offerings</p>
            <h2 className="section-title mt-5">How I can help</h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicesList.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.05}>
                <div className="surface flex h-full flex-col p-8">
                  <h3 className="font-space-grotesk text-2xl font-bold">{service.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground flex-grow">
                    {service.description}
                  </p>
                  <div className="mt-8 border-t border-border pt-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-foreground">Typical deliverables</p>
                    <ul className="mt-4 space-y-2.5">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary opacity-80" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="page-shell section-shell grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Focus</p>
            <h2 className="section-title mt-5 font-space-grotesk">Projects I&apos;m interested in</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {idealProjects.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3 text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="eyebrow">Compatibility</p>
            <h2 className="section-title mt-5 font-space-grotesk">We might work well together if...</h2>
            <div className="mt-8 space-y-4">
              {goodFitReasons.map((reason) => (
                <div key={reason} className="surface-muted p-6">
                  <p className="text-sm font-medium text-foreground">{reason}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="page-shell section-shell">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Collaboration</p>
            <h2 className="section-title mt-5">What working together looks like</h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.06}>
                <div className="surface p-8 relative h-full">
                  <span className="font-space-grotesk text-4xl font-extrabold text-muted-foreground/20 absolute top-6 right-6">
                    {step.step}
                  </span>
                  <h3 className="font-space-grotesk text-xl font-bold mt-4">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="page-shell section-shell">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">FAQ</p>
            <h2 className="section-title mt-5">Frequently asked questions</h2>
          </Reveal>

          <div className="mt-12 max-w-4xl space-y-6">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 0.05}>
                <div className="surface p-8">
                  <h3 className="font-space-grotesk text-xl font-bold">{faq.question}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{faq.answer}</p>
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
            <h2 className="section-title mt-5">Have a project in mind?</h2>
            <p className="lede mt-5 max-w-2xl">
              Whether you&apos;re starting from an idea or improving an existing product, I&apos;d be happy to hear about it.
            </p>
            <div className="mt-8">
              <Link href="/connect" className="button-primary">
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
