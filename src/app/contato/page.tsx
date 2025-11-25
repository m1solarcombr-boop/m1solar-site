"use client";

import { Button } from "@/components/Button";
import { FormField } from "@/components/FormField";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function ContactPage() {
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    setMessage(`Obrigado, ${name || "cliente"}! Recebemos sua mensagem e retornaremos rapidamente.`);
  };

  return (
    <div className="section-container py-12 space-y-10">
      <div className="space-y-3">
        <p className="text-sm font-semibold text-brand-dark">Contato</p>
        <h1 className="text-3xl font-bold text-slate-900">Fale com a M1Solar</h1>
        <p className="text-sm text-slate-600 max-w-3xl">
          Preencha o formulário ou chame no WhatsApp. Nossa equipe técnica responde rápido para tirar dúvidas, enviar propostas e
          agendar visitas.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="card p-6 space-y-4 md:col-span-2">
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <FormField label="Nome" htmlFor="name">
              <input id="name" name="name" required placeholder="Seu nome" />
            </FormField>
            <div className="grid gap-4 md:grid-cols-2">
              <FormField label="E-mail" htmlFor="email">
                <input id="email" name="email" type="email" required placeholder="voce@email.com" />
              </FormField>
              <FormField label="Telefone/WhatsApp" htmlFor="phone">
                <input id="phone" name="phone" required placeholder="(85) 9 9999-9999" />
              </FormField>
            </div>
            <FormField label="Tipo de cliente" htmlFor="customerType">
              <select id="customerType" name="customerType">
                {["Residencial", "Comercial", "Industrial", "Rural"].map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </FormField>
            <FormField label="Mensagem" htmlFor="message">
              <textarea id="message" name="message" rows={4} placeholder="Conte um pouco sobre seu projeto" />
            </FormField>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button type="submit" className="w-full justify-center sm:w-auto">
                Enviar mensagem
              </Button>
              <Button href="https://wa.me/5585XXXXXXXX?text=M1Solar%20Quero%20falar%20com%20um%20especialista" variant="secondary">
                Chamar no WhatsApp
              </Button>
            </div>
          </form>
          {message ? <p className="text-sm text-brand-dark">{message}</p> : null}
          <p className="text-xs text-slate-500">
            Integração futura: conecte aqui com seu backend, CRM, ferramenta de e-mail ou serviço de formulários.
          </p>
        </div>

        <div className="card p-6 space-y-4">
          <h2 className="text-lg font-semibold text-slate-900">Informações</h2>
          <div className="flex items-center gap-3 text-sm text-slate-700">
            <PhoneIcon className="h-5 w-5" />
            <span>(85) 9 9999-9999</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-700">
            <EnvelopeIcon className="h-5 w-5" />
            <span>contato@m1solar.com.br</span>
          </div>
          <div className="rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
            <p className="font-semibold text-slate-800">Endereço</p>
            <p>Av. Exemplo, 123</p>
            <p>Fortaleza - CE</p>
          </div>
        </div>
      </div>
    </div>
  );
}
