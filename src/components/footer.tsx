/**
 * Footer — Etapa A3.4
 *
 * Encerramento visual: logo GA. com ponto azul (sem link — sem destino
 * real), âncoras das seções, © 2026 (ano estático, sem risco de
 * hidratação), nota factual das tecnologias e link real para o GitHub.
 * Server Component, sem props.
 */

const GITHUB_URL = "https://github.com/guilhermehcaguiar";

// Mesmas âncoras da navbar (navLinks). Duplicação consciente: extrair
// para a camada de dados exigiria alterar navbar.tsx, fora do escopo
// aprovado. Avaliada na A3.5 — decisão: manter duplicação registrada
// em docs/arquitetura.md; unificação opcional na A5.
const footerLinks = [
  { key: "sobre", label: "Sobre", href: "#sobre" },
  { key: "projetos", label: "Projetos", href: "#projetos" },
  { key: "experiencia", label: "Experiência", href: "#experiencia" },
  { key: "stack", label: "Stack", href: "#stack" },
  { key: "contato", label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-2xl font-bold tracking-wider">
            GA<span className="text-accentBlue">.</span>
          </span>

          <nav aria-label="Seções do site">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-secondary transition-colors hover:text-accentBlue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accentBlue"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-border pt-8 text-sm text-secondary sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Guilherme Aguiar</p>
          <p>Feito com Next.js, React e Tailwind CSS</p>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accentBlue transition-colors hover:text-accentCyan focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accentBlue"
          >
            GitHub
            <span className="sr-only"> (abre em uma nova aba)</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
