/**
 * SectionHeading — Etapa A3.1
 *
 * Cabeçalho padronizado das seções do portfólio GA.: kicker numérico
 * sequencial (01 Sobre, 02 Projetos, 03 Experiência, 04 Stack, 05 Beyond,
 * 06 Contato — numeração fixa, não renumerar), título h2 e lede opcional.
 * Server Component, sem interatividade.
 */

interface SectionHeadingProps {
  id: string;
  kicker: string;
  title: string;
  lede?: string;
}

export default function SectionHeading({
  id,
  kicker,
  title,
  lede,
}: SectionHeadingProps) {
  return (
    <div>
      <p className="font-mono text-sm uppercase tracking-widest text-accentCyan">
        {kicker}
      </p>
      <h2
        id={`${id}-title`}
        className="mt-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl"
      >
        {title}
      </h2>
      {lede && (
        <p className="mt-4 max-w-2xl leading-relaxed text-secondary">{lede}</p>
      )}
    </div>
  );
}
