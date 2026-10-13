import SectionHeading from "@/components/section-heading";
import type { Project, ProjectsData } from "@/types/portfolio";

/**
 * Projetos — Etapas A3.2/A5
 *
 * Seção "Projetos" (kicker 02): projeto em destaque (Alambrado), demais
 * principais em grid e secundários em accordion nativo (<details>/<summary>),
 * operável por teclado sem JavaScript.
 *
 * A5 — cards clicáveis (regra deploy > GitHub):
 * - com deployUrl: o card inteiro abre o deploy (link overlay) e o
 *   repositório GitHub permanece como ação secundária (z-10 sobre o
 *   overlay — sem <a> dentro de <a>);
 * - só com repositoryUrl: o card inteiro abre o repositório;
 * - sem URL verificada (ex.: Alambrado hoje): card não interativo, sem
 *   indicador de destino — nenhum link falso.
 *
 * Secundários: o <summary> é apenas controle de expandir/recolher; a ação
 * principal (mesma regra) fica no painel expandido. Conteúdo 100% via
 * props de @/data/portfolio. Server Component.
 */

interface ProjetosProps {
  projects: ProjectsData;
}

interface Destination {
  href: string;
  isDeploy: boolean;
}

/** Regra A5: deployUrl > repositoryUrl > não clicável. */
function mainDestination(project: Project): Destination | null {
  if (project.deployUrl) return { href: project.deployUrl, isDeploy: true };
  if (project.repositoryUrl)
    return { href: project.repositoryUrl, isDeploy: false };
  return null;
}

function isPending(project: Project): boolean {
  return (
    !project.description &&
    project.technologies.length === 0 &&
    !project.deployUrl &&
    !project.repositoryUrl
  );
}

/** Ícone "abrir em nova aba" (Lucide arrow-up-right, inline). */
function ArrowUpRight() {
  return (
    <svg
      className="h-3.5 w-3.5 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

/**
 * Tag discreta de metainformação — projeto acadêmico. Metainformação,
 * não status: mono, xs, borda fina, transparente (identidade GA.).
 */
function AcademicTag() {
  return (
    <span className="rounded border border-border px-2 py-0.5 font-mono text-xs tracking-wide text-secondary">
      Acadêmico
    </span>
  );
}

function TechChips({
  technologies,
  className = "",
}: {
  technologies: string[];
  className?: string;
}) {
  if (technologies.length === 0) return null;

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {technologies.map((tech) => (
        <span
          key={tech}
          className="rounded border border-border px-2.5 py-1 font-mono text-xs text-secondary"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

/** Indicador discreto do destino principal + ação secundária (se houver). */
function DestinationRow({
  project,
  main,
}: {
  project: Project;
  main: Destination;
}) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-4">
      <span className="inline-flex items-center gap-1.5 font-mono text-xs text-secondary">
        {main.isDeploy ? "Site" : "GitHub"}
        <ArrowUpRight />
      </span>
      {main.isDeploy && project.repositoryUrl && (
        <a
          href={project.repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 inline-flex items-center gap-1.5 font-mono text-xs text-accentBlue transition-colors hover:text-accentCyan focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accentBlue"
        >
          GitHub
          <span className="sr-only"> (abre em uma nova aba)</span>
        </a>
      )}
    </div>
  );
}

/** Link overlay: torna o card inteiro clicável sem <a> aninhado. */
function CardOverlay({
  project,
  main,
}: {
  project: Project;
  main: Destination;
}) {
  return (
    <a
      href={main.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Abrir ${project.name} — ${
        main.isDeploy ? "site" : "repositório GitHub"
      } (nova aba)`}
      className="absolute inset-0 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accentBlue"
    />
  );
}

export default function Projetos({ projects }: ProjetosProps) {
  const featured = projects.main.find((project) => project.isFeatured);
  const others = projects.main.filter((project) => !project.isFeatured);
  const featuredMain = featured ? mainDestination(featured) : null;

  return (
    <section
      id="projetos"
      aria-labelledby="projetos-title"
      className="scroll-mt-28 border-t border-border py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <SectionHeading id="projetos" kicker="02" title="Projetos" />

        {/* Projeto em destaque */}
        {featured && (
          <article
            className={`group relative rounded-lg border border-accentBlue/40 bg-surface p-6 sm:p-10${
              featuredMain
                ? " transition-colors hover:border-accentBlue/60 focus-within:border-accentBlue/60"
                : ""
            }`}
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-accentBlue">
                Destaque
              </span>
              {featured.type && (
                <span className="font-mono text-xs uppercase tracking-widest text-accentCyan">
                  {featured.type}
                </span>
              )}
              {featured.isAcademic && <AcademicTag />}
            </div>
            <h3 className="mt-4 text-2xl font-bold tracking-tight text-primary sm:text-3xl">
              {featured.name}
            </h3>
            {featured.description && (
              <p className="mt-4 max-w-2xl leading-relaxed text-secondary">
                {featured.description}
              </p>
            )}
            <TechChips technologies={featured.technologies} className="mt-6" />
            {featuredMain && (
              <>
                <DestinationRow project={featured} main={featuredMain} />
                <CardOverlay project={featured} main={featuredMain} />
              </>
            )}
          </article>
        )}

        {/* Demais projetos principais */}
        {others.length > 0 && (
          <div
            className={`grid gap-6 sm:grid-cols-2 ${featured ? "mt-6" : "mt-12"}`}
          >
            {others.map((project) => {
              const main = mainDestination(project);
              return (
                <article
                  key={project.key}
                  className={`group relative rounded-lg border border-border bg-surface p-6${
                    main
                      ? " transition-colors hover:border-accentBlue/40 focus-within:border-accentBlue/40"
                      : ""
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    {project.type && (
                      <span className="font-mono text-xs uppercase tracking-widest text-accentCyan">
                        {project.type}
                      </span>
                    )}
                    {project.isAcademic && <AcademicTag />}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-primary">
                    {project.name}
                  </h3>
                  {project.description && (
                    <p className="mt-3 leading-relaxed text-secondary">
                      {project.description}
                    </p>
                  )}
                  <TechChips technologies={project.technologies} className="mt-6" />
                  {main && (
                    <>
                      <DestinationRow project={project} main={main} />
                      <CardOverlay project={project} main={main} />
                    </>
                  )}
                </article>
              );
            })}
          </div>
        )}

        {/* Projetos secundários — accordion nativo */}
        {projects.secondary.length > 0 && (
          <div className="mt-16">
            <h3 className="font-mono text-sm uppercase tracking-widest text-accentCyan">
              Outros projetos
            </h3>
            <div className="mt-6 space-y-3">
              {projects.secondary.map((project) => {
                const main = mainDestination(project);
                return (
                  <details
                    key={project.key}
                    className="group rounded-lg border border-border"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accentBlue [&::-webkit-details-marker]:hidden">
                      <span className="flex min-w-0 flex-col">
                        <span className="font-medium text-primary">
                          {project.name}
                        </span>
                        {(project.type || project.isAcademic) && (
                          <span className="mt-0.5 flex flex-wrap items-center gap-2">
                            {project.type && (
                              <span className="font-mono text-sm text-secondary">
                                {project.type}
                              </span>
                            )}
                            {project.isAcademic && <AcademicTag />}
                          </span>
                        )}
                      </span>
                      <svg
                        className="h-4 w-4 shrink-0 text-secondary transition-transform group-open:rotate-180 motion-reduce:transition-none"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </summary>
                    <div className="space-y-4 border-t border-border px-6 py-6">
                      {project.description && (
                        <p className="leading-relaxed text-secondary">
                          {project.description}
                        </p>
                      )}
                      <TechChips technologies={project.technologies} />
                      {main && (
                        <a
                          href={main.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-xs text-accentBlue transition-colors hover:text-accentCyan focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accentBlue"
                        >
                          {main.isDeploy ? "Site" : "GitHub"}
                          <ArrowUpRight />
                          <span className="sr-only"> (abre em uma nova aba)</span>
                        </a>
                      )}
                      {isPending(project) && (
                        <p className="font-mono text-sm text-secondary">
                          Conteúdo em definição
                        </p>
                      )}
                    </div>
                  </details>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
