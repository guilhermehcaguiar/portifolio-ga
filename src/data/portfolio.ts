import type {
  AboutData,
  BeyondInterest,
  ContactChannel,
  ExperienceItem,
  HeroData,
  PersonData,
  ProjectsData,
  StackCategory,
} from "@/types/portfolio";

// Única fonte da URL do perfil GitHub (A5: unificação — Hero, Footer,
// contato e person.sameAs referenciam esta constante).
export const githubProfileUrl = "https://github.com/guilhermehcaguiar";

// Identidade do site — consumida pelo JSON-LD (layout.tsx) e metadados.
// jobTitle consolidado no site atual (kicker do Hero + description do layout);
// descrição derivada da bio pública verificada; sameAs verificados.
export const person: PersonData = {
  name: "Guilherme Aguiar",
  jobTitle: "Software Developer",
  description:
    "Desenvolvedor full-stack e estudante de Ciência da Computação, com interesse em React, Node.js, Python e Inteligência Artificial.",
  sameAs: [
    githubProfileUrl,
    "https://www.linkedin.com/in/guilhermehcaguiar",
  ],
};

// Hero — conteúdo profissional centralizado (A5). Zero mudança visual:
// mesmos textos aprovados na A2.
export const hero: HeroData = {
  kicker: "Software Developer",
  firstName: "Guilherme",
  lastName: "Aguiar",
  quote:
    "Desenvolvo aplicações web e ferramentas que transformam problemas reais em soluções simples e eficientes.",
};

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
      // PENDÊNCIA A5 — nenhuma URL (repositório/deploy) verificada: o card
      // permanece não clicável até deployUrl/repositoryUrl serem preenchidos.
      technologies: [],
      isFeatured: true,
      isAcademic: false,
      deployUrl: null,
      repositoryUrl: null,
    },
    {
      key: "autoshop-payables",
      name: "AutoShop Payables",
      type: "Sistema interno",
      // Descrição autorizada com base no README público. Confidencialidade:
      // sem credenciais, dados internos ou detalhes operacionais.
      description:
        "Sistema de gestão financeira desenvolvido para controle de contas a pagar, fornecedores, relatórios e rotinas administrativas.",
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Python",
        "FastAPI",
      ],
      // PENDÊNCIA A5 — deploy público não confirmado.
      deployUrl: null,
      isAcademic: false,
      repositoryUrl: "https://github.com/guilhermehcaguiar/AutoShop-Payables",
    },
    {
      key: "autofilter-search",
      name: "AutoFilter Search",
      type: "Sistema interno",
      description:
        "Sistema local de consulta de filtros e aplicações automotivas, com busca guiada por veículo e referências cruzadas.",
      technologies: ["Python", "Streamlit", "Pandas"],
      // PENDÊNCIA A5 — deploy público não confirmado (uso interno/local).
      deployUrl: null,
      isAcademic: false,
      repositoryUrl: "https://github.com/guilhermehcaguiar/AutoFilter-Search",
    },
  ],
  secondary: [
    {
      key: "vetcare",
      name: "VetCare",
      type: "Sistema veterinário",
      description:
        "Sistema acadêmico de gestão veterinária com gerenciamento de consultas, pacientes, tutores e prontuários.",
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Python",
        "Django",
        "Django REST Framework",
      ],
      // PENDÊNCIA A5 — deploy público não confirmado.
      deployUrl: null,
      isAcademic: true,
      repositoryUrl: "https://github.com/guilhermehcaguiar/VetCare",
    },
    {
      key: "translog",
      name: "TransLog",
      type: "Sistema de logística",
      description:
        "Sistema acadêmico para centralizar veículos, motoristas e ocorrências de uma operação de transporte.",
      technologies: ["React", "JavaScript", "Vite", "React Router"],
      // Repositório do colaborador arthurniceass-jpg (Guilherme participa
      // como colaborador) — URL verificada pelo usuário, não alterar.
      // PENDÊNCIA A5 — deploy público não confirmado.
      deployUrl: null,
      isAcademic: true,
      repositoryUrl: "https://github.com/arthurniceass-jpg/translog",
    },
    {
      key: "forma-store",
      name: "FORMA Store",
      type: "Loja institucional",
      description:
        "E-commerce acadêmico de moda oversized com catálogo, carrinho, autenticação demonstrativa e área de conta.",
      technologies: ["React", "JavaScript", "Vite", "React Router"],
      // PENDÊNCIA A5 — deploy público não confirmado.
      deployUrl: null,
      isAcademic: true,
      repositoryUrl: "https://github.com/guilhermehcaguiar/forma-store",
    },
    {
      key: "orbit",
      name: "Orbit",
      type: "Sistema Integrado Estudantil",
      description:
        "Plataforma para organizar matérias, tarefas, provas, horários e produtividade estudantil.",
      technologies: [
        "TypeScript",
        "Next.js",
        "React",
        "Tailwind CSS",
        "NestJS",
        "Fastify",
        "PostgreSQL",
        "Drizzle ORM",
      ],
      // PENDÊNCIA A5 — deploy público não confirmado.
      deployUrl: null,
      isAcademic: false,
      repositoryUrl: "https://github.com/guilhermehcaguiar/orbit",
    },
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

export const contactChannels: ContactChannel[] = [
  {
    key: "github",
    label: "GitHub",
    handle: "github.com/guilhermehcaguiar",
    href: githubProfileUrl,
    icon: "github",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    handle: "in/guilhermehcaguiar",
    href: "https://www.linkedin.com/in/guilhermehcaguiar",
    icon: "linkedin",
  },
  // PENDÊNCIA A3 — e-mail a fornecer; preencher href com "mailto:" + endereço.
  {
    key: "email",
    label: "E-mail",
    handle: null,
    href: null,
    icon: "mail",
  },
];
