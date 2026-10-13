import { githubProfileUrl } from "@/data/portfolio";
import { sectionLinks } from "@/lib/section-links";

/**
 * Footer — Etapas A3.4/A5
 *
 * Encerramento visual: logo GA. com ponto azul (sem link — sem destino
 * real), âncoras das seções (unificadas com a navbar via
 * @/lib/section-links), © 2026 (ano estático, sem risco de hidratação),
 * nota factual das tecnologias e link real para o GitHub
 * (githubProfileUrl — única fonte da URL). Server Component, sem props.
 */

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
              {sectionLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="inline-flex items-center py-2 text-secondary transition-colors hover:text-accentBlue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accentBlue"
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
            href={githubProfileUrl}
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
