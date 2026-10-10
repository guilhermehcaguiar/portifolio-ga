/**
 * Hero — Etapa A2 (CTA atualizado na A3.2)
 *
 * Tipografia dinâmica do nome "Guilherme Aguiar", subtítulo profissional
 * e dois CTAs hierarquizados: azul primário e ciano/transparente secundário,
 * conforme a identidade visual GA.
 *
 * CTA "Ver projetos": âncora real para a seção de projetos (#projetos).
 * CTA "GitHub": link real; perfil verificado externamente
 * (https://github.com/guilhermehcaguiar).
 */

const GITHUB_URL = "https://github.com/guilhermehcaguiar";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-x-hidden pt-36 pb-32 sm:pt-48 sm:pb-48 lg:pt-64 lg:pb-64"
    >
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          {/* Tratamento tipográfico do nome */}
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accentCyan">
              Software Developer
            </p>

            <h1
              id="hero-title"
              className="mb-6 text-5xl font-bold leading-none tracking-tight sm:text-6xl lg:text-7xl"
            >
              <span className="block">Guilherme</span>
              <span className="block text-secondary">Aguiar</span>
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-secondary sm:text-xl">
              &ldquo;Desenvolvo aplicações web e ferramentas que transformam
              problemas reais em soluções simples e eficientes.&rdquo;
            </p>

            <div className="flex flex-wrap gap-4">
              {/* CTA primário — âncora real para a seção de projetos */}
              <a
                href="#projetos"
                aria-label="Ver projetos do portfólio GA"
                className="rounded bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accentBlue"
              >
                Ver projetos
              </a>

              {/* CTA secundário — link real para o GitHub verificado */}
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded border border-accentCyan/60 bg-transparent px-6 py-3 font-medium text-accentCyan transition-colors hover:border-accentCyan hover:bg-accentCyan/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accentCyan"
              >
                GitHub
                <span className="sr-only"> (abre em uma nova aba)</span>
              </a>
            </div>

          </div>

          {/* Elemento tipográfico decorativo */}
          <div className="relative opacity-80" aria-hidden="true">
            <p className="select-none text-right font-mono text-xl tracking-widest text-secondary sm:text-2xl lg:text-3xl">
              G U I L H E R M E
            </p>
            <p className="mt-2 select-none text-right text-sm text-accentBlue sm:text-base lg:text-base">
              A G U I A R
            </p>
          </div>
        </div>

        {/* Ponto visual da marca */}
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 h-12 w-12 rounded-full bg-accentBlue opacity-20 sm:right-6 sm:top-6"
        />
      </div>
    </section>
  );
}
