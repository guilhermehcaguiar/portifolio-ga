import SectionHeading from "@/components/section-heading";
import type { AboutData } from "@/types/portfolio";

/**
 * Sobre — Etapa A3.1
 *
 * Seção "Sobre mim" (kicker 01): prosa em duas colunas no desktop,
 * com card "Foco atual" ao lado. Conteúdo 100% via props, derivado de
 * @/data/portfolio — sem dados no JSX. Server Component.
 */

interface SobreProps {
  about: AboutData;
}

export default function Sobre({ about }: SobreProps) {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-title"
      className="scroll-mt-28 border-t border-border py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <SectionHeading id="sobre" kicker="01" title="Sobre mim" />

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
          {/* Prosa */}
          <div className="space-y-6">
            {about.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={
                  index === 0
                    ? "text-lg leading-relaxed text-primary"
                    : "leading-relaxed text-secondary"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Card Foco atual */}
          {about.focusAreas.length > 0 && (
            <div className="rounded-lg border border-border bg-surface p-6 sm:p-8">
              <h3 className="font-mono text-sm uppercase tracking-widest text-accentCyan">
                Foco atual
              </h3>
              <ul className="mt-5 space-y-3">
                {about.focusAreas.map((area) => (
                  <li key={area} className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-accentBlue"
                    />
                    <span className="text-primary">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
