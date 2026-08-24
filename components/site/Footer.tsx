import Link from "next/link";
import { navLinks } from "@/data/navLinks";
import { siteConfig } from "@/data/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="page-shell py-8 sm:py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl text-sm text-muted-foreground">
            <p className="font-newsreader text-lg text-foreground font-semibold">{siteConfig.name} — Full-Stack Developer &amp; Founder.</p>
            <p className="mt-1 text-xs opacity-80">Currently developing Rhythmé. © {currentYear}</p>
            <div className="flex flex-wrap gap-4 mt-3 text-xs">
              <Link 
                href={siteConfig.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-colors hover:text-accent font-medium"
              >
                GitHub
              </Link>
              <Link 
                href={siteConfig.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-colors hover:text-accent font-medium"
              >
                LinkedIn
              </Link>
              <Link 
                href={siteConfig.x} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-colors hover:text-accent font-medium"
              >
                X (Twitter)
              </Link>
            </div>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-newsreader text-base text-muted-foreground transition-colors hover:text-accent"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
