import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/navbar";
import { person } from "@/data/portfolio";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfólio GA",
  description: "Portfólio pessoal de Guilherme Aguiar - Software Developer",
  openGraph: {
    type: "website",
    siteName: "Portfólio GA",
    locale: "pt_BR",
    title: "Portfólio GA",
    description: "Portfólio pessoal de Guilherme Aguiar - Software Developer",
  },
  twitter: {
    card: "summary",
    title: "Portfólio GA",
    description: "Portfólio pessoal de Guilherme Aguiar - Software Developer",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0F14",
};

// JSON-LD Person — 100% dados verificados, consumidos da camada centralizada
// (@/data/portfolio). Sem url (domínio só na A5), sem e-mail (pendente),
// sem image (nenhuma autorizada). jobTitle = nomenclatura consolidada no site.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  jobTitle: person.jobTitle ?? undefined,
  description: person.description ?? undefined,
  sameAs: person.sameAs,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-4 focus:z-[60] focus:rounded focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accentBlue"
        >
          Pular para o conteúdo
        </a>
        <Navbar />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
