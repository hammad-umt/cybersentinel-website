import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  size?: number;
  showLabel?: boolean;
  className?: string;
  labelClassName?: string;
};

export function Logo({
  size = 32,
  showLabel = false,
  className,
  labelClassName,
}: LogoProps) {
  return (
    <span className={cn("inline-flex min-w-0 items-center gap-2 sm:gap-2.5", className)}>
      <Image
        src="/app-icon.png"
        alt="CyberSentinel"
        width={size}
        height={size}
        className="shrink-0 rounded-md"
        priority
      />
      {showLabel ? (
        <span
          className={cn(
            "truncate text-sm font-semibold tracking-tight text-foreground",
            labelClassName
          )}
        >
          CyberSentinel
        </span>
      ) : null}
    </span>
  );
}
