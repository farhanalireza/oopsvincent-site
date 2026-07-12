import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import PageIntro from "@/components/site/PageIntro";
import Reveal from "@/components/site/Reveal";
import { siteConfig } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect",
  description: `Contact ${siteConfig.name} for freelance projects, startup discussions, or recruitment.`,
  alternates: {
    canonical: "/connect",
  },
  openGraph: {
    title: `Connect | ${siteConfig.name}`,
    description: `Contact ${siteConfig.name} for freelance projects, startup discussions, or recruitment.`,
    url: "/connect",
  },
};

export default function ConnectPage() {
  const idealForItems = [
    "discussing a project",
    "product feedback",
    "startup conversations",
    "technical consultations",
  ];

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": `Connect | ${siteConfig.name}`,
    "description": `Contact ${siteConfig.name} for freelance projects, startup discussions, or recruitment.`,
    "url": `${siteConfig.siteUrl}/connect`,
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
          "name": "Connect",
          "item": `${siteConfig.siteUrl}/connect`
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
        eyebrow="Connect"
        title="Let's build something worthwhile."
        description="Whether you're looking to hire, collaborate, discuss an idea, or simply want to say hello, I'd be happy to hear from you. I enjoy conversations about software, startups, product design, and building things that solve real problems."
      />

      <section className="border-t border-border">
        <div className="page-shell section-shell">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Ways to connect</p>
            <h2 className="section-title mt-5">Choose how you want to reach out.</h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* Card 1: Email */}
            <Reveal delay={0.05}>
              <div className="surface flex h-full flex-col p-8">
                <p className="eyebrow">Email</p>
                <h3 className="mt-4 font-space-grotesk text-2xl font-bold">{siteConfig.email}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground flex-grow">
                  For project inquiries, freelance work, recruitment opportunities, or anything that doesn&apos;t fit into a calendar invite.
                </p>
                <div className="mt-8">
                  <Link href={`mailto:${siteConfig.email}`} className="button-primary w-full justify-center">
                    <Mail className="h-4 w-4" />
                    Email me
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Card 2: Call */}
            <Reveal delay={0.1}>
              <div className="surface flex h-full flex-col p-8">
                <p className="eyebrow">Schedule a call</p>
                <h3 className="mt-4 font-space-grotesk text-2xl font-bold">Book a call</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  If you&apos;d rather talk face-to-face, you can book a time that works for both of us.
                </p>
                <div className="mt-6 flex-grow">
                  <p className="text-xs font-semibold uppercase tracking-wider text-foreground">Ideal for</p>
                  <ul className="mt-3 space-y-2">
                    {idealForItems.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <Link 
                    href={siteConfig.calendar} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="button-secondary w-full justify-center"
                  >
                    Book a call
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Card 3: X */}
            <Reveal delay={0.15}>
              <div className="surface flex h-full flex-col p-8">
                <p className="eyebrow">X (Twitter)</p>
                <h3 className="mt-4 font-space-grotesk text-2xl font-bold">@oopsvincent</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground flex-grow">
                  I occasionally share updates on what I&apos;m building, what I&apos;m learning, and the progress of Rhythme. If you have a quick question, feel free to reach out there as well.
                </p>
                <div className="mt-8">
                  <Link 
                    href={siteConfig.x} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="button-secondary w-full justify-center"
                  >
                    Follow on X
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="mt-12 pt-12 border-t border-border/40">
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Or find me on</p>
              <div className="flex flex-wrap gap-6 mt-1">
                <Link 
                  href={siteConfig.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 text-foreground hover:text-primary transition-colors font-medium text-sm"
                >
                  GitHub
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <Link 
                  href={siteConfig.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 text-foreground hover:text-primary transition-colors font-medium text-sm"
                >
                  LinkedIn
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <Link 
                  href={siteConfig.x} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 text-foreground hover:text-primary transition-colors font-medium text-sm"
                >
                  X (Twitter)
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="page-shell section-shell grid gap-12 lg:grid-cols-2">
          {/* Before you reach out */}
          <Reveal>
            <p className="eyebrow">Guidelines</p>
            <h2 className="section-title mt-5 font-space-grotesk">Before you reach out</h2>
            <div className="mt-6 prose-copy space-y-4">
              <p>A short introduction always helps.</p>
              <p>If you&apos;re getting in touch about a project, it helps to include:</p>
              <ul className="space-y-2.5">
                {[
                  "who you are",
                  "what you're building",
                  "what kind of help you're looking for",
                  "any relevant links or context",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="pt-4 font-medium text-foreground">
                Clear messages usually lead to better conversations.
              </p>
            </div>
          </Reveal>

          {/* Current availability */}
          <Reveal delay={0.08}>
            <p className="eyebrow">Availability</p>
            <h2 className="section-title mt-5 font-space-grotesk">Current availability</h2>
            <div className="mt-6 prose-copy space-y-6">
              <p>
                I&apos;m currently focused on building Rhythme, so I only take on a limited number of client projects.
              </p>
              <p>
                If I think I&apos;m a good fit for what you&apos;re building, I&apos;d be happy to talk.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="page-shell section-shell">
          <Reveal className="surface-muted max-w-4xl p-8 md:p-12">
            <p className="eyebrow">Direct Contact</p>
            <h2 className="section-title mt-5">Have an idea you&apos;d like to discuss?</h2>
            <p className="lede mt-5 max-w-2xl">
              I&apos;d love to hear about it. Whether it&apos;s a startup, a product, a website, or simply a conversation about building software, my inbox is always open.
            </p>
            <div className="mt-8">
              <Link href={`mailto:${siteConfig.email}`} className="button-primary">
                Send an email
                <Mail className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
