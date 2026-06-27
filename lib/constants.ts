export const SITE = {
  name: "CyberSentinel",
  tagline: "AI-Powered Threat Detection for Smarter Cyber Defense",
  description:
    "A unified desktop security platform that correlates packet traces, firewall logs, and threat intelligence into actionable alerts — so analysts spend less time triaging noise and more time responding to real incidents.",
  url: "https://cybersentinel.dev",
  github: "https://github.com/hammad-umt/cybersentinel",
  websiteRepo: "https://github.com/hammad-umt/cybersentinel-website",
  docs: "https://github.com/hammad-umt/cybersentinel/blob/backend/packaging/README.md",
  email: "hammadatcybersentinal@gmail.com",
  university: "Final Year Project — Software Engineering - UMT",
} as const;

/** Served from public/downloads/ — direct file download, not GitHub redirect. */
export const DOWNLOADS = {
  windows: {
    label: "Windows",
    version: "1.0.0",
    size: "196 MB",
    href: "/downloads/CyberSentinel-Setup.exe",
    fileName: "CyberSentinel-Setup.exe",
    requirements: "Windows 10/11 (64-bit), Administrator for install, 4 GB RAM, 500 MB disk",
    available: true,
  },
  linux: {
    label: "Linux",
    version: "1.0.0",
    size: "Coming soon",
    href: "#download",
    requirements: "Ubuntu 20.04+ (AppImage), libpcap, 4 GB RAM, 500 MB disk",
    available: false,
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
      "A composite risk score ranks every event by severity. scikit-learn models trained on labeled attack data drive prioritization.",
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
    layer: "Engine",
    items: ["FastAPI", "PyInstaller", "REST", "WebSockets"],
    description: "Local backend auto-started by the desktop app on install",
  },
  {
    layer: "ML Pipeline",
    items: ["scikit-learn", "NumPy", "Pandas", "imbalanced-learn"],
    description: "Anomaly detection and threat classification models",
  },
  {
    layer: "Data & Security",
    items: ["PostgreSQL", "Supabase", "JWT", "Threat Intel APIs"],
    description: "Cloud sync with per-user isolation and encrypted credentials",
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
      "CyberSentinel v1.0 ships as a Windows installer (Windows 10/11, 64-bit). Linux packaging is in progress. The app runs locally and connects to Supabase in the cloud.",
  },
  {
    question: "Do I need an internet connection?",
    answer:
      "Yes. An active connection is required for Supabase sync, IP reputation checks, VirusTotal scanning, and threat intelligence feed updates.",
  },
  {
    question: "How does password reset work?",
    answer:
      "Use Forgot password in the desktop app. The email link opens this website, which launches CyberSentinel via cybersentinel:// or lets you paste the token manually in the app.",
  },
  {
    question: "How does the AI threat scoring work?",
    answer:
      "Events pass through scikit-learn models trained on labeled network attack datasets. Features like source IP reputation, payload patterns, and temporal behavior feed into a composite risk score that drives alert priority.",
  },
  {
    question: "Is my data encrypted?",
    answer:
      "Yes. Credentials and session tokens use JWT. Data is stored in Supabase with per-user isolation. API keys in the bundled engine config stay on your machine.",
  },
  {
    question: "What are the minimum system requirements?",
    answer:
      "4 GB RAM, 500 MB free disk space, and a 64-bit processor. Administrator rights are required on Windows for Npcap packet capture. 8 GB RAM is recommended for heavy capture workloads.",
  },
] as const;

export const PREVIEW_TABS = [
  { id: "dashboard", label: "Threat Dashboard" },
  { id: "packets", label: "Packet Monitor" },
  { id: "firewall", label: "Firewall Analysis" },
  { id: "reports", label: "Threat Reports" },
] as const;
