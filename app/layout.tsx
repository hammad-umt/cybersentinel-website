import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080c10",
};

export const metadata: Metadata = {
  title: "CyberSentinel — AI-Powered Threat Detection Platform",
  description:
    "CyberSentinel is a unified desktop security platform combining packet tracing, firewall log analysis, IP reputation checking, and AI threat scoring for smarter cyber defense.",
  keywords: [
    "cybersecurity",
    "threat detection",
    "AI security",
    "packet tracing",
    "firewall analysis",
    "Final Year Project",
  ],
  authors: [{ name: "CyberSentinel Team" }],
  openGraph: {
    title: "CyberSentinel — AI-Powered Threat Detection",
    description:
      "Intelligent threat detection and security monitoring in a single cross-platform desktop application.",
    type: "website",
    siteName: "CyberSentinel",
  },
  twitter: {
    card: "summary_large_image",
    title: "CyberSentinel — AI-Powered Threat Detection",
    description:
      "Unified desktop security platform with ML-driven threat scoring and real-time monitoring.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${jetbrains.variable} dark`}>
      <body className="min-h-screen min-h-[100dvh] bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
