import { BenefitCard } from "@/components/BenefitCard";
import { Button } from "@/components/Button";
import { ProjectCard } from "@/components/ProjectCard";
import { ServiceCard } from "@/components/ServiceCard";
import { LightningBoltIcon, ShieldCheckIcon, SunIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const benefits = [
  {
    title: "Economia imediata",
    description: "Reduza até 80% da sua conta de energia com sistemas dimensionados para sua realidade.",
    icon: <LightningBoltIcon className="h-6 w-6" />
  },
  {
    title: "Atendimento local",
    description: "Equipe técnica no Ceará, pronta para visitas rápidas e suporte de perto.",
    icon: <ShieldCheckIcon className="h-6 w-6" />
  },
  {
    title: "Sustentabilidade",
    description: "Energia limpa para valorizar seu imóvel e contribuir com o futuro do Nordeste.",
    icon: <SunIcon className="h-6 w-6" />
  },
  {
    title: "Engenharia completa",
    description: "Projeto, instalação e monitoramento contínuo para máxima geração.",
    icon: <WrenchScrewdriverIcon className="h-6 w-6" />
  }
];

const steps = [
  {
    title: "Simulação online",
    description: "Conte para a gente sua média de conta ou consumo e receba a estimativa em poucos segundos."
  },
  {
    title: "Visita técnica",
    description: "Verificamos telhado ou área disponível e ajustamos o projeto para sua demanda."
  },
  {
    title: "Instalação profissional",
    description: "Equipe especializada monta e conecta o sistema com segurança e agilidade."
  },
  {
    title: "Monitoramento",
    description: "Acompanhamos a geração e oferecemos suporte próximo no dia a dia."
  }
];

const services = [
  {
    title: "Sistemas On-Grid",
    description: "Projetos conectados à rede com máxima eficiência e melhor payback.",
    link: "/servicos"
  },
  {
    title: "Sistemas Off-Grid",
    description: "Autonomia energética para áreas remotas ou operações críticas.",
    link: "/servicos"
  },
  {
    title: "Usinas e GD2",
    description: "Estruturas de maior porte para geração distribuída e autoconsumo remoto.",
    link: "/servicos"
  }
];

const projects = [
  {
    name: "Residencial Parque do Cocó",
    type: "Residencial",
    location: "Fortaleza - CE",
    capacity: "8,5 kWp",
    result: "Economia estimada de 78% na conta de energia."
  },
  {
    name: "Comercial Centro",
    type: "Comercial",
    location: "Juazeiro do Norte - CE",
    capacity: "25 kWp",
    result: "Redução média de R$ 5.000/mês com energia solar."
  },
  {
    name: "Chácara Lagoa Azul",
    type: "Rural",
    location: "Quixadá - CE",
    capacity: "15 kWp",
    result: "Autonomia energética para bombeamento e irrigação."
  }
];

export default function HomePage() {
  return (
    <div className="space-y-20 pb-20">
      <section className="gradient-bg relative overflow-hidden border-b border-slate-100">
        <div className="section-container grid gap-12 py-14 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/30 px-4 py-2 text-xs font-semibold text-brand-dark">
              Energia solar com atendimento local
            </span>
            <h1 className="text-4xl font-bold leading-tight text-brand-dark sm:text-5xl">
              Energia solar para economizar na sua conta de luz
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed">
              Projetos completos de energia solar para residências, comércios, indústrias e área rural. Atendimento rápido no Ceará
              e Nordeste, com engenharia própria e foco total em resultado.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/simulacao">Fazer simulação agora</Button>
              <Button
                href="https://wa.me/5585XXXXXXXX?text=M1Solar%20Quero%20uma%20simulacao"
                variant="secondary"
              >
                Falar com especialista
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {["Até 80% de economia", "Projetos sob medida", "Instalação rápida"].map((item) => (
                <div key={item} className="card p-4 text-sm font-semibold text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-brand-green/20 to-brand-yellow/30 blur-3xl" aria-hidden />
            <div className="relative card overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80"
                alt="Usina solar"
                width={900}
                height={650}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-container space-y-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-brand-dark">Passo a passo</p>
            <h2 className="text-2xl font-bold text-slate-900">Como funciona</h2>
            <p className="text-sm text-slate-600">Do cálculo ao monitoramento, acompanhamos todo o ciclo.</p>
          </div>
          <Button href="/simulacao" variant="secondary">
            Começar simulação
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.title} className="card p-5 space-y-2">
              <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container space-y-10">
        <div className="space-y-2">
          <p className="text-sm font-semibold text-brand-dark">Por que M1Solar</p>
          <h2 className="text-2xl font-bold text-slate-900">Benefícios da energia solar</h2>
          <p className="text-sm text-slate-600">Economia, sustentabilidade e suporte técnico dedicado.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.title} {...benefit} />
          ))}
        </div>
      </section>

      <section className="section-container space-y-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-brand-dark">O que fazemos</p>
            <h2 className="text-2xl font-bold text-slate-900">Serviços completos</h2>
            <p className="text-sm text-slate-600">Projetos para todo tipo de cliente e necessidade.</p>
          </div>
          <Button href="/servicos">Ver todos os serviços</Button>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="section-container space-y-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-brand-dark">Resultados</p>
            <h2 className="text-2xl font-bold text-slate-900">Projetos em destaque</h2>
            <p className="text-sm text-slate-600">Alguns cases entregues pela equipe M1Solar.</p>
          </div>
          <Button href="/projetos" variant="secondary">
            Ver mais projetos
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </section>

      <section className="section-container">
        <div className="card flex flex-col items-center gap-4 bg-gradient-to-r from-brand-yellow/20 via-white to-brand-orange/20 p-10 text-center">
          <h2 className="text-2xl font-bold text-slate-900">Pronto para reduzir a conta de energia?</h2>
          <p className="max-w-2xl text-sm text-slate-700">
            Faça agora uma simulação rápida e descubra quanto sua casa, empresa ou propriedade rural pode economizar com a M1Solar.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/simulacao">Simular economia</Button>
            <Button href="https://wa.me/5585XXXXXXXX?text=M1Solar%20Quero%20uma%20simulacao" variant="secondary">
              Falar com especialista
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
