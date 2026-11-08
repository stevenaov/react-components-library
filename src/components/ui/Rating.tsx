import { useState } from "react";

export interface RatingProps {
  max?: number;
  value: number;
  onChange?: (value: number) => void;
}

function Star({ filled, onClick, hover, onHover }: {
  filled: boolean;
  onClick: () => void;
  hover: () => void;
  onHover: (v: number | null) => void;
}) {
  return (
    <button
      type="button"
      className={`lu-rating__star ${filled ? "lu-rating__star--on" : ""}`}
      onClick={onClick}
      onMouseEnter={hover}
      onMouseLeave={() => onHover(null)}
      aria-label={`${filled ? "quitar" : "poner"} estrella`}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
        <path d="M12 2.6l2.9 6 6.6.9-4.8 4.6 1.2 6.5-5.9-3.2-5.9 3.2 1.2-6.5L2.5 9.5l6.6-.9 2.9-6z" />
      </svg>
    </button>
  );
}

export function Rating({ max = 5, value, onChange }: RatingProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  const shown = hovered ?? value;
  return (
    <div className="lu-rating" onMouseLeave={() => setHovered(null)} role="group" aria-label="valoración">
      {Array.from({ length: max }, (_, i) => (
        <Star
          key={i}
          filled={i < shown}
          onClick={() => onChange?.(i + 1)}
          hover={() => setHovered(i + 1)}
          onHover={setHovered}
        />
      ))}
    </div>
  );
}
