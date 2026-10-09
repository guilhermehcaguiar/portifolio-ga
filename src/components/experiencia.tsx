import SectionHeading from "@/components/section-heading";
import type { ExperienceItem } from "@/types/portfolio";

/**
 * Experiência — Etapa A3.1
 *
 * Seção "Experiência" (kicker 03). Enquanto não houver itens com dados
 * reais (pendência A3 registrada em @/data/portfolio), renderiza apenas
 * um placeholder discreto — sem timeline vazia. Quando houver pelo menos
 * um item real, renderiza a timeline com linha vertical e marcadores;
 * itens totalmente vazios são ignorados. Server Component.
 */

interface ExperienciaProps {
  items: ExperienceItem[];
}

function hasContent(item: ExperienceItem): boolean {
  return Boolean(
    item.role ||
      item.company ||
      item.period ||
      item.summary ||
      item.contributions.length > 0,
  );
}

export default function Experiencia({ items }: ExperienciaProps) {
  const realItems = items.filter(hasContent);

  return (
    <section
      id="experiencia"
      aria-labelledby="experiencia-title"
      className="scroll-mt-28 border-t border-border py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <SectionHeading id="experiencia" kicker="03" title="Experiência" />

        {realItems.length === 0 ? (
          <div className="mt-12 rounded-lg border border-dashed border-border p-6 font-mono text-sm text-secondary">
            Conteúdo em definição
          </div>
        ) : (
          <ol className="mt-12 space-y-12 border-l border-border pl-8">
            {realItems.map((item, index) => (
              <li key={index} className="relative">
                {/* Marcador sobre a linha da timeline */}
                <span
                  aria-hidden="true"
                  className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full bg-accentBlue"
                />

                {item.period && (
                  <p className="font-mono text-sm text-accentCyan">
                    {item.period}
                  </p>
                )}

                {(item.role || item.company) && (
                  <h3 className="mt-1">
                    {item.role && (
                      <span className="font-medium text-primary">
                        {item.role}
                      </span>
                    )}
                    {item.role && item.company && (
                      <span className="text-secondary"> · </span>
                    )}
                    {item.company && (
                      <span className="text-secondary">{item.company}</span>
                    )}
                  </h3>
                )}

                {item.summary && (
                  <p className="mt-2 leading-relaxed text-secondary">
                    {item.summary}
                  </p>
                )}

                {item.contributions.length > 0 && (
                  <ul className="mt-3 space-y-2">
                    {item.contributions.map((contribution, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-secondary"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accentBlue"
                        />
                        <span>{contribution}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}
