import { cn } from "@/utils";
import type { ClassValue } from "clsx";
import type { PropsWithChildren } from "react";

export function SectionTitle({
  children,
  className,
}: PropsWithChildren<{
  className?: ClassValue;
}>) {
  return (
    <p className={cn("text-primary font-semibold text-2xl", className)}>
      {children}
    </p>
  );
}
