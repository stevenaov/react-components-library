import type { ReactNode } from "react";

export interface SpinnerProps {
  size?: "md" | "lg";
  label?: ReactNode;
}

export function Spinner({ size = "md", label }: SpinnerProps) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
      <span
        className={`lu-spinner ${size === "lg" ? "lu-spinner--lg" : ""}`}
        role="status"
        aria-label="cargando"
      />
      {label && (
        <span style={{ fontSize: "0.875rem", color: "var(--text-2)" }}>{label}</span>
      )}
    </span>
  );
}
