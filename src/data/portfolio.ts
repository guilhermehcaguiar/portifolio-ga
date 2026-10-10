import type {
  AboutData,
  BeyondInterest,
  ExperienceItem,
  ProjectsData,
  StackCategory,
} from "@/types/portfolio";

// Conteúdo derivado exclusivamente do perfil público verificado do GitHub
// (guilhermehcaguiar) — não alterar sem aprovação.
export const about: AboutData = {
  paragraphs: [
    "Sou desenvolvedor full-stack e estudante de Ciência da Computação, apaixonado por construir soluções eficientes através do código.",
    "Minha trajetória combina experiência prática em TI com desenvolvimento ativo de software, incluindo automações em Python para otimizar processos de negócio.",
    "Atualmente, mergulho no ecossistema JavaScript — React e Node.js — enquanto exploro um forte interesse em Inteligência Artificial, movido por aprendizado contínuo e pelo desejo de construir aplicações escaláveis e de alto impacto.",
  ],
  focusAreas: ["React", "Node.js", "Inteligência Artificial"],
};

export const experience: ExperienceItem[] = [
  {
    // PENDÊNCIA A3 — preencher com dados reais quando fornecidos:
    // empresa, cargo, período, resumo e contribuições. Não inventar.
    role: null,
    company: null,
    period: null,
    summary: null,
    contributions: [],
  },
];

export const projects: ProjectsData = {
  main: [
    {
      key: "alambrado",
      name: "Alambrado",
      type: "E-commerce de camisas de futebol",
      // Derivado de docs/projetos.md (site público com branding próprio).
      description:
        "E-commerce de camisas de futebol — site público com branding próprio.",
      // PENDÊNCIA A3 — tecnologias e links (site/repo) quando fornecidos.
      technologies: [],
      isFeatured: true,
      links: [],
    },
    {
      key: "autoshop-payables",
      name: "AutoShop Payables",
      type: "Sistema interno",
      // PENDÊNCIA A3 — contexto geral autorizado, tecnologias e links.
      // Confidencialidade (docs/projetos.md): sem detalhes operacionais,
      // sem código, sem dados da empresa.
      description: null,
      technologies: [],
      links: [],
    },
    {
      key: "autofilter-search",
      name: "AutoFilter Search",
      type: "Sistema interno",
      // PENDÊNCIA A3 — idem AutoShop Payables.
      description: null,
      technologies: [],
      links: [],
    },
  ],
  secondary: [
    // PENDÊNCIA A3 — descrições, tecnologias e links dos secundários.
    { key: "vetcare", name: "VetCare", type: "Sistema veterinário", description: null, technologies: [], links: [] },
    { key: "translog", name: "TransLog", type: "Sistema de logística", description: null, technologies: [], links: [] },
    { key: "forma-store", name: "FORMA Store", type: "Loja institucional", description: null, technologies: [], links: [] },
    { key: "orbit", name: "Orbit", type: "Sistema Integrado Estudantil", description: null, technologies: [], links: [] },
  ],
};

export const stack: StackCategory[] = [
  { key: "linguagens", title: "Linguagens", items: ["TypeScript", "JavaScript", "Python"] },
  { key: "frontend", title: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  { key: "backend", title: "Backend", items: ["Node.js"] },
  // PENDÊNCIA A3 — slots vazios nomeados: preencher quando confirmado. Não inventar.
  { key: "banco-de-dados", title: "Banco de dados", items: [] },
  { key: "ferramentas", title: "Ferramentas", items: [] },
  { key: "explorando", title: "Explorando", items: ["Inteligência Artificial"] },
];

export const beyondInterests: BeyondInterest[] = [
  // PENDÊNCIA A3 — descrições e links conforme o usuário fornecer.
  // Ícones Lucide substituídos (registrado no relatório da A3.3):
  // folder-git-2 → git-branch; brain-circuit → bot.
  { key: "projetos-pessoais", title: "Projetos pessoais", description: null, icon: "git-branch", link: null },
  { key: "eletronica", title: "Eletrônica", description: null, icon: "cpu", link: null },
  { key: "linux", title: "Linux", description: null, icon: "terminal", link: null },
  { key: "automacao", title: "Automação", description: null, icon: "zap", link: null },
  { key: "ia-local", title: "IA local", description: null, icon: "bot", link: null },
];
