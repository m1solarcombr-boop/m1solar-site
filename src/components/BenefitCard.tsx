import { ReactNode } from "react";

interface BenefitCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export function BenefitCard({ title, description, icon }: BenefitCardProps) {
  return (
    <div className="card p-6 flex flex-col gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-yellow/20 text-brand-dark text-lg font-semibold">
        {icon}
      </div>
      <div className="space-y-1">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
