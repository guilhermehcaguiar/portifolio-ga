import type { ReactNode } from "react";
import {
  siJavascript,
  siNextdotjs,
  siNodedotjs,
  siPython,
  siReact,
  siTailwindcss,
  siTypescript,
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

interface StackProps {
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
const fallbackTechIcon = (
  <ConceptIcon>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </ConceptIcon>
);

export default function Stack({ categories }: StackProps) {
  const visibleCategories = categories.filter(
    (category) => category.items.length > 0,
  );

  return (
    <section
      id="stack"
      aria-labelledby="stack-title"
      className="scroll-mt-28 border-t border-border py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <SectionHeading id="stack" kicker="04" title="Stack" />

        {visibleCategories.length > 0 && (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visibleCategories.map((category) => (
              <article
                key={category.key}
                className="rounded-lg border border-border bg-surface p-6"
              >
                <h3 className="font-mono text-sm uppercase tracking-widest text-accentCyan">
                  {category.title}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded border border-border px-2.5 py-1 font-mono text-xs text-secondary"
                    >
                      {techIcons[item] ?? fallbackTechIcon}
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
