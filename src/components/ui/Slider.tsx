import { useCallback, useRef, useState } from "react";

export interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
  label?: string;
}

export function Slider({
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  label,
}: SliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  const setFromClientX = useCallback(
    (clientX: number) => {
      const el = trackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
      const raw = min + ratio * (max - min);
      const snapped = Math.round(raw / step) * step;
      onChange(Math.min(max, Math.max(min, Number(snapped.toFixed(3)))));
    },
    [min, max, step, onChange]
  );

  const onPointerDown = (e: React.PointerEvent) => {
    setActive(true);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    setFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (active) setFromClientX(e.clientX);
  };
  const onPointerUp = () => setActive(false);

  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div className={`lu-slider ${active ? "lu-slider--active" : ""}`}>
      <div
        className="lu-slider__track"
        role="slider"
        tabIndex={0}
        aria-label={label ?? "slider"}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") onChange(Math.min(max, value + step));
          if (e.key === "ArrowLeft") onChange(Math.max(min, value - step));
        }}
        ref={trackRef}
      >
        <div className="lu-slider__fill" style={{ width: `${pct}%` }} />
        <div className="lu-slider__thumb" style={{ left: `${pct}%` }} />
      </div>
      <div className="lu-slider__value">
        {label ? `${label}: ` : ""}
        {value}
      </div>
    </div>
  );
}
