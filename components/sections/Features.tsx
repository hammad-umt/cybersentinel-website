"use client";

import {
  Network,
  Shield,
  Globe,
  ScanSearch,
  Brain,
  LayoutDashboard,
  Activity,
  FileText,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FEATURES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ICON_MAP = {
  network: Network,
  shield: Shield,
  globe: Globe,
  scan: ScanSearch,
  brain: Brain,
  layout: LayoutDashboard,
  activity: Activity,
  file: FileText,
} as const;

export function Features() {
  return (
    <AnimatedSection id="features" className="py-24 md:py-32">
      <div className="section-container">
        <SectionHeading
          eyebrow="Capabilities"
          title="Everything a SOC analyst needs — in one desktop app"
          description="Eight integrated modules cover the full detection lifecycle, from raw packet capture to stakeholder-ready reports."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => {
            const Icon = ICON_MAP[feature.icon];
            const isHighlight = i === 4;

            return (
              <article
                key={feature.title}
                className={cn(
                  "group relative flex flex-col rounded-xl border border-border bg-surface p-5 transition-all duration-300 hover:border-accent/25 hover:bg-surface-elevated",
                  isHighlight && "sm:col-span-2 lg:row-span-1 lg:col-span-2"
                )}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-border-strong bg-background/80 transition-colors group-hover:border-accent/30 group-hover:bg-accent/10">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-sm font-medium text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
