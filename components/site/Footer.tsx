import Link from "next/link";
import { navLinks } from "@/data/navLinks";
import { siteConfig } from "@/data/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="page-shell py-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl text-sm text-muted-foreground">
            <p>{siteConfig.name} — Full-Stack Developer & Founder.</p>
            <p className="mt-1 text-xs opacity-80">Currently developing Rhythme. © {currentYear}</p>
            <div className="flex gap-4 mt-3 text-xs">
              <Link 
                href={siteConfig.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-colors hover:text-foreground"
              >
                GitHub
              </Link>
              <Link 
                href={siteConfig.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-colors hover:text-foreground"
              >
                LinkedIn
              </Link>
              <Link 
                href={siteConfig.x} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="transition-colors hover:text-foreground"
              >
                X (Twitter)
              </Link>
            </div>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-5 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
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
