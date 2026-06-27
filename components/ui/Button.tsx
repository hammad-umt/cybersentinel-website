import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-background hover:bg-accent/90 shadow-[0_0_24px_-4px_rgba(34,211,238,0.4)]",
  secondary:
    "bg-surface-elevated text-foreground border border-border-strong hover:border-accent/40 hover:bg-white/[0.04]",
  ghost: "text-muted hover:text-foreground hover:bg-white/[0.04]",
  outline:
    "border border-border-strong text-foreground hover:border-accent/50 hover:text-accent",
};

const baseClasses =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:opacity-50";

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type LinkProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

export function Button({
  variant = "primary",
  className,
  children,
  href,
  ...rest
}: ButtonProps | LinkProps) {
  const classes = cn(baseClasses, variants[variant], className);

  if (href !== undefined) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...(rest as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
