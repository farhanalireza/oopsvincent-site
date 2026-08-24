import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageIntro from "@/components/site/PageIntro";
import Reveal from "@/components/site/Reveal";
import { nowSections, siteConfig } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Now",
  description: "A snapshot of what has my attention right now, including building Amplecen around Rhythmé.",
  alternates: {
    canonical: "/now",
  },
  openGraph: {
    title: `Now | ${siteConfig.name}`,
    description: "A snapshot of what has my attention right now, including building Amplecen around Rhythmé.",
    url: "/now",
  },
};

export default function NowPage() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `Now | ${siteConfig.name}`,
    "description": "A snapshot of what has my attention right now, including building Amplecen around Rhythmé.",
    "url": `${siteConfig.siteUrl}/now`,
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
          "name": "Now",
          "item": `${siteConfig.siteUrl}/now`
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
        eyebrow="Now"
        title="What I'm building and learning this week."
        description="This page is current as of August 24, 2026 and reflects what is currently getting the most attention in my daily work and thinking."
      />

      <section className="border-t border-border">
        <div className="page-shell section-shell">
          <Reveal className="surface-muted max-w-3xl p-6 sm:p-8 md:p-10 transition-all hover:border-accent/40">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <p className="eyebrow">Last updated</p>
            </div>
            <p className="mt-3 sm:mt-4 font-newsreader text-2xl sm:text-3xl md:text-4xl font-semibold">{siteConfig.nowUpdatedAt}</p>
            <p className="mt-3 sm:mt-4 prose-copy text-sm sm:text-base leading-relaxed">
              This page follows the{" "}
              <Link
                href="https://nownownow.com/about"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-4 hover:opacity-80"
              >
                /now page movement
              </Link>
              : a simple way to share what is currently getting the most attention in my daily work and thinking.
            </p>
          </Reveal>

          <div className="mt-10 sm:mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {nowSections.map((section, index) => (
              <Reveal key={section.title} delay={index * 0.06}>
                <article className="surface p-6 sm:p-8 h-full flex flex-col justify-between transition-all hover:border-accent/40">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="eyebrow">{section.title}</span>
                      <span className="font-newsreader text-lg font-bold text-accent">0{index + 1}</span>
                    </div>
                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">{section.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="page-shell section-shell">
          <Reveal className="surface-muted max-w-4xl p-7 sm:p-10 md:p-12">
            <p className="eyebrow">Engineering Mindset</p>
            <h2 className="section-title mt-3 sm:mt-4">Steady work over quick progress.</h2>
            <p className="lede mt-4 max-w-2xl">
              I am focused on writing readable code and planning database changes on paper before writing code. Taking an extra hour to clarify a problem usually saves two days of rewriting code.
            </p>
            <div className="mt-7 sm:mt-9">
              <Link href="/connect" className="button-primary">
                Want to connect?
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
