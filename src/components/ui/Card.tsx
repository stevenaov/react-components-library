import type { ReactNode } from "react";

export interface CardProps {
  hover?: boolean;
  glow?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode;
}

export function Card({ hover = false, glow = false, className = "", style, children }: CardProps) {
  return (
    <div
      style={style}
      className={`lu-card ${hover ? "lu-card--hover" : ""} ${
        glow ? "lu-card--glow" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function CardTitle({ children }: { children: ReactNode }) {
  return <h3 className="lu-card__title">{children}</h3>;
}

export function CardDescription({ children }: { children: ReactNode }) {
  return <p className="lu-card__desc">{children}</p>;
}
