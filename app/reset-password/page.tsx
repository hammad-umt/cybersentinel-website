"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Copy, ExternalLink, Loader2, ShieldCheck } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

function ResetPasswordContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token")?.trim() ?? "";
  const [copied, setCopied] = useState(false);
  const [openedApp, setOpenedApp] = useState(false);

  const deepLink =
    token.length > 0
      ? `cybersentinel://reset-password?token=${encodeURIComponent(token)}`
      : null;

  useEffect(() => {
    if (!deepLink || openedApp) return;
    setOpenedApp(true);
    window.location.href = deepLink;
  }, [deepLink, openedApp]);

  async function copyToken() {
    if (!token) return;
    await navigator.clipboard.writeText(token);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="section-container flex min-h-[100dvh] flex-col items-center justify-center py-16">
      <Link href="/" className="mb-10">
        <Logo size={48} showLabel />
      </Link>

      <div className="w-full max-w-lg rounded-xl border border-border bg-surface/80 p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-accent/30 bg-accent/10">
            <ShieldCheck className="h-5 w-5 text-accent" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-foreground">Reset your password</h1>
            <p className="text-sm text-muted">CyberSentinel desktop app</p>
          </div>
        </div>

        {!token ? (
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
            <p>This link is missing a reset token. Request a new link from the app:</p>
            <ol className="list-decimal space-y-2 pl-5">
              <li>Open CyberSentinel on your PC</li>
              <li>Go to Sign in → Forgot password</li>
              <li>Check your email for a fresh reset link</li>
            </ol>
            <Button href="/#download" variant="primary" className="mt-4 w-full">
              Download CyberSentinel
            </Button>
          </div>
        ) : (
          <div className="mt-6 space-y-5">
            <p className="text-sm leading-relaxed text-muted">
              We are opening the CyberSentinel desktop app. If nothing happens, use the
              button below or paste the token manually inside the app.
            </p>

            {deepLink ? (
              <Button href={deepLink} variant="primary" className="w-full">
                <ExternalLink className="h-4 w-4" />
                Open in CyberSentinel
              </Button>
            ) : null}

            <div className="rounded-lg border border-border bg-background/50 p-4">
              <p className="font-mono text-[10px] uppercase tracking-wider text-accent">
                Manual fallback
              </p>
              <p className="mt-2 text-sm text-muted">
                In the app: Sign in → Reset password → paste this token
              </p>
              <div className="mt-3 flex items-center gap-2">
                <code className="flex-1 truncate rounded-md border border-border bg-surface px-3 py-2 font-mono text-xs text-foreground">
                  {token}
                </code>
                <button
                  type="button"
                  onClick={copyToken}
                  className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-lg border border-border-strong px-3 text-xs text-muted transition-colors hover:text-foreground"
                >
                  <Copy className="h-3.5 w-3.5" />
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
            </div>
          </div>
        )}

        <p className="mt-6 text-center text-xs text-muted/80">
          Need the app?{" "}
          <Link href="/#download" className="text-accent hover:underline">
            Download for Windows
          </Link>
        </p>
      </div>

      <p className="mt-8 font-mono text-xs text-muted/60">{SITE.university}</p>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <main className="relative min-h-[100dvh] overflow-hidden bg-background">
      <div className="absolute inset-0 grid-bg" />
      <div className="noise-overlay absolute inset-0" />
      <Suspense
        fallback={
          <div className="flex min-h-[100dvh] items-center justify-center text-muted">
            <Loader2 className="h-6 w-6 animate-spin text-accent" />
          </div>
        }
      >
        <ResetPasswordContent />
      </Suspense>
    </main>
  );
}
