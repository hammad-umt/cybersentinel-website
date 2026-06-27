"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PREVIEW_TABS } from "@/lib/constants";
import { cn } from "@/lib/utils";

type TabId = (typeof PREVIEW_TABS)[number]["id"];

export function DashboardPreview() {
  const [active, setActive] = useState<TabId>("dashboard");

  return (
    <AnimatedSection id="preview" className="section-pad">
      <div className="section-container">
        <SectionHeading
          eyebrow="Application Preview"
          title="See what analysts see every day"
          description="The Flutter desktop interface puts alerts, traffic, and reports in one coherent workspace — no browser tabs required."
          align="center"
          className="mx-auto"
        />

        <div className="scroll-x-mobile -mx-1 mt-8 flex gap-2 px-1 sm:mt-10 sm:flex-wrap sm:justify-center">
          {PREVIEW_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              className={cn(
                "shrink-0 rounded-lg px-3 py-2.5 text-xs transition-all duration-200 sm:px-4 sm:text-sm",
                active === tab.id
                  ? "border border-accent/30 bg-accent/15 text-accent"
                  : "border border-transparent text-muted hover:bg-white/[0.03] hover:text-foreground"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-border-strong bg-surface shadow-[0_0_80px_-20px_rgba(34,211,238,0.12)] sm:mt-8">
          <div className="flex min-w-0 items-center gap-2 border-b border-border px-3 py-2.5 sm:px-4 sm:py-3">
            <div className="flex shrink-0 gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-danger/70 sm:h-3 sm:w-3" />
              <span className="h-2.5 w-2.5 rounded-full bg-warning/70 sm:h-3 sm:w-3" />
              <span className="h-2.5 w-2.5 rounded-full bg-success/70 sm:h-3 sm:w-3" />
            </div>
            <span className="ml-1 min-w-0 truncate font-mono text-[10px] text-muted sm:ml-2 sm:text-xs">
              CyberSentinel — {PREVIEW_TABS.find((t) => t.id === active)?.label}
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="p-3 sm:p-4 md:p-6"
            >
              {active === "dashboard" && <DashboardMockup />}
              {active === "packets" && <PacketsMockup />}
              {active === "firewall" && <FirewallMockup />}
              {active === "reports" && <ReportsMockup />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </AnimatedSection>
  );
}

function DashboardMockup() {
  const alerts = [
    { severity: "critical", ip: "185.220.101.42", score: 94, type: "C2 Beacon" },
    { severity: "high", ip: "103.152.112.8", score: 78, type: "Port Scan" },
    { severity: "medium", ip: "192.168.1.105", score: 52, type: "Anomaly" },
    { severity: "low", ip: "8.8.8.8", score: 12, type: "DNS Query" },
  ];

  const severityColor = {
    critical: "text-danger bg-danger/10 border-danger/20",
    high: "text-warning bg-warning/10 border-warning/20",
    medium: "text-accent bg-accent/10 border-accent/20",
    low: "text-muted bg-white/5 border-border",
  };

  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_240px] xl:grid-cols-[1fr_280px]">
      <div>
        <div className="mb-4 grid grid-cols-3 gap-2 sm:gap-3">
          {[
            { label: "Active Threats", value: "7" },
            { label: "Blocked IPs", value: "142" },
            { label: "Avg Score", value: "61" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-lg border border-border bg-background/60 p-2 sm:p-3"
            >
              <p className="font-mono text-lg font-semibold text-foreground sm:text-xl">
                {s.value}
              </p>
              <p className="text-[9px] leading-tight text-muted sm:text-[10px]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-border bg-background/40">
          <div className="border-b border-border px-3 py-2">
            <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
              Live Alert Feed
            </p>
          </div>
          <div className="divide-y divide-border">
            {alerts.map((a) => (
              <div
                key={a.ip}
                className="flex flex-col gap-1.5 px-3 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-3"
              >
                <div className="flex min-w-0 items-center gap-2">
                  <span
                    className={cn(
                      "shrink-0 rounded border px-1.5 py-0.5 font-mono text-[9px] uppercase",
                      severityColor[a.severity as keyof typeof severityColor]
                    )}
                  >
                    {a.severity}
                  </span>
                  <span className="truncate font-mono text-xs text-foreground">
                    {a.ip}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3 sm:justify-end">
                  <span className="text-[10px] text-muted">{a.type}</span>
                  <span className="font-mono text-xs text-accent">{a.score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="rounded-lg border border-border bg-background/40 p-3">
        <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
          Threat Score Distribution
        </p>
        <div className="mt-4 flex h-28 items-end gap-1 sm:h-32 sm:gap-1.5">
          {[20, 45, 72, 94, 58, 33, 81, 15, 67, 40].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-accent/30 transition-all hover:bg-accent/50"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <p className="mt-3 font-mono text-[10px] text-muted">
          Last 24h — 847 events processed
        </p>
      </div>
    </div>
  );
}

function PacketsMockup() {
  const rows = [
    { proto: "TCP", src: "10.0.0.12:44302", dst: "185.220.101.42:443", bytes: "1.2 KB", flag: "SYN" },
    { proto: "UDP", src: "192.168.1.5:5353", dst: "224.0.0.251:5353", bytes: "84 B", flag: "—" },
    { proto: "TCP", src: "10.0.0.12:44108", dst: "103.152.112.8:22", bytes: "64 B", flag: "SYN" },
    { proto: "ICMP", src: "10.0.0.1", dst: "8.8.8.8", bytes: "56 B", flag: "ECHO" },
    { proto: "TCP", src: "10.0.0.12:49821", dst: "142.250.80.46:443", bytes: "4.8 KB", flag: "ACK" },
  ];

  return (
    <div className="scroll-x-mobile rounded-lg border border-border bg-background/40 font-mono text-xs">
      <div className="flex min-w-[28rem] items-center justify-between border-b border-border px-3 py-2 sm:min-w-0">
        <span className="text-[10px] uppercase tracking-wider text-muted">
          eth0 — Live Capture
        </span>
        <span className="flex shrink-0 items-center gap-1.5 text-success">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
          Recording
        </span>
      </div>
      <table className="min-w-[28rem] w-full sm:min-w-0">
        <thead>
          <tr className="border-b border-border text-[10px] text-muted">
            <th className="px-2 py-2 text-left font-normal sm:px-3">Proto</th>
            <th className="px-2 py-2 text-left font-normal sm:px-3">Source</th>
            <th className="px-2 py-2 text-left font-normal sm:px-3">Destination</th>
            <th className="hidden px-2 py-2 text-left font-normal sm:table-cell sm:px-3">Size</th>
            <th className="px-2 py-2 text-left font-normal sm:px-3">Flag</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr
              key={i}
              className={cn(
                "border-b border-border/50",
                r.dst.includes("185.220") && "bg-danger/5"
              )}
            >
              <td className="px-2 py-2 text-accent sm:px-3">{r.proto}</td>
              <td className="max-w-[7rem] truncate px-2 py-2 text-foreground/80 sm:max-w-none sm:px-3">
                {r.src}
              </td>
              <td className="max-w-[7rem] truncate px-2 py-2 text-foreground/80 sm:max-w-none sm:px-3">
                {r.dst}
              </td>
              <td className="hidden px-2 py-2 text-muted sm:table-cell sm:px-3">{r.bytes}</td>
              <td className="px-2 py-2 text-muted sm:px-3">{r.flag}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FirewallMockup() {
  const logs = [
    { action: "DENY", rule: "BLOCK_TOR_EXIT", src: "185.220.101.42", count: 847 },
    { action: "DENY", rule: "RATE_LIMIT_SSH", src: "103.152.112.8", count: 312 },
    { action: "ALLOW", rule: "HTTPS_OUTBOUND", src: "10.0.0.12", count: 12403 },
    { action: "DENY", rule: "GEO_BLOCK_RU", src: "91.108.128.0/24", count: 56 },
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        <div className="rounded-lg border border-border bg-background/40 p-3">
          <p className="font-mono text-[10px] uppercase text-muted">Anomalies</p>
          <p className="mt-1 font-mono text-xl font-semibold text-warning sm:text-2xl">3</p>
        </div>
        <div className="rounded-lg border border-border bg-background/40 p-3">
          <p className="font-mono text-[10px] uppercase text-muted">Rules Hit</p>
          <p className="mt-1 font-mono text-xl font-semibold text-foreground sm:text-2xl">12</p>
        </div>
        <div className="rounded-lg border border-border bg-background/40 p-3">
          <p className="font-mono text-[10px] uppercase text-muted">Logs (1h)</p>
          <p className="mt-1 font-mono text-xl font-semibold text-foreground sm:text-2xl">13.6K</p>
        </div>
      </div>
      <div className="rounded-lg border border-border bg-background/40">
        {logs.map((log) => (
          <div
            key={log.rule}
            className="flex flex-col gap-1.5 border-b border-border/50 px-3 py-2.5 last:border-0 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex min-w-0 flex-wrap items-center gap-2 sm:gap-3">
              <span
                className={cn(
                  "shrink-0 font-mono text-[10px] font-medium",
                  log.action === "DENY" ? "text-danger" : "text-success"
                )}
              >
                {log.action}
              </span>
              <span className="truncate font-mono text-xs text-foreground">{log.rule}</span>
            </div>
            <div className="flex items-center justify-between gap-4 sm:justify-end">
              <span className="truncate font-mono text-[10px] text-muted">{log.src}</span>
              <span className="shrink-0 font-mono text-xs text-accent">{log.count}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReportsMockup() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="rounded-lg border border-border bg-background/40 p-3 sm:p-4">
        <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
          Incident Summary — INC-2026-0342
        </p>
        <div className="mt-4 space-y-2 text-xs">
          <div className="flex justify-between gap-4">
            <span className="text-muted">Severity</span>
            <span className="text-danger font-medium">Critical</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-muted">Affected Host</span>
            <span className="font-mono text-foreground">WS-SEC-04</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-muted">Threat Type</span>
            <span className="text-right text-foreground">C2 Communication</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-muted">Duration</span>
            <span className="text-foreground">14m 32s</span>
          </div>
        </div>
        <div className="mt-4 rounded border border-border bg-surface p-3">
          <p className="text-[10px] text-muted">Recommended Action</p>
          <p className="mt-1 text-xs leading-relaxed text-foreground/90">
            Isolate host WS-SEC-04 from network segment. Block egress to
            185.220.101.42 at perimeter firewall. Run full endpoint scan.
          </p>
        </div>
      </div>
      <div className="rounded-lg border border-border bg-background/40 p-3 sm:p-4">
        <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
          Export Options
        </p>
        <div className="mt-4 space-y-2">
          {["PDF Report", "CSV Event Log", "JSON Timeline"].map((fmt) => (
            <div
              key={fmt}
              className="flex items-center justify-between rounded border border-border px-3 py-2.5"
            >
              <span className="text-xs text-foreground">{fmt}</span>
              <span className="font-mono text-[10px] text-accent">Export</span>
            </div>
          ))}
        </div>
        <p className="mt-4 font-mono text-[10px] text-muted">
          Generated: 2026-06-27 14:32 UTC
        </p>
      </div>
    </div>
  );
}
