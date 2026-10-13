// Links de seção compartilhados por Navbar e Footer (A5: unificação para
// evitar drift — antes duplicados em dois componentes). Módulo separado
// da camada de dados (src/data/portfolio.ts) para não puxar o conteúdo
// pessoal/profissional para o bundle client da navbar.

export interface SectionLink {
  key: string;
  label: string;
  href: string;
}

export const sectionLinks: SectionLink[] = [
  { key: "sobre", label: "Sobre", href: "#sobre" },
  { key: "projetos", label: "Projetos", href: "#projetos" },
  { key: "experiencia", label: "Experiência", href: "#experiencia" },
  { key: "stack", label: "Stack", href: "#stack" },
  { key: "contato", label: "Contato", href: "#contato" },
];
