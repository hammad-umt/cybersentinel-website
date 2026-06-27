"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROBLEMS } from "@/lib/constants";

export function Problem() {
  return (
    <AnimatedSection id="problem" className="section-pad">
      <div className="section-container">
        <SectionHeading
          eyebrow="The Challenge"
          title="Security teams are outnumbered — and overwhelmed"
          description="Modern networks generate more telemetry than any analyst can manually review. The tools exist, but they're scattered, slow to correlate, and noisy by default."
        />

        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 md:grid-cols-3">
          {PROBLEMS.map((item, i) => (
            <article
              key={item.label}
              className="group relative overflow-hidden rounded-xl border border-border bg-surface p-5 transition-colors hover:border-border-strong sm:p-6 md:p-7"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="absolute -right-4 -top-4 font-mono text-7xl font-bold text-white/[0.02] transition-colors group-hover:text-accent/[0.04]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="font-mono text-2xl font-semibold text-accent md:text-3xl">
                {item.stat}
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">
                {item.label}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {item.detail}
              </p>
            </article>
          ))}
        </div>

        <blockquote className="mt-10 border-l-2 border-accent/50 pl-4 sm:mt-14 sm:pl-6 md:pl-8">
          <p className="text-base leading-relaxed text-foreground/90 sm:text-lg md:text-xl md:leading-relaxed">
            &ldquo;The problem isn&apos;t a lack of data — it&apos;s the absence
            of a single place where packet traces, firewall events, and threat
            intelligence actually talk to each other.&rdquo;
          </p>
          <footer className="mt-4 font-mono text-xs text-muted">
            — Design rationale, CyberSentinel FYP documentation
          </footer>
        </blockquote>
      </div>
    </AnimatedSection>
  );
}
