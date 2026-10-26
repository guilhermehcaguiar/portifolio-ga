import ProjectGallery from "./project-gallery";
import type { Dictionary } from "@/i18n/dictionary";
import type { ProjectsData, Project } from "@/types/portfolio";
import SectionHeading from "./section-heading";
function Technologies({ project }: { project: Project }) {
  return project.technologies.length > 0 ? (
    <ul className="mt-5 flex flex-col items-start gap-2" aria-label="Stack">
      {project.technologies.map((tech) => (
        <li key={tech} className="chip">
          {tech}
        </li>
      ))}
    </ul>
  ) : null;
}
function Actions({ project, dict }: { project: Project; dict: Dictionary }) {
  return (
    <div className="project-actions mt-5 flex flex-wrap gap-3">
      {project.deployUrl && (
        <a
          href={project.deployUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="button button-primary"
        >
          {dict.projects.website}
          <span aria-hidden="true"> ↗</span>
          <span className="sr-only">
            {" "}
            — {project.name}
            {dict.newTab}
          </span>
        </a>
      )}
      {project.repositoryUrl && (
        <a
          href={project.repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={
            project.deployUrl ? "button button-secondary" : "project-link"
          }
        >
          {dict.projects.repository}
          <span aria-hidden="true"> ↗</span>
          <span className="sr-only">
            {" "}
            — {project.name}
            {dict.newTab}
          </span>
        </a>
      )}
    </div>
  );
}
function CaseDetails({
  project,
  dict,
}: {
  project: Project;
  dict: Dictionary;
}) {
  const entries = [
    [dict.projects.context, project.context],
    [dict.projects.contribution, project.contribution],
    [dict.projects.result, project.result],
  ].filter(([, value]) => value);
  return entries.length > 0 ? (
    <dl className="mt-6 grid gap-5">
      {entries.map(([label, value]) => (
        <div key={label}>
          <dt className="text-sm font-medium text-primary">{label}</dt>
          <dd className="mt-1 text-sm leading-relaxed text-secondary">
            {value}
          </dd>
        </div>
      ))}
    </dl>
  ) : null;
}
export default function Projetos({
  projects,
  dict,
}: {
  projects: ProjectsData;
  dict: Dictionary;
}) {
  const featured = projects.main.find((project) => project.isFeatured);
  return (
    <section
      id="projetos"
      tabIndex={-1}
      aria-labelledby="projetos-title"
      className="section"
    >
      <div className="container">
        <SectionHeading
          id="projetos"
          kicker="01"
          title={dict.projects.title}
          lede={dict.projects.lede}
        />
        {featured && (
          <article
            id="projeto-alambrado"
            tabIndex={-1}
            className="section-anchor mt-10 overflow-hidden rounded-2xl border border-border bg-surface"
          >
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
              {featured.image && (
                <div className="project-preview-column border-b border-border p-4 sm:p-7 lg:border-r lg:border-b-0">
                  <ProjectGallery
                    label={dict.projects.gallery}
                    enlarge={dict.projects.enlarge}
                    close={dict.projects.closeImage}
                    images={[
                      {
                        src: featured.image,
                        alt: featured.imageAlt ?? featured.name,
                        label: dict.projects.homeImage,
                      },
                      {
                        src: "/projetos/alambrado-catalogo.webp",
                        alt: `Alambrado — ${dict.projects.catalogImage}`,
                        label: dict.projects.catalogImage,
                      },
                      {
                        src: "/projetos/alambrado-carrinho.webp",
                        alt: `Alambrado — ${dict.projects.cartImage}`,
                        label: dict.projects.cartImage,
                      },
                    ]}
                  />
                </div>
              )}
              <div className="p-6 sm:p-8">
                <p className="eyebrow">{dict.projects.featured}</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                  {featured.name}
                </h3>
                <p className="mt-2 text-xs text-accentCyan">{featured.type}</p>
                <p className="mt-4 leading-relaxed text-secondary">
                  {featured.description}
                </p>
                <Technologies project={featured} />
                <Actions project={featured} dict={dict} />
              </div>
            </div>
            <div className="border-t border-border p-6 sm:p-8">
              <div className="case-featured">
                <CaseDetails project={featured} dict={dict} />
              </div>
            </div>
          </article>
        )}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {projects.main
            .filter((project) => !project.isFeatured)
            .map((project) => (
              <article
                key={project.key}
                className="project-card flex flex-col rounded-xl border border-border bg-surface/65 p-6 sm:p-8"
              >
                <p className="eyebrow">{project.type}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  {project.name}
                </h3>
                <p className="mt-4 leading-relaxed text-secondary">
                  {project.description}
                </p>
                <Technologies project={project} />
                <CaseDetails project={project} dict={dict} />
                <Actions project={project} dict={dict} />
              </article>
            ))}
        </div>
        <h3 className="mt-12 text-lg font-medium">{dict.projects.others}</h3>
        <div className="mt-5 grid gap-3">
          {projects.secondary.map((project) => (
            <details
              key={project.key}
              className="project-accordion group rounded-xl border border-border"
            >
              <summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-5 py-4 sm:px-6 [&::-webkit-details-marker]:hidden">
                <span>
                  <span className="block text-base font-medium">
                    {project.name}{" "}
                    {project.isAcademic && (
                      <span className="ml-2 rounded border border-border px-2 py-1 text-xs font-normal text-secondary">
                        {dict.projects.academic}
                      </span>
                    )}
                  </span>
                  <span className="mt-1 block text-sm text-secondary">
                    {project.type}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="text-xl text-accentCyan transition-transform group-open:rotate-45 motion-reduce:transition-none"
                >
                  +
                </span>
              </summary>
              <div className="border-t border-border px-5 py-5 sm:px-6">
                <p className="max-w-3xl leading-relaxed text-secondary">
                  {project.description}
                </p>
                <Technologies project={project} />
                <Actions project={project} dict={dict} />
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
