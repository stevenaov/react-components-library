import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  shine?: boolean;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  shine = false,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`lu-button lu-button--${variant} lu-button--${size} ${
        shine ? "lu-button__shine" : ""
      } ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
