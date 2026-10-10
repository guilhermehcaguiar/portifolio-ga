import type { ReactNode } from "react";
import SectionHeading from "@/components/section-heading";
import type { BeyondInterest } from "@/types/portfolio";

/**
 * Beyond the Code — Etapa A3.3
 *
 * Seção "Beyond the Code" (kicker 05): interesses técnicos e pessoais
 * fora do desenvolvimento web tradicional. Cards com ícone Lucide inline
 * e título; descrições e links são condicionais (campos pendentes não
 * renderizam — sem mensagens de pendência na UI). Server Component.
 */

interface BeyondTheCodeProps {
  interests: BeyondInterest[];
}

const LUCIDE_STROKE = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const iconMap: Record<string, ReactNode> = {
  "git-branch": (
    <svg
      className="h-6 w-6 text-accentCyan"
      viewBox="0 0 24 24"
      {...LUCIDE_STROKE}
      aria-hidden="true"
    >
      <line x1="6" y1="3" x2="6" y2="15" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M18 9a9 9 0 0 1-9 9" />
    </svg>
  ),
  cpu: (
    <svg
      className="h-6 w-6 text-accentCyan"
      viewBox="0 0 24 24"
      {...LUCIDE_STROKE}
      aria-hidden="true"
    >
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  ),
  terminal: (
    <svg
      className="h-6 w-6 text-accentCyan"
      viewBox="0 0 24 24"
      {...LUCIDE_STROKE}
      aria-hidden="true"
    >
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  ),
  zap: (
    <svg
      className="h-6 w-6 text-accentCyan"
      viewBox="0 0 24 24"
      {...LUCIDE_STROKE}
      aria-hidden="true"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  bot: (
    <svg
      className="h-6 w-6 text-accentCyan"
      viewBox="0 0 24 24"
      {...LUCIDE_STROKE}
      aria-hidden="true"
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
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

export default function BeyondTheCode({ interests }: BeyondTheCodeProps) {
  return (
    <section
      id="beyond-the-code"
      aria-labelledby="beyond-the-code-title"
      className="scroll-mt-28 border-t border-border py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <SectionHeading
          id="beyond-the-code"
          kicker="05"
          title="Beyond the Code"
          lede="Interesses e projetos fora do desenvolvimento web tradicional."
        />

        {interests.length > 0 && (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {interests.map((interest) => (
              <article
                key={interest.key}
                className="rounded-lg border border-border bg-surface p-6"
              >
                {iconMap[interest.icon] ?? iconMap.sparkles}
                <h3 className="mt-4 text-lg font-semibold text-primary">
                  {interest.title}
                </h3>
                {interest.description && (
                  <p className="mt-3 leading-relaxed text-secondary">
                    {interest.description}
                  </p>
                )}
                {interest.link?.href && (
                  <a
                    href={interest.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex text-accentBlue transition-colors hover:text-accentCyan focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accentBlue"
                  >
                    {interest.link.label}
                  </a>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
