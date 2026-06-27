"use client";

import { Code2, BookOpen, Mail, ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export function Contact() {
  return (
    <AnimatedSection id="contact" className="border-t border-border py-24 md:py-32">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-2xl border border-border-strong bg-surface p-8 md:p-12">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent/5 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Get in Touch
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                Questions about the project or want a walkthrough?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                Whether you&apos;re an evaluator reviewing this FYP, a recruiter
                exploring the codebase, or a developer interested in contributing
                — reach out. We&apos;re happy to demo the platform live or share
                technical documentation.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={`mailto:${SITE.email}`} variant="primary">
                  <Mail className="h-4 w-4" />
                  {SITE.email}
                </Button>
                <Button href="#preview" variant="secondary">
                  Schedule a Demo
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <ContactLink
                href={SITE.github}
                icon={Code2}
                title="GitHub Repository"
                description="Source code, issue tracker, and contribution guidelines"
              />
              <ContactLink
                href={SITE.docs}
                icon={BookOpen}
                title="Documentation"
                description="Setup guides, API reference, and architecture notes"
              />
              <ContactLink
                href={`mailto:${SITE.email}`}
                icon={Mail}
                title="Direct Contact"
                description="For faculty evaluations, partnerships, or technical inquiries"
              />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function ContactLink({
  href,
  icon: Icon,
  title,
  description,
}: {
  href: string;
  icon: typeof Code2;
  title: string;
  description: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
      className="group flex items-start gap-4 rounded-xl border border-border bg-background/40 p-4 transition-all hover:border-accent/30 hover:bg-background/60"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border-strong bg-surface transition-colors group-hover:border-accent/30">
        <Icon className="h-4 w-4 text-accent" />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-1.5">
          <p className="text-sm font-medium text-foreground">{title}</p>
          <ArrowUpRight className="h-3.5 w-3.5 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
        </div>
        <p className="mt-1 text-xs leading-relaxed text-muted">
          {description}
        </p>
      </div>
    </a>
  );
}
