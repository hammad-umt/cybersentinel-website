"use client";

import { Monitor, Terminal, HardDrive, Cpu, Wifi } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { DOWNLOADS } from "@/lib/constants";

export function Download() {
  return (
    <AnimatedSection
      id="download"
      className="border-y border-border bg-surface/50 py-24 md:py-32"
    >
      <div className="section-container">
        <SectionHeading
          eyebrow="Get Started"
          title="Install CyberSentinel on your workstation"
          description="Download the latest build for your platform. The desktop app connects to the FastAPI backend and Supabase for threat data storage and sync."
          align="center"
          className="mx-auto"
        />

        <div className="mx-auto mt-14 grid max-w-3xl gap-5 md:grid-cols-2">
          <DownloadCard
            icon={Monitor}
            platform={DOWNLOADS.windows.label}
            version={DOWNLOADS.windows.version}
            size={DOWNLOADS.windows.size}
            href={DOWNLOADS.windows.href}
            requirements={DOWNLOADS.windows.requirements}
          />
          <DownloadCard
            icon={Terminal}
            platform={DOWNLOADS.linux.label}
            version={DOWNLOADS.linux.version}
            size={DOWNLOADS.linux.size}
            href={DOWNLOADS.linux.href}
            requirements={DOWNLOADS.linux.requirements}
          />
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-xl border border-border bg-surface p-6">
          <p className="font-mono text-xs uppercase tracking-wider text-accent">
            System Requirements
          </p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              { icon: Cpu, text: "64-bit processor (x86_64)" },
              { icon: HardDrive, text: "4 GB RAM minimum (8 GB recommended)" },
              { icon: HardDrive, text: "500 MB available disk space" },
              { icon: Wifi, text: "Internet for threat intel & updates" },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-2.5 text-sm text-muted">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-accent/70" />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AnimatedSection>
  );
}

function DownloadCard({
  icon: Icon,
  platform,
  version,
  size,
  href,
  requirements,
}: {
  icon: typeof Monitor;
  platform: string;
  version: string;
  size: string;
  href: string;
  requirements: string;
}) {
  return (
    <div className="flex flex-col rounded-xl border border-border bg-background/50 p-6 transition-colors hover:border-accent/25">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border-strong bg-surface">
          <Icon className="h-5 w-5 text-accent" />
        </div>
        <div>
          <p className="font-medium text-foreground">{platform}</p>
          <p className="font-mono text-xs text-muted">
            v{version} &middot; {size}
          </p>
        </div>
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
        {requirements}
      </p>
      <Button href={href} variant="primary" className="mt-6 w-full">
        Download for {platform}
      </Button>
    </div>
  );
}
