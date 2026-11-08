import type { ReactNode } from "react";

export type BadgeTone = "neutral" | "accent" | "success" | "warning" | "danger";

export interface BadgeProps {
  tone?: BadgeTone;
  dot?: boolean;
  children: ReactNode;
}

export function Badge({ tone = "neutral", dot = false, children }: BadgeProps) {
  return (
    <span
      className={`lu-badge lu-badge--${tone} ${dot ? "lu-badge--dot" : ""}`}
    >
      {children}
    </span>
  );
}
