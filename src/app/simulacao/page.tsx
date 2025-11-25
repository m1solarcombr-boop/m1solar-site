"use client";

import { Button } from "@/components/Button";
import { FormField } from "@/components/FormField";
import { CalculatorIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import { useMemo, useState } from "react";

type InputMode = "bill" | "consumption";

type SimulationResult = {
  estimatedKwp: number;
  estimatedGeneration: number;
  estimatedSaving: number;
  investmentRange: [number, number];
  paybackYears: number;
};

const PRODUCTION_FACTOR = 130; // kWh/mês gerados por kWp
const PRICE_PER_KWP_MIN = 4500;
const PRICE_PER_KWP_MAX = 5500;
const SAVING_FACTOR = 0.8; // % médio de redução na conta

export default function SimulationPage() {
  const [clientType, setClientType] = useState("Residencial");
  const [location, setLocation] = useState("Fortaleza - CE");
  const [inputMode, setInputMode] = useState<InputMode>("bill");
  const [billValue, setBillValue] = useState(450);
  const [consumption, setConsumption] = useState(0);
  const [tariff, setTariff] = useState(0.9);
  const [roofType, setRoofType] = useState("Telhado cerâmico");
  const [result, setResult] = useState<SimulationResult | null>(null);
  const [contactMessage, setContactMessage] = useState<string | null>(null);

  const calculatedConsumption = useMemo(() => {
    if (inputMode === "bill") return billValue / tariff;
    return consumption;
  }, [billValue, consumption, inputMode, tariff]);

  const handleCalculate = () => {
    if (calculatedConsumption <= 0) return;

    const estimatedKwp = calculatedConsumption / PRODUCTION_FACTOR;
    const estimatedGeneration = estimatedKwp * PRODUCTION_FACTOR;
    const investmentMin = estimatedKwp * PRICE_PER_KWP_MIN;
    const investmentMax = estimatedKwp * PRICE_PER_KWP_MAX;
    const averageInvestment = (investmentMin + investmentMax) / 2;
    const billBase = inputMode === "bill" ? billValue : calculatedConsumption * tariff;
    const estimatedSaving = billBase * SAVING_FACTOR;
    const paybackYears = averageInvestment / (estimatedSaving * 12);

    setResult({
      estimatedKwp,
      estimatedGeneration,
      estimatedSaving,
      investmentRange: [investmentMin, investmentMax],
      paybackYears
    });
  };

  const handleLead = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();

    setContactMessage(
      `Obrigado, ${name || "cliente"}! Recebemos seu contato (${phone}${email ? ` | ${email}` : ""}). Em breve retornaremos.`
    );
  };

  const whatsappLink = useMemo(() => {
    if (!result) return "https://wa.me/5585XXXXXXXX?text=M1Solar%20Quero%20uma%20simulacao";
    const text = encodeURIComponent(
      `Quero um orçamento detalhado da M1Solar.\nSistema estimado: ${result.estimatedKwp.toFixed(
        2
      )} kWp\nLocal: ${location}\nTipo: ${clientType}`
    );
    return `https://wa.me/5585XXXXXXXX?text=${text}`;
  }, [clientType, location, result]);

  return (
    <div className="section-container py-12 space-y-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <p className="text-sm font-semibold text-brand-dark">Simule agora</p>
          <h1 className="text-3xl font-bold text-slate-900">Calcule a economia com energia solar</h1>
          <p className="text-sm text-slate-600">
            Preencha os dados e veja uma estimativa instantânea de tamanho do sistema, investimento e economia.
          </p>
        </div>
        <Button href={whatsappLink} variant="secondary">
          Falar com especialista
        </Button>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="card p-6 space-y-5">
          <div className="flex items-center gap-2 text-slate-800">
            <CalculatorIcon className="h-5 w-5" />
            <h2 className="text-lg font-semibold">Dados para simulação</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <FormField label="Tipo de cliente" htmlFor="clientType">
              <select id="clientType" value={clientType} onChange={(e) => setClientType(e.target.value)}>
                {["Residencial", "Comercial", "Industrial", "Rural"].map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </FormField>
            <FormField label="Localidade" htmlFor="location">
              <input
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Cidade/Estado"
              />
            </FormField>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <FormField label="Modo de entrada">
              <div className="flex gap-3 text-sm font-semibold text-slate-700">
                <button
                  type="button"
                  className={`flex-1 rounded-xl border px-3 py-2 ${
                    inputMode === "bill" ? "border-brand-orange bg-brand-yellow/20" : "border-slate-200"
                  }`}
                  onClick={() => setInputMode("bill")}
                >
                  Conta (R$)
                </button>
                <button
                  type="button"
                  className={`flex-1 rounded-xl border px-3 py-2 ${
                    inputMode === "consumption" ? "border-brand-orange bg-brand-yellow/20" : "border-slate-200"
                  }`}
                  onClick={() => setInputMode("consumption")}
                >
                  Consumo (kWh)
                </button>
              </div>
            </FormField>
            <FormField label={inputMode === "bill" ? "Conta média (R$)" : "Consumo mensal (kWh)"}>
              <input
                type="number"
                min={0}
                value={inputMode === "bill" ? billValue : consumption}
                onChange={(e) =>
                  inputMode === "bill" ? setBillValue(Number(e.target.value)) : setConsumption(Number(e.target.value))
                }
              />
            </FormField>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <FormField label="Tarifa estimada (R$/kWh)" helper="Ajuste para sua região se necessário.">
              <input type="number" min={0} step={0.01} value={tariff} onChange={(e) => setTariff(Number(e.target.value))} />
            </FormField>
            <FormField label="Tipo de telhado/estrutura">
              <select value={roofType} onChange={(e) => setRoofType(e.target.value)}>
                {"Telhado cerâmico,Telhado metálico,Estrutura solo".split(",").map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </FormField>
          </div>

          <div className="pt-2">
            <Button type="button" onClick={handleCalculate} className="w-full justify-center">
              Calcular economia
            </Button>
          </div>

          <p className="text-xs text-slate-500">
            *Valores estimados com fatores médios regionais. Consulte nossa equipe para um projeto detalhado.
          </p>
        </div>

        <div className="card p-6 space-y-6 bg-slate-50/60">
          {result ? (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-brand-dark">
                <CheckCircleIcon className="h-6 w-6" />
                <h2 className="text-lg font-semibold">Resultado estimado</h2>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <p className="text-xs text-slate-500">Tamanho do sistema</p>
                  <p className="text-xl font-semibold">{result.estimatedKwp.toFixed(2)} kWp</p>
                </div>
                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <p className="text-xs text-slate-500">Geração mensal</p>
                  <p className="text-xl font-semibold">{result.estimatedGeneration.toFixed(0)} kWh/mês</p>
                </div>
                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <p className="text-xs text-slate-500">Economia estimada</p>
                  <p className="text-xl font-semibold">R$ {result.estimatedSaving.toFixed(0)}/mês</p>
                </div>
                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <p className="text-xs text-slate-500">Payback aproximado</p>
                  <p className="text-xl font-semibold">{result.paybackYears.toFixed(1)} anos</p>
                </div>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm">
                <p className="text-xs text-slate-500">Investimento estimado</p>
                <p className="text-lg font-semibold">
                  R$ {result.investmentRange[0].toLocaleString("pt-BR", { maximumFractionDigits: 0 })} - R$
                  {" "}
                  {result.investmentRange[1].toLocaleString("pt-BR", { maximumFractionDigits: 0 })}
                </p>
                <p className="text-xs text-slate-500">
                  Considerando {roofType} em {location}. Ajuste os valores conforme necessidade.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-slate-600">
              Preencha os dados e clique em "Calcular economia" para ver a estimativa.
            </div>
          )}

          <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-slate-900">Gostou da estimativa?</h3>
            <p className="text-sm text-slate-600">
              Deixe seu contato para receber um orçamento detalhado ou clique para falar direto no WhatsApp.
            </p>
            <form className="grid gap-4" onSubmit={handleLead}>
              <FormField label="Nome" htmlFor="name">
                <input id="name" name="name" required placeholder="Seu nome" />
              </FormField>
              <div className="grid gap-4 md:grid-cols-2">
                <FormField label="Telefone/WhatsApp" htmlFor="phone">
                  <input id="phone" name="phone" required placeholder="(85) 9 9999-9999" />
                </FormField>
                <FormField label="E-mail" htmlFor="email" helper="Opcional">
                  <input id="email" name="email" type="email" placeholder="voce@email.com" />
                </FormField>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button type="submit" className="w-full justify-center sm:w-auto">
                  Receber orçamento detalhado
                </Button>
                <Button href={whatsappLink} variant="secondary" className="w-full justify-center sm:w-auto">
                  Chamar no WhatsApp
                </Button>
              </div>
            </form>
            {contactMessage ? <p className="text-sm text-brand-dark">{contactMessage}</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
