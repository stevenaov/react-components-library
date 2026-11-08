import { useId, type InputHTMLAttributes } from "react";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label?: string;
  error?: string;
  onChange?: (value: string) => void;
}

export function Input({ label, error, onChange, id, ...rest }: InputProps) {
  const autoId = useId();
  const inputId = id ?? autoId;
  return (
    <div className="lu-field">
      {label && (
        <label className="lu-field__label" htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className="lu-input"
        aria-invalid={error ? true : undefined}
        onChange={(e) => onChange?.(e.target.value)}
        {...rest}
      />
      {error && <span className="lu-field__error">{error}</span>}
    </div>
  );
}

export interface TextareaProps
  extends Omit<InputHTMLAttributes<HTMLTextAreaElement>, "onChange" | "value"> {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export function Textarea({ label, onChange, id, ...rest }: TextareaProps) {
  const autoId = useId();
  const areaId = id ?? autoId;
  return (
    <div className="lu-field">
      {label && (
        <label className="lu-field__label" htmlFor={areaId}>
          {label}
        </label>
      )}
      <textarea
        id={areaId}
        className="lu-textarea"
        onChange={(e) => onChange?.(e.target.value)}
        {...rest}
      />
    </div>
  );
}
