import { ReactNode } from "react";

interface FormFieldProps {
  label: string;
  htmlFor?: string;
  helper?: string;
  children: ReactNode;
}

export function FormField({ label, htmlFor, helper, children }: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={htmlFor}>{label}</label>
      {children}
      {helper ? <p className="helper-text">{helper}</p> : null}
    </div>
  );
}
