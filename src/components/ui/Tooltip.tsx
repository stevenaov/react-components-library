import { useState, type ReactNode } from "react";

export interface TooltipProps {
  label: string;
  children: ReactNode;
}

export function Tooltip({ label, children }: TooltipProps) {
  const [visible, setVisible] = useState(false);
  return (
    <span
      className={`lu-tooltip ${visible ? "lu-tooltip--visible" : ""}`}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      <span className="lu-tooltip__bubble" role="tooltip">
        {label}
      </span>
    </span>
  );
}
