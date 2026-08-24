import Link from "next/link";
import { Home, Search } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist or has been moved.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Number */}
        <div className="mb-6 sm:mb-8">
          <span className="text-7xl sm:text-9xl md:text-[11rem] font-newsreader font-normal text-muted-foreground/25 leading-none">
            404
          </span>
        </div>

        {/* Icon */}
        <div className="mb-6 sm:mb-8 flex justify-center">
          <div className="p-3.5 sm:p-4 bg-muted/60 rounded-2xl border border-border">
            <Search className="w-6 h-6 sm:w-8 sm:h-8 text-muted-foreground" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-newsreader font-semibold mb-3 sm:mb-4">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 leading-relaxed max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <Link
            href="/"
            className="button-primary"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/projects"
            className="button-secondary"
          >
            View Projects
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-border">
          <p className="text-xs sm:text-sm text-muted-foreground mb-4">
            Quick links that might help:
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
            <Link
              href="/about"
              className="font-newsreader text-base text-muted-foreground hover:text-accent transition-colors"
            >
              About
            </Link>
            <Link
              href="/now"
              className="font-newsreader text-base text-muted-foreground hover:text-accent transition-colors"
            >
              Now
            </Link>
            <Link
              href="/connect"
              className="font-newsreader text-base text-muted-foreground hover:text-accent transition-colors"
            >
              Connect
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}