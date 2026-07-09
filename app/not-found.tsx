import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <span className="text-9xl md:text-[12rem] font-space-grotesk font-bold text-muted-foreground/20 leading-none">
            404
          </span>
        </div>

        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="p-4 bg-muted/50 rounded-2xl border border-border">
            <Search className="w-8 h-8 text-muted-foreground" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-4">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-medium hover:bg-foreground/90 transition-all"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-full font-medium hover:bg-muted transition-colors"
          >
            View Projects
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">
            Quick links that might help:
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link
              href="/about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/now"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Now
            </Link>
            <Link
              href="/connect"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Connect
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}