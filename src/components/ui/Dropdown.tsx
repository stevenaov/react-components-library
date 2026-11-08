import { useEffect, useRef, useState, type ReactNode } from "react";

export interface DropdownProps {
  trigger: ReactNode;
  children: ReactNode;
}

export function Dropdown({ trigger, children }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="lu-dropdown" ref={ref}>
      <div onClick={() => setOpen((o) => !o)} style={{ display: "inline-flex" }}>
        {trigger}
      </div>
      {open && <div className="lu-dropdown__menu" onClick={() => setOpen(false)}>{children}</div>}
    </div>
  );
}

export function DropdownItem({
  children,
  danger = false,
  onClick,
}: {
  children: ReactNode;
  danger?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      className={`lu-dropdown__item ${danger ? "lu-dropdown__item--danger" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export const DropdownSeparator = () => <div className="lu-dropdown__sep" />;
