import { Button } from "@/components/Button";
import { ServiceCard } from "@/components/ServiceCard";

const services = [
  {
    title: "Sistemas On-Grid",
    description: "Projetos conectados à rede, com aprovação junto à distribuidora e monitoramento em tempo real.",
    link: "/contato"
  },
  {
    title: "Sistemas Off-Grid",
    description: "Soluções autônomas com bancos de baterias para locais remotos ou operações críticas.",
    link: "/contato"
  },
  {
    title: "Usinas de geração distribuída (GD2)",
    description: "Desenvolvimento, implantação e operação de usinas para autoconsumo remoto e geração de créditos.",
    link: "/contato"
  },
  {
    title: "Manutenção e limpeza",
    description: "Planos de manutenção preventiva, corretiva e limpeza profissional para máxima performance.",
    link: "/contato"
  },
  {
    title: "Projetos e consultoria",
    description: "Engenharia especializada para dimensionamento, laudos e suporte em licenciamento.",
    link: "/contato"
  }
];

export default function ServicesPage() {
  return (
    <div className="section-container py-12 space-y-10">
      <div className="space-y-3">
        <p className="text-sm font-semibold text-brand-dark">Nossos serviços</p>
        <h1 className="text-3xl font-bold text-slate-900">Soluções completas em energia solar</h1>
        <p className="text-sm text-slate-600 max-w-3xl">
          Da residência à usina, a M1Solar entrega projetos sob medida, com engenharia própria e suporte próximo no Ceará e em
          todo o Nordeste.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>

      <div className="card flex flex-col gap-3 p-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Precisa de um projeto específico?</h2>
          <p className="text-sm text-slate-600">Fale com nossa equipe e receba um diagnóstico rápido.</p>
        </div>
        <div className="flex gap-3">
          <Button href="/contato">Falar com a equipe</Button>
          <Button href="https://wa.me/5585XXXXXXXX?text=M1Solar%20Quero%20saber%20mais" variant="secondary">
            Chamar no WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}
