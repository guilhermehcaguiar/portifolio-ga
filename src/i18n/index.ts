import { Locale, resolveLocale, defaultLocale } from "./config";
import { ptBR } from "./pt-BR";
import { en } from "./en";
import type { Dictionary } from "./dictionary";

export const getDictionary = (locale?: Locale): Dictionary => {
  const lang = resolveLocale(locale ?? defaultLocale);
  return lang === "pt-BR" ? ptBR : en;
};

// Helper: recebe o locale e devolve apenas as strings de uma seção.
export const useDictionary = (locale?: Locale) => getDictionary(locale);
