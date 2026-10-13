import type { ReactNode } from "react";
import SectionHeading from "@/components/section-heading";
import type { ContactChannel } from "@/types/portfolio";

/**
 * Contato — Etapa A3.4
 *
 * Seção "Contato" (kicker 06): canais verificados renderizados como
 * cards-link (GitHub, LinkedIn). Canais com href pendente não renderizam
 * — o e-mail aparece quando o endereço real for fornecido em
 * @/data/portfolio. Ícones Lucide inline com mapa e fallback, mesmo
 * padrão da A3.3. Server Component.
 */

interface ContatoProps {
  channels: ContactChannel[];
}

const LUCIDE_STROKE = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const iconMap: Record<string, ReactNode> = {
  github: (
    <svg
      className="h-6 w-6 text-accentCyan"
      viewBox="0 0 24 24"
      {...LUCIDE_STROKE}
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  ),
  linkedin: (
    <svg
      className="h-6 w-6 text-accentCyan"
      viewBox="0 0 24 24"
      {...LUCIDE_STROKE}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  mail: (
    <svg
      className="h-6 w-6 text-accentCyan"
      viewBox="0 0 24 24"
      {...LUCIDE_STROKE}
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  sparkles: (
    <svg
      className="h-6 w-6 text-accentCyan"
      viewBox="0 0 24 24"
      {...LUCIDE_STROKE}
      aria-hidden="true"
    >
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      <path d="M20 3v4" />
      <path d="M22 5h-4" />
      <path d="M4 17v2" />
      <path d="M5 18H3" />
    </svg>
  ),
};

export default function Contato({ channels }: ContatoProps) {
  const visibleChannels = channels.filter(
    (channel): channel is ContactChannel & { href: string } =>
      channel.href !== null,
  );

  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      className="scroll-mt-28 border-t border-border py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <SectionHeading
          id="contato"
          kicker="06"
          title="Contato"
          lede="Formas de contato e links profissionais."
        />

        {visibleChannels.length > 0 && (
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {visibleChannels.map((channel) => (
              <a
                key={channel.key}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-border bg-surface p-6 transition-colors hover:border-accentBlue/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accentBlue"
              >
                {iconMap[channel.icon] ?? iconMap.sparkles}
                <span className="mt-4 block text-lg font-semibold text-primary">
                  {channel.label}
                </span>
                {channel.handle && (
                  <span className="mt-1 block font-mono text-sm text-secondary">
                    {channel.handle}
                  </span>
                )}
                <span className="sr-only"> (abre em uma nova aba)</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
