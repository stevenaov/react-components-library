import { useId, type ReactNode } from "react";

export interface RadioProps {
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  label?: ReactNode;
  name?: string;
}

export function Radio({ value, checked, onChange, label, name }: RadioProps) {
  const id = useId();
  return (
    <label className={`lu-radio ${checked ? "lu-radio--checked" : ""}`} htmlFor={id}>
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        style={{ position: "absolute", opacity: 0, width: 0, height: 0 }}
      />
      <span className="lu-radio__circle" aria-hidden="true" />
      {label}
    </label>
  );
}

export interface RadioGroupProps {
  options: { value: string; label: ReactNode }[];
  value: string;
  onChange: (value: string) => void;
  name?: string;
  style?: React.CSSProperties;
}

export function RadioGroup({ options, value, onChange, name, style }: RadioGroupProps) {
  return (
    <div role="radiogroup" style={{ display: "flex", gap: 20, flexWrap: "wrap", ...style }}>
      {options.map((opt) => (
        <Radio
          key={opt.value}
          name={name}
          value={opt.value}
          checked={value === opt.value}
          onChange={onChange}
          label={opt.label}
        />
      ))}
    </div>
  );
}
