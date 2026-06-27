import { Code2, BookOpen, Mail, Shield } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="section-container py-12 sm:py-16 md:py-20">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-md border border-accent/30 bg-accent/10">
                <Shield className="h-4 w-4 text-accent" />
              </div>
              <span className="text-sm font-semibold">{SITE.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {SITE.description}
            </p>
            <p className="mt-3 font-mono text-xs text-muted/70">
              {SITE.university}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted">
              Navigate
            </p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted">
              Connect
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={SITE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                >
                  <Code2 className="h-4 w-4" />
                  GitHub Repository
                </a>
              </li>
              <li>
                <a
                  href={SITE.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                >
                  <BookOpen className="h-4 w-4" />
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4" />
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:mt-14 sm:pt-8 md:flex-row md:items-center">
          <p className="text-xs text-muted">
            &copy; {year} {SITE.name}. Built as a Final Year Project.
          </p>
          <p className="font-mono text-xs text-muted/60">
            AES-256 encrypted &middot; Windows &amp; Linux desktop app
          </p>
        </div>
      </div>
    </footer>
  );
}
