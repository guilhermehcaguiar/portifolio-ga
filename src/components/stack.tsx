import SectionHeading from "@/components/section-heading";
import type { StackCategory } from "@/types/portfolio";

/**
 * Stack — Etapa A3.3
 *
 * Seção "Stack" (kicker 04): tecnologias organizadas por categorias em
 * chips mono, sem barras de proficiência ou porcentagens. Categorias sem
 * itens não renderizam (slots vazios permanecem invisíveis até
 * preenchidos em @/data/portfolio). Server Component.
 */

interface StackProps {
  categories: StackCategory[];
}

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
                      className="rounded border border-border px-2.5 py-1 font-mono text-xs text-secondary"
                    >
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
