"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircle2 } from "lucide-react";

const SOLUTION_POINTS = [
  {
    title: "Unified ingestion pipeline",
    detail:
      "Packets, firewall logs, and file hashes enter one processing queue — no more exporting CSVs between tools.",
  },
  {
    title: "ML-driven prioritization",
    detail:
      "Ensemble models assign a composite threat score so analysts tackle high-risk events first, not loudest alerts.",
  },
  {
    title: "External intelligence, built in",
    detail:
      "VirusTotal and IP reputation APIs enrich every finding automatically. Context arrives with the alert, not after a manual lookup.",
  },
  {
    title: "Desktop-first, cross-platform",
    detail:
      "A Flutter app that runs natively on Windows and Linux — designed for the workstation where security work actually happens.",
  },
] as const;

export function Solution() {
  return (
    <AnimatedSection className="section-pad border-y border-border bg-surface/50">
      <div className="section-container">
        <div className="grid items-center gap-10 sm:gap-14 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow="Our Approach"
            title="One platform to detect, score, and respond"
            description="CyberSentinel replaces the patchwork of disconnected security utilities with a pipeline that ingests raw telemetry, applies machine learning, and surfaces only what matters."
          />

          <div className="space-y-5">
            {SOLUTION_POINTS.map((point) => (
              <div
                key={point.title}
                className="flex gap-4 rounded-lg border border-border bg-background/50 p-5 transition-colors hover:border-accent/20"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {point.title}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {point.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-border bg-surface p-5 sm:mt-16 sm:p-6 md:p-8">
          <p className="font-mono text-xs uppercase tracking-wider text-accent">
            What you get
          </p>
          <p className="mt-3 text-base font-medium leading-relaxed text-foreground sm:text-lg md:text-xl">
            Packet tracing, firewall analysis, IP reputation checks, VirusTotal
            scanning, AI threat scoring, and exportable reports — unified in one
            desktop application.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
