"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/navLinks";
import ThemeToggle from "./ThemeSwitch";
import { siteConfig } from "@/data/site";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close mobile menu on route change using render-phase state adjustment.
  // See: https://react.dev/learn/you-might-not-need-an-effect#adjusting-some-state-when-a-prop-changes
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) {
      document.body.style.removeProperty("overflow");
      return;
    }

    document.body.style.overflow = "hidden";
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.removeProperty("overflow");
      window.removeEventListener("keydown", handleEscape);
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl rounded-full border transition-all duration-300 backdrop-blur-md ${
          scrolled
            ? "border-border bg-background/80 shadow-lg"
            : "border-border/60 bg-background/60 shadow-md"
        }`}
      >
        <div className="flex justify-between items-center h-14 px-6">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="transition-opacity hover:opacity-80"
              aria-label={`${siteConfig.name} home`}
            >
              <span className="font-space-grotesk text-lg font-bold">
                {siteConfig.name}
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-2" aria-label="Primary navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className="relative rounded-full px-4 py-2"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeBubble"
                        className="absolute inset-0 rounded-full border border-border bg-muted"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    <span
                      className={`relative z-10 text-sm font-medium transition-colors ${
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {link.name}
                    </span>
                  </Link>
                );
              })}

              {/* Theme Toggle */}
              <div className="ml-4 pl-4 border-l border-border">
                <ThemeToggle />
              </div>
            </nav>

            <button
              onClick={toggleMobileMenu}
              className="rounded-lg p-2 transition-colors hover:bg-muted md:hidden"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
              onClick={closeMobileMenu}
            />

            <motion.div
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm border-l border-border bg-background shadow-2xl md:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center p-6 border-b border-border">
                  <div>
                    <p className="font-space-grotesk text-xl font-bold">Menu</p>
                  </div>
                  <button
                    onClick={closeMobileMenu}
                    className="p-2 rounded-lg hover:bg-muted transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="flex-1 overflow-y-auto p-6" aria-label="Mobile navigation">
                  <div className="space-y-2">
                    {navLinks.map((link, index) => {
                      const isActive = pathname === link.href;
                      return (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            href={link.href}
                            onClick={closeMobileMenu}
                            aria-current={isActive ? "page" : undefined}
                            className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                              isActive
                                ? "bg-muted text-foreground"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                            }`}
                          >
                            {link.name}
                            {isActive && (
                              <div className="w-2 h-2 rounded-full bg-primary" />
                            )}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </nav>

                <div className="p-6 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Theme</span>
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
