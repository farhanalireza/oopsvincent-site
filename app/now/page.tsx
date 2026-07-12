import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageIntro from "@/components/site/PageIntro";
import Reveal from "@/components/site/Reveal";
import { nowSections, siteConfig } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Now",
  description: "A snapshot of what has my attention right now, including building Rhythme and learning latency compensation.",
  alternates: {
    canonical: "/now",
  },
  openGraph: {
    title: `Now | ${siteConfig.name}`,
    description: "A snapshot of what has my attention right now, including building Rhythme and learning latency compensation.",
    url: "/now",
  },
};

export default function NowPage() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `Now | ${siteConfig.name}`,
    "description": "A snapshot of what has my attention right now, including building Rhythme and learning latency compensation.",
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
        description="This page is current as of July 9, 2026 and reflects the work, learning, and priorities shaping my time at the moment."
      />

      <section className="border-t border-border">
        <div className="page-shell section-shell">
          <Reveal className="surface-muted max-w-3xl p-8 md:p-10">
            <p className="eyebrow">Last updated</p>
            <p className="mt-5 font-space-grotesk text-3xl font-bold">{siteConfig.nowUpdatedAt}</p>
            <p className="mt-4 prose-copy">
              This page follows the{" "}
              <Link
                href="https://nownownow.com/about"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                /now page movement
              </Link>
              : a simple way to share what is currently getting the most attention.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {nowSections.map((section, index) => (
              <Reveal key={section.title} delay={index * 0.06}>
                <article className="surface p-7">
                  <h3 className="eyebrow">{section.title}</h3>
                  <p className="mt-5 text-sm leading-7 text-muted-foreground">{section.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="page-shell section-shell">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Mindset</p>
            <h2 className="section-title mt-5">Steady work over quick progress.</h2>
            <p className="lede mt-5">
              I am focused on writing readable code and planning database changes on paper before writing code. Taking an extra hour to clarify a problem usually saves two days of rewriting code.
            </p>
            <div className="mt-8">
              <Link href="/connect" className="button-ghost">
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
