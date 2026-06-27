"use client";

import { motion } from "framer-motion";
import { ArrowDown, Monitor, Terminal, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DOWNLOADS, SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden pt-16">
      <div className="absolute inset-0 grid-bg" />
      <div className="noise-overlay absolute inset-0" />

      <div className="absolute left-1/2 top-28 h-px w-[min(90vw,48rem)] -translate-x-1/2 glow-line sm:top-32" />

      <div className="section-container relative flex min-h-[calc(100dvh-4rem)] flex-col justify-center pb-16 pt-10 sm:pb-20 sm:pt-12 md:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="mb-5 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-border-strong bg-surface/60 px-3 py-1.5 backdrop-blur-sm sm:mb-6">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            <span className="font-mono text-[10px] text-muted sm:text-xs">
              v1.0 — Windows &amp; Linux desktop app
            </span>
          </div>

          <h1 className="text-[clamp(2rem,8vw,3.75rem)] font-semibold leading-[1.1] tracking-tight text-foreground">
            {SITE.name}
          </h1>

          <p className="mt-4 text-lg font-medium leading-snug text-accent sm:mt-5 sm:text-xl md:text-2xl">
            {SITE.tagline}
          </p>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:mt-6 sm:text-base md:text-lg">
            {SITE.description}
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap">
            <Button href={DOWNLOADS.windows.href} variant="primary" className="w-full sm:w-auto">
              <Monitor className="h-4 w-4 shrink-0" />
              Download for Windows
            </Button>
            <Button href="#download" variant="secondary" className="w-full sm:w-auto">
              <Terminal className="h-4 w-4 shrink-0" />
              Linux — coming soon
            </Button>
            <Button href="#preview" variant="outline" className="w-full sm:w-auto">
              <Play className="h-4 w-4 shrink-0" />
              View Demo
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-10 sm:mt-16 md:mt-24"
        >
          <HeroStats />
        </motion.div>

        <motion.a
          href="#problem"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-accent lg:flex"
          aria-label="Scroll to content"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest">
            Scroll
          </span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </motion.a>
      </div>

      <div className="pointer-events-none absolute -right-32 top-1/4 hidden h-96 w-96 rounded-full bg-accent/5 blur-3xl sm:block" />
      <div className="pointer-events-none absolute -left-24 bottom-1/4 hidden h-72 w-72 rounded-full bg-blue/5 blur-3xl sm:block" />
    </section>
  );
}

function HeroStats() {
  const stats = [
    { value: "8", label: "Core security modules" },
    { value: "AI", label: "Threat scoring engine" },
    { value: "AES-256", label: "Data encryption" },
    { value: "Live", label: "Real-time monitoring" },
  ];

  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-4">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 + i * 0.08 }}
          className="bg-surface px-4 py-4 sm:px-5 sm:py-5 md:px-6"
        >
          <p className="font-mono text-base font-medium text-accent sm:text-lg md:text-xl">
            {stat.value}
          </p>
          <p className="mt-1 text-[10px] leading-tight text-muted sm:text-xs">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
