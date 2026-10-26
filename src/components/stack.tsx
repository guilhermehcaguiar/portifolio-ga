import type { ReactNode } from "react";
import {
  siJavascript,
  siNextdotjs,
  siNodedotjs,
  siPython,
  siOpenjdk,
  siReact,
  siTailwindcss,
  siTypescript,
  siGit,
  type SimpleIcon,
} from "simple-icons";
import SectionHeading from "@/components/section-heading";
import type { StackCategory } from "@/types/portfolio";

/**
 * Stack — Etapas A3.3/A5
 *
 * Seção "Stack" (kicker 04): tecnologias organizadas por categorias em
 * chips [ícone] Nome, sem barras de proficiência ou porcentagens.
 * Categorias sem itens não renderizam (slots vazios permanecem invisíveis
 * até preenchidos em @/data/portfolio).
 *
 * A5 — ícones: logos oficiais de marcas via Simple Icons (fill
 * currentColor, monocromáticos — identidade GA.); conceitos sem marca
 * (ex.: Inteligência Artificial) e tecnologias futuras sem ícone usam
 * fallback Lucide stroke no mesmo tamanho e cor. Server Component: os
 * ícones são dados SVG, sem JavaScript client.
 */

import type { Dictionary } from "@/i18n/dictionary";

interface StackProps {
  dict: Dictionary;
  categories: StackCategory[];
}

function BrandIcon({ icon }: { icon: SimpleIcon }) {
  return (
    <svg
      className="h-3.5 w-3.5 shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}

/** Ícones de conceito/fallback (Lucide stroke, mesmo tamanho e cor). */
function ConceptIcon({ children }: { children: ReactNode }) {
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
      {children}
    </svg>
  );
}

const techIcons: Record<string, ReactNode> = {
  TypeScript: <BrandIcon icon={siTypescript} />,
  JavaScript: <BrandIcon icon={siJavascript} />,
  Java: <BrandIcon icon={siOpenjdk} />,
  Git: <BrandIcon icon={siGit} />,
  SQL: (
    <ConceptIcon>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0" />
    </ConceptIcon>
  ),
  Hardware: (
    <ConceptIcon>
      <rect x="5" y="5" width="14" height="14" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 2v3m6-3v3M9 19v3m6-3v3M2 9h3m-3 6h3m14-6h3m-3 6h3" />
    </ConceptIcon>
  ),
  Automação: (
    <ConceptIcon>
      <path d="m13 2-9 12h7l-1 8 10-12h-7l1-8Z" />
    </ConceptIcon>
  ),
  Cibersegurança: (
    <ConceptIcon>
      <path d="M12 3 4 6v6c0 5 8 9 8 9s8-4 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </ConceptIcon>
  ),
  Python: <BrandIcon icon={siPython} />,
  React: <BrandIcon icon={siReact} />,
  "Next.js": <BrandIcon icon={siNextdotjs} />,
  "Tailwind CSS": <BrandIcon icon={siTailwindcss} />,
  "Node.js": <BrandIcon icon={siNodedotjs} />,
  // Conceito, não marca: Lucide (mesmo tamanho e cor dos logos).
  "Inteligência Artificial": (
    <ConceptIcon>
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </ConceptIcon>
  ),
};

// Fallback discreto para tecnologias futuras sem ícone mapeado.
techIcons["Artificial Intelligence"] = techIcons["Inteligência Artificial"];
techIcons.Automation = techIcons.Automação;
techIcons["Machine Learning"] = techIcons["Inteligência Artificial"];
techIcons.Cybersecurity = techIcons.Cibersegurança;

const fallbackTechIcon = (
  <ConceptIcon>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </ConceptIcon>
);

export default function Stack({ categories, dict }: StackProps) {
  const visibleCategories = categories.filter(
    (category) => category.items.length > 0,
  );

  return (
    <section
      id="stack"
      aria-labelledby="stack-title"
      tabIndex={-1}
      className="section"
    >
      <div className="container">
        <SectionHeading
          id="stack"
          kicker="03"
          title={dict.stack.title}
          lede={dict.stack.lede}
        />

        {visibleCategories.length > 0 && (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visibleCategories.map((category) => (
              <article
                key={category.key}
                className="rounded-lg border border-border bg-surface p-6"
              >
                <h3 className="font-mono text-sm uppercase tracking-widest text-accentCyan">
                  {category.title}
                </h3>
                <ul className="mt-5 flex flex-col items-start gap-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded border border-border px-2.5 py-1 font-mono text-xs text-secondary"
                    >
                      {techIcons[item] ?? fallbackTechIcon}
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
