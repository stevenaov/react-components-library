import { useEffect, useState } from "react";

export interface ProgressProps {
  value: number;
  label?: string;
  showValue?: boolean;
}

export function Progress({ value, label, showValue = true }: ProgressProps) {
  const clamped = Math.min(100, Math.max(0, value));
  return (
    <div className="lu-progress">
      {(label || showValue) && (
        <div className="lu-progress__label">
          {label && <span>{label}</span>}
          {showValue && <span>{Math.round(clamped)}%</span>}
        </div>
      )}
      <div
        className="lu-progress__track"
        role="progressbar"
        aria-valuenow={Math.round(clamped)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="lu-progress__fill" style={{ width: `${clamped}%` }} />
      </div>
    </div>
  );
}

export function useAnimatedProgress(target: number, durationMs = 1200) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs]);
  return value;
}
