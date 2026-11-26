import Image from "next/image";
import ProjectGallery from "./project-gallery";
import type { Dictionary } from "@/i18n/dictionary";
import type { ProjectsData, Project } from "@/types/portfolio";
import SectionHeading from "./section-heading";
import ActionArrow from "./action-arrow";
function Technologies({ project, label }: { project: Project; label: string }) {
  return project.technologies.length > 0 ? (
    <ul className="flex flex-col items-start gap-1.5" aria-label={label}>
      {project.technologies.map((tech) => (
        <li key={tech} className="chip">
          {tech}
        </li>
      ))}
    </ul>
  ) : null;
}
function Actions({ project, dict }: { project: Project; dict: Dictionary }) {
  return project.deployUrl || project.repositoryUrl ? (
    <div className="project-actions mt-5 flex flex-wrap gap-3">
      {project.deployUrl && (
        <a
          href={project.deployUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="button button-primary"
        >
          {dict.projects.website}
          <ActionArrow />
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
          <ActionArrow />
          <span className="sr-only">
            {" "}
            — {project.name}
            {dict.newTab}
          </span>
        </a>
      )}
    </div>
  ) : null;
}
function CaseDetails({
  project,
  dict,
  showContribution = true,
}: {
  project: Project;
  dict: Dictionary;
  showContribution?: boolean;
}) {
  const entries = [
    [dict.projects.context, project.context],
    [dict.projects.contribution, showContribution ? project.contribution : undefined],
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
          title={dict.projects.title}
          lede={dict.projects.lede}
        />
        {featured && (
          <article
            id="projeto-alambrado"
            tabIndex={-1}
            className="section-anchor featured-case mt-8 sm:mt-10"
          >
            <div className="featured-case-grid">
              <div className="featured-case-copy">
                <p className="eyebrow">{dict.projects.featured}</p>
                <h3 className="mt-2 text-3xl font-semibold tracking-tight sm:text-[2.5rem]">
                  {featured.name}
                </h3>
                <p className="mt-2 text-sm text-secondary">{featured.type}</p>
                {featured.contribution && (
                  <div className="case-contribution mt-4">
                    <p className="text-xs font-medium text-accentCyan">{dict.projects.contribution}</p>
                    <p className="mt-1 leading-relaxed text-primary">{featured.contribution}</p>
                  </div>
                )}
                <Actions project={featured} dict={dict} />
              </div>
              {featured.image && (
                <div className="project-preview-column">
                  <ProjectGallery
                    label={dict.projects.gallery}
                    enlarge={dict.projects.enlarge}
                    close={dict.projects.closeImage}
                    loading={dict.projects.loadingImage}
                    error={dict.projects.imageError}
                    retry={dict.projects.retryImage}
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
            </div>
            <div className="featured-case-details">
              <div className="case-featured">
                <CaseDetails project={featured} dict={dict} showContribution={false} />
              </div>
              <div>
                <p className="mb-2 text-sm font-medium">{dict.projects.technologies}</p>
                <Technologies project={featured} label={dict.projects.technologies} />
              </div>
            </div>
          </article>
        )}
        {projects.spotlight.map((project) => (
          <article
            key={project.key}
            id={`projeto-${project.key}`}
            aria-labelledby={`${project.key}-title`}
            className="section-anchor project-spotlight mt-6"
          >
            <div className="project-spotlight-copy min-w-0">
              {project.isAcademic && (
                <p className="eyebrow">{dict.projects.academic}</p>
              )}
              <h3
                id={`${project.key}-title`}
                className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                {project.name}
              </h3>
              <p className="mt-2 text-sm text-accentCyan">{project.type}</p>
              <p className="mt-4 max-w-lg leading-relaxed text-secondary">
                {project.description}
              </p>
              <Actions project={project} dict={dict} />
            </div>
            {project.image && (
              <div className="project-spotlight-media">
                <Image
                  src={project.image}
                  alt={project.imageAlt ?? ""}
                  fill
                  sizes="(min-width: 1152px) 530px, (min-width: 768px) 48vw, 90vw"
                  className="object-contain"
                />
              </div>
            )}
            <div className="project-spotlight-stack border-t border-border pt-4">
              <Technologies project={project} label={dict.projects.technologies} />
            </div>
          </article>
        ))}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {projects.main
            .filter((project) => !project.isFeatured)
            .map((project) => (
              <article
                key={project.key}
                className="project-card internal-project flex flex-col p-5 sm:p-7"
              >
                <p className="eyebrow">{project.type}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  {project.name}
                </h3>
                <p className="mt-4 leading-relaxed text-secondary">
                  {project.description}
                </p>
                <CaseDetails project={project} dict={dict} />
                <div className="mt-5 border-t border-border pt-4">
                  <Technologies project={project} label={dict.projects.technologies} />
                </div>
                <Actions project={project} dict={dict} />
              </article>
            ))}
        </div>
        <h3 className="mt-12 text-lg font-medium">{dict.projects.others}</h3>
        <div className="project-index mt-4">
          {projects.secondary.map((project) => (
            <details
              key={project.key}
              className="project-accordion group"
            >
              <summary className="flex min-h-18 cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 sm:px-5 [&::-webkit-details-marker]:hidden">
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
              <div className="border-t border-border px-4 py-5 sm:px-5">
                <p className="max-w-3xl leading-relaxed text-secondary">
                  {project.description}
                </p>
                <div className="mt-4"><Technologies project={project} label={dict.projects.technologies} /></div>
                <Actions project={project} dict={dict} />
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
