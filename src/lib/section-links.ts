import type { Dictionary } from "@/i18n/dictionary";
export function getSectionLinks(dict: Dictionary) {
  return [
    { key: "projetos", label: dict.nav.projects, href: "#projetos" },
    { key: "sobre", label: dict.nav.about, href: "#sobre" },
    { key: "stack", label: dict.nav.stack, href: "#stack" },
    { key: "contato", label: dict.nav.contact, href: "#contato" },
  ];
}
