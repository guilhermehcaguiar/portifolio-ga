// Type explícito de locale
export type Locale = "pt-BR" | "en";

// Locais suportados
export const locales = ["pt-BR", "en"] as const;

// Locale padrão
export const defaultLocale: Locale = "pt-BR";

// Fallback seguro
export const resolveLocale = (locale: unknown): Locale => {
  if (locale === "pt-BR" || locale === "en") return locale;
  return defaultLocale;
};

// Verificação de locale - retorna boolean
export const isLocale = (locale: unknown): boolean =>
  locales.some((l) => {
    const k = l as string;
    return k === locale;
  });
