export const SITE = {
  name: "CyberSentinel",
  tagline: "AI-Powered Threat Detection for Smarter Cyber Defense",
  description:
    "A unified desktop security platform that correlates packet traces, firewall logs, and threat intelligence into actionable alerts — so analysts spend less time triaging noise and more time responding to real incidents.",
  url: "https://cybersentinel.dev",
  github: "https://github.com/cybersentinel",
  docs: "https://github.com/cybersentinel/docs",
  email: "contact@cybersentinel.dev",
  university: "Final Year Project — Software Engineering - UMT",
} as const;

export const DOWNLOADS = {
  windows: {
    label: "Windows",
    version: "1.0.0",
    size: "84 MB",
    href: "/downloads/CyberSentinel-Setup-1.0.0-win64.exe",
    requirements: "Windows 10/11 (64-bit), 4 GB RAM, 500 MB disk",
  },
  linux: {
    label: "Linux",
    version: "1.0.0",
    size: "76 MB",
    href: "/downloads/CyberSentinel-1.0.0-linux-x64.AppImage",
    requirements: "Ubuntu 20.04+ or equivalent, 4 GB RAM, 500 MB disk",
  },
} as const;

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Architecture", href: "#architecture" },
  { label: "Preview", href: "#preview" },
  { label: "Download", href: "#download" },
  { label: "FAQ", href: "#faq" },
] as const;

export const PROBLEMS = [
  {
    stat: "4.8M+",
    label: "new malware samples per year",
    detail:
      "Attack surfaces expand faster than most teams can instrument them. Static rules and siloed tools leave gaps that sophisticated threats exploit quietly.",
  },
  {
    stat: "12+",
    label: "security tools in a typical SOC",
    detail:
      "Analysts jump between packet captures, firewall consoles, and reputation lookups — losing context with every tab switch and delaying incident response.",
  },
  {
    stat: "67%",
    label: "of alerts are false positives",
    detail:
      "Without intelligent prioritization, critical signals get buried under noise. Teams burn out chasing ghosts while real intrusions slip through.",
  },
] as const;

export const FEATURES = [
  {
    title: "Packet Tracing & Traffic Monitoring",
    description:
      "Capture and inspect live network flows with protocol-level detail. Spot anomalous patterns — unusual ports, beaconing, data exfiltration — as they happen.",
    icon: "network" as const,
  },
  {
    title: "Firewall Log Analysis",
    description:
      "Ingest and parse firewall logs automatically. ML models flag deviations from baseline behavior so you catch policy violations before they escalate.",
    icon: "shield" as const,
  },
  {
    title: "IP Reputation Checking",
    description:
      "Cross-reference suspicious IPs against curated threat feeds and historical data. Block known bad actors before they reach your endpoints.",
    icon: "globe" as const,
  },
  {
    title: "VirusTotal Integration",
    description:
      "Submit files and IPs directly to VirusTotal from the dashboard. Results fold into your threat score without leaving the application.",
    icon: "scan" as const,
  },
  {
    title: "AI Threat Scoring",
    description:
      "A composite risk score ranks every event by severity. TensorFlow and scikit-learn models trained on labeled attack data drive prioritization.",
    icon: "brain" as const,
  },
  {
    title: "Centralized Dashboard",
    description:
      "One Flutter desktop interface for alerts, logs, scans, and reports. Built for cross-platform use on Windows and Linux workstations.",
    icon: "layout" as const,
  },
  {
    title: "Real-Time Monitoring",
    description:
      "WebSocket-backed live feeds push new threats to your screen the moment they're detected. Configure alert thresholds per severity level.",
    icon: "activity" as const,
  },
  {
    title: "Exportable Reports",
    description:
      "Generate PDF and CSV security reports for the incident timeline, affected assets, and recommended remediation steps for stakeholders.",
    icon: "file" as const,
  },
] as const;

export const TECH_STACK = [
  {
    layer: "Client",
    items: ["Flutter", "Dart", "Provider"],
    description: "Cross-platform desktop UI with native performance",
  },
  {
    layer: "API",
    items: ["FastAPI", "Flask", "REST", "WebSockets"],
    description: "Async endpoints for ingestion, scoring, and live alerts",
  },
  {
    layer: "ML Pipeline",
    items: ["TensorFlow", "scikit-learn", "NumPy", "Pandas"],
    description: "Anomaly detection and threat classification models",
  },
  {
    layer: "Data & Security",
    items: ["PostgreSQL", "Supabase", "AES-256", "Threat Intel APIs"],
    description: "Encrypted storage with real-time sync and external feeds",
  },
] as const;

export const ARCHITECTURE_FLOW = [
  { step: "Ingest", detail: "Packets, firewall logs, file & IP inputs" },
  { step: "Analyze", detail: "ML models + IP reputation + VirusTotal" },
  { step: "Score", detail: "Composite AI threat rating per event" },
  { step: "Alert", detail: "Real-time push to desktop dashboard" },
  { step: "Report", detail: "Exportable security reports" },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Which operating systems are supported?",
    answer:
      "CyberSentinel is available as a cross-platform desktop app for Windows 10/11 (64-bit) and Linux (Ubuntu 20.04+ or AppImage-compatible distros).",
  },
  {
    question: "Do I need an internet connection?",
    answer:
      "Yes. An active connection is required for IP reputation checks, VirusTotal scanning, and threat intelligence feed updates.",
  },
  {
    question: "How does the AI threat scoring work?",
    answer:
      "Events pass through TensorFlow and scikit-learn models trained on labeled network attack datasets. Features like source IP reputation, payload patterns, and temporal behavior feed into a composite risk score that drives alert priority.",
  },
  {
    question: "Is my data encrypted?",
    answer:
      "Yes. Sensitive logs and credentials stored locally and in Supabase are protected with AES-256 encryption. API keys are handled securely on your machine.",
  },
  {
    question: "What are the minimum system requirements?",
    answer:
      "4 GB RAM, 500 MB free disk space, and a 64-bit processor. For heavy packet capture workloads, 8 GB RAM is recommended.",
  },
] as const;

export const PREVIEW_TABS = [
  { id: "dashboard", label: "Threat Dashboard" },
  { id: "packets", label: "Packet Monitor" },
  { id: "firewall", label: "Firewall Analysis" },
  { id: "reports", label: "Threat Reports" },
] as const;
