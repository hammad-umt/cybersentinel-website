"use client";

import { motion } from "framer-motion";
import { ArrowDown, Monitor, Terminal, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DOWNLOADS, SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      <div className="absolute inset-0 grid-bg" />
      <div className="noise-overlay absolute inset-0" />

      <div className="absolute left-1/2 top-32 h-px w-[min(90vw,48rem)] -translate-x-1/2 glow-line" />

      <div className="section-container relative flex min-h-[calc(100vh-4rem)] flex-col justify-center pb-20 pt-12 md:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/60 px-3 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            <span className="font-mono text-xs text-muted">
              v1.0 — Desktop release for Windows &amp; Linux
            </span>
          </div>

          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {SITE.name}
          </h1>

          <p className="mt-5 text-xl font-medium leading-snug text-accent md:text-2xl">
            {SITE.tagline}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {SITE.description}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={DOWNLOADS.windows.href} variant="primary">
              <Monitor className="h-4 w-4" />
              Download for Windows
            </Button>
            <Button href={DOWNLOADS.linux.href} variant="secondary">
              <Terminal className="h-4 w-4" />
              Download for Linux
            </Button>
            <Button href="#preview" variant="outline">
              <Play className="h-4 w-4" />
              View Demo
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 md:mt-24"
        >
          <HeroStats />
        </motion.div>

        <motion.a
          href="#problem"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-accent md:flex"
          aria-label="Scroll to content"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest">
            Scroll
          </span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </motion.a>
      </div>

      <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-1/4 h-72 w-72 rounded-full bg-blue/5 blur-3xl" />
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
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 + i * 0.08 }}
          className="bg-surface px-5 py-5 md:px-6"
        >
          <p className="font-mono text-lg font-medium text-accent md:text-xl">
            {stat.value}
          </p>
          <p className="mt-1 text-xs text-muted">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
