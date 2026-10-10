import SectionHeading from "@/components/section-heading";
import type { Project, ProjectLink, ProjectsData } from "@/types/portfolio";

/**
 * Projetos — Etapa A3.2
 *
 * Seção "Projetos" (kicker 02): projeto em destaque (Alambrado), demais
 * principais em grid e secundários em accordion nativo (<details>/<summary>),
 * operável por teclado sem JavaScript. Conteúdo 100% via props de
 * @/data/portfolio — sem dados no JSX. Links pendentes (href null) não são
 * renderizados como clicáveis; quando nome + tipo bastam, nenhuma mensagem
 * de pendência é exibida (diretriz do usuário). Server Component.
 */

interface ProjetosProps {
  projects: ProjectsData;
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

function ProjectLinks({
  links,
  className = "",
}: {
  links: ProjectLink[];
  className?: string;
}) {
  const realLinks = links.filter(
    (link): link is ProjectLink & { href: string } => link.href !== null,
  );

  if (realLinks.length === 0) return null;

  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {realLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accentBlue transition-colors hover:text-accentCyan focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accentBlue"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

function isPending(project: Project): boolean {
  return (
    !project.description &&
    project.technologies.length === 0 &&
    !project.links.some((link) => link.href !== null)
  );
}

export default function Projetos({ projects }: ProjetosProps) {
  const featured = projects.main.find((project) => project.isFeatured);
  const others = projects.main.filter((project) => !project.isFeatured);

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
          <article className="mt-12 rounded-lg border border-accentBlue/40 bg-surface p-6 sm:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-accentBlue">
                Destaque
              </span>
              {featured.type && (
                <span className="font-mono text-xs uppercase tracking-widest text-accentCyan">
                  {featured.type}
                </span>
              )}
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
            <ProjectLinks links={featured.links} className="mt-6" />
          </article>
        )}

        {/* Demais projetos principais */}
        {others.length > 0 && (
          <div
            className={`grid gap-6 sm:grid-cols-2 ${featured ? "mt-6" : "mt-12"}`}
          >
            {others.map((project) => (
              <article
                key={project.key}
                className="rounded-lg border border-border bg-surface p-6"
              >
                {project.type && (
                  <span className="font-mono text-xs uppercase tracking-widest text-accentCyan">
                    {project.type}
                  </span>
                )}
                <h3 className="mt-3 text-xl font-semibold text-primary">
                  {project.name}
                </h3>
                {project.description && (
                  <p className="mt-3 leading-relaxed text-secondary">
                    {project.description}
                  </p>
                )}
                <TechChips technologies={project.technologies} className="mt-6" />
                <ProjectLinks links={project.links} className="mt-6" />
              </article>
            ))}
          </div>
        )}

        {/* Projetos secundários — accordion nativo */}
        {projects.secondary.length > 0 && (
          <div className="mt-16">
            <h3 className="font-mono text-sm uppercase tracking-widest text-accentCyan">
              Outros projetos
            </h3>
            <div className="mt-6 space-y-3">
              {projects.secondary.map((project) => (
                <details
                  key={project.key}
                  className="group rounded-lg border border-border"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accentBlue [&::-webkit-details-marker]:hidden">
                    <span className="font-medium text-primary">
                      {project.name}
                    </span>
                    <span className="flex items-center gap-4">
                      {project.type && (
                        <span className="hidden font-mono text-sm text-secondary sm:inline">
                          {project.type}
                        </span>
                      )}
                      <svg
                        className="h-4 w-4 shrink-0 text-secondary transition-transform group-open:rotate-180"
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
                    </span>
                  </summary>
                  <div className="space-y-4 border-t border-border px-6 py-6">
                    {project.description && (
                      <p className="leading-relaxed text-secondary">
                        {project.description}
                      </p>
                    )}
                    <TechChips technologies={project.technologies} />
                    <ProjectLinks links={project.links} />
                    {isPending(project) && (
                      <p className="font-mono text-sm text-secondary">
                        Conteúdo em definição
                      </p>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
