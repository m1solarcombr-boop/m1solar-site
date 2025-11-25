import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    name: "Residencial Dunas",
    type: "Residencial",
    location: "Aquiraz - CE",
    capacity: "6,2 kWp",
    result: "Economia estimada de 75% na conta e valorização do imóvel."
  },
  {
    name: "Indústria Têxtil Nordeste",
    type: "Industrial",
    location: "Maracanaú - CE",
    capacity: "180 kWp",
    result: "Redução média de R$ 45 mil/mês em custos energéticos."
  },
  {
    name: "Fazenda Sertão Verde",
    type: "Rural",
    location: "Iguatu - CE",
    capacity: "32 kWp",
    result: "Autonomia para irrigação e refrigeração, com economia de 68%."
  },
  {
    name: "Supermercado Central",
    type: "Comercial",
    location: "Sobral - CE",
    capacity: "95 kWp",
    result: "Payback estimado em 3,8 anos com redução de pico contratual."
  }
];

export default function ProjectsPage() {
  return (
    <div className="section-container py-12 space-y-8">
      <div className="space-y-3">
        <p className="text-sm font-semibold text-brand-dark">Projetos</p>
        <h1 className="text-3xl font-bold text-slate-900">Cases entregues pela M1Solar</h1>
        <p className="text-sm text-slate-600 max-w-3xl">
          Confira alguns projetos executados no Ceará e Nordeste. Ajuste este conteúdo com seus cases reais quando quiser.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
}
