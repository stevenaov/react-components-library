import { useEffect, useRef, useState } from "react";

export interface SelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function Select({ options, value, onChange, placeholder = "Selecciona…" }: SelectProps) {
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
    <div className={`lu-select ${open ? "lu-select--open" : ""}`} ref={ref}>
      <button
        type="button"
        className="lu-select__trigger"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {value || <span style={{ color: "var(--text-3)" }}>{placeholder}</span>}
        <svg className="lu-select__chevron" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <ul className="lu-select__menu" role="listbox">
          {options.map((opt) => (
            <li
              key={opt}
              className={`lu-select__option ${opt === value ? "lu-select__option--selected" : ""}`}
              role="option"
              aria-selected={opt === value}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
            >
              {opt}
              {opt === value && <span style={{ color: "var(--accent)" }}>✓</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
