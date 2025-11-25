interface ProjectCardProps {
  name: string;
  type: string;
  location: string;
  capacity: string;
  result: string;
}

export function ProjectCard({ name, type, location, capacity, result }: ProjectCardProps) {
  return (
    <div className="card p-5 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
        <span className="rounded-full bg-brand-green/15 px-3 py-1 text-xs font-semibold text-brand-dark">{type}</span>
      </div>
      <p className="text-sm text-slate-600">{location}</p>
      <p className="text-sm font-semibold text-slate-800">Potência: {capacity}</p>
      <p className="text-sm text-slate-600">{result}</p>
    </div>
  );
}
