import { Button } from "./Button";

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
}

export function ServiceCard({ title, description, link }: ServiceCardProps) {
  return (
    <div className="card h-full p-6 flex flex-col justify-between gap-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
      </div>
      <Button href={link} variant="secondary" className="self-start">
        Quero saber mais
      </Button>
    </div>
  );
}
