"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ARCHITECTURE_FLOW, TECH_STACK } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export function Architecture() {
  return (
    <AnimatedSection
      id="architecture"
      className="border-y border-border bg-surface/50 py-24 md:py-32"
    >
      <div className="section-container">
        <SectionHeading
          eyebrow="System Design"
          title="Built for real workloads, not slide decks"
          description="A layered architecture separates the Flutter client, FastAPI services, ML pipeline, and encrypted PostgreSQL backend — each component independently testable."
        />

        <div className="mt-14 flex flex-wrap items-center justify-center gap-2 md:gap-3">
          {ARCHITECTURE_FLOW.map((step, i) => (
            <div key={step.step} className="flex items-center gap-2 md:gap-3">
              <div className="rounded-lg border border-border bg-background px-4 py-3 text-center md:min-w-[7rem]">
                <p className="font-mono text-xs uppercase tracking-wider text-accent">
                  {step.step}
                </p>
                <p className="mt-1 text-[11px] leading-snug text-muted">
                  {step.detail}
                </p>
              </div>
              {i < ARCHITECTURE_FLOW.length - 1 && (
                <ArrowRight className="hidden h-4 w-4 shrink-0 text-muted/40 sm:block" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {TECH_STACK.map((layer) => (
            <div
              key={layer.layer}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
                  {layer.layer}
                </p>
              </div>
              <p className="mt-2 text-sm text-muted">{layer.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {layer.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border-strong bg-background/60 px-2.5 py-1 font-mono text-xs text-foreground/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
