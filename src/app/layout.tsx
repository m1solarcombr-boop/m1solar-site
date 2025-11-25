import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { Button } from "@/components/Button";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "M1Solar | Energia solar no Ceará",
  description: "Energia solar para economizar na sua conta de luz com atendimento especializado no Nordeste.",
  keywords: ["energia solar", "Ceará", "economia de energia", "painel solar"],
  openGraph: {
    title: "M1Solar",
    description: "Soluções completas de energia solar para residências, comércios e indústrias.",
    url: "https://www.m1solar.com.br",
    siteName: "M1Solar"
  }
};

const menuLinks = [
  { href: "/", label: "Home" },
  { href: "/simulacao", label: "Simulação" },
  { href: "/servicos", label: "Serviços" },
  { href: "/projetos", label: "Projetos" },
  { href: "/contato", label: "Contato" }
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="bg-white text-slate-900">
        <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur">
          <div className="section-container flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-brand-dark">
              <span className="h-10 w-10 rounded-xl bg-gradient-to-br from-brand-yellow to-brand-orange" aria-hidden />
              M1Solar
            </Link>
            <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 md:flex">
              {menuLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-brand-dark">
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="hidden md:block">
              <Button href="https://wa.me/5585XXXXXXXX?text=M1Solar%20Quero%20uma%20simulacao">Falar no WhatsApp</Button>
            </div>
            <div className="md:hidden">
              <Button href="https://wa.me/5585XXXXXXXX?text=M1Solar%20Quero%20uma%20simulacao" variant="secondary">
                WhatsApp
              </Button>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-20 border-t border-slate-100 bg-slate-50">
          <div className="section-container grid gap-10 py-12 md:grid-cols-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-lg font-bold text-brand-dark">
                <span className="h-10 w-10 rounded-xl bg-gradient-to-br from-brand-yellow to-brand-orange" aria-hidden />
                M1Solar
              </div>
              <p className="text-sm text-slate-600">
                Energia solar feita por especialistas do Ceará, atendendo todo o Nordeste com projetos sob medida.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">Links</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {menuLinks.map((link) => (
                  <li key={link.href}>
                    <Link className="hover:text-brand-dark" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2 text-sm text-slate-600">
              <h4 className="text-sm font-semibold text-slate-900">Contato</h4>
              <p>Email: contato@m1solar.com.br</p>
              <p>Telefone: (85) 9 9999-9999</p>
              <p>Fortaleza - CE</p>
            </div>
            <div className="space-y-3 text-sm text-slate-600">
              <h4 className="text-sm font-semibold text-slate-900">Redes sociais</h4>
              <div className="flex gap-3">
                <Link className="btn-secondary px-4 py-2" href="#">Instagram</Link>
                <Link className="btn-secondary px-4 py-2" href="#">LinkedIn</Link>
              </div>
              <p className="text-xs text-slate-500">Edite os links conforme suas contas oficiais.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
