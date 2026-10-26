import type {
  AboutData,
  BeyondInterest,
  ContactChannel,
  ExperienceItem,
  HeroData,
  PersonData,
  ProjectsData,
  StackCategory,
  ProjectKey,
  Project,
} from "@/types/portfolio";
import type { Locale } from "@/i18n/config";

// Única fonte da URL do perfil GitHub (A5: unificação — Hero, Footer,
// contato e person.sameAs referenciam esta constante).
export const githubProfileUrl = "https://github.com/guilhermehcaguiar";
export const email = "guilherme.ghca@hotmail.com";
export const linkedinProfileUrl =
  "https://www.linkedin.com/in/guilhermehcaguiar";

// Identidade do site — consumida pelo JSON-LD (layout.tsx) e metadados.
// jobTitle consolidado no site atual (kicker do Hero + description do layout);
// descrição derivada da bio pública verificada; sameAs verificados.
export const person: PersonData = {
  name: "Guilherme Aguiar",
  jobTitle: "Software Developer",
  description:
    "Desenvolvedor de software e estudante de Ciência da Computação, com projetos atuais principalmente em front-end por influência da faculdade, aprofundando estudos em Java e Python e explorando Machine Learning, cibersegurança, hardware e automação.",
  sameAs: [githubProfileUrl, linkedinProfileUrl],
};

// Identidade e resumo baseados nas informações confirmadas pelo usuário.
export const hero: HeroData = {
  kicker: "Software Developer",
  firstName: "Guilherme",
  lastName: "Aguiar",
  quote:
    "Meus projetos atuais se concentram em front-end, muito por conta da faculdade, enquanto aprofundo meus estudos em Java, Python e outras áreas da computação.",
};

// Conteúdo baseado no perfil verificado e nas informações confirmadas pelo usuário.
export const about: AboutData = {
  paragraphs: [
    "Sou Guilherme Aguiar, desenvolvedor de software e estudante de Ciência da Computação. Meu interesse por tecnologia envolve lógica de programação, construção de sistemas e resolução de problemas, conectando fundamentos da computação a aplicações práticas.",
    "Atualmente, desenvolvo principalmente projetos de front-end, muito por conta das atividades da faculdade, e sigo aprofundando minha prática com React. Essa experiência se soma à minha trajetória em TI, ao desenvolvimento web e às automações em Python para processos de negócio, com projetos que vão de ferramentas de consulta a aplicações de e-commerce e produtividade estudantil.",
    "No Alambrado, fui responsável por todo o planejamento, desenvolvimento e deploy. Acompanhar uma ideia até sua publicação me permite conectar apresentação, navegação e implementação em um mesmo projeto.",
    "Também aprofundo meus estudos em Java e Python e tenho muito interesse em Machine Learning e cibersegurança. Exploro hardware e automação para ampliar minha compreensão sobre como software, dispositivos e sistemas se conectam. Aprendo construindo e uso cada projeto como oportunidade de aprofundar fundamentos e experimentar soluções em diferentes áreas da computação.",
  ],
  focusAreas: [
    "Front-end com React",
    "Java",
    "Python",
    "Machine Learning",
    "Cibersegurança",
  ],
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
        "Uma experiência de e-commerce dedicada a camisas de futebol, com identidade própria, catálogo por ligas e um caminho de compra que termina no WhatsApp.",
      context:
        "Organizar a apresentação de uma marca de camisas de futebol e conectar a descoberta dos produtos ao atendimento para fechar o pedido.",
      contribution:
        "Responsável integral pelo planejamento, desenvolvimento e deploy do site, da organização das páginas à publicação na Vercel.",
      result:
        "Site público com navegação por coleções e ligas, páginas de produto, seleção de tamanho e carrinho com finalização pelo WhatsApp.",
      image: "/projetos/alambrado.webp",
      imageAlt:
        "Página inicial do Alambrado, com identidade própria e catálogo de camisas de futebol.",
      // URL e autoria integral confirmadas pelo usuário em 26/10/2026.
      // Stack confirmada no README do repositório público em 26/10/2026.
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "Vercel",
      ],
      isFeatured: true,
      isAcademic: false,
      deployUrl: "https://alambradowear.vercel.app/",
      repositoryUrl: "https://github.com/guilhermehcaguiar/alambrado",
    },
    {
      key: "autoshop-payables",
      context:
        "Organizar informações financeiras e facilitar o acompanhamento de rotinas administrativas recorrentes.",
      result:
        "Em uso na operação, trouxe uma melhora substancial na rapidez do processo de contas a pagar e no planejamento financeiro, reunindo contas, fornecedores e relatórios em um mesmo fluxo.",
      name: "AutoShop Payables",
      type: "Sistema interno",
      // Descrição autorizada com base no README público. Confidencialidade:
      // sem credenciais, dados internos ou detalhes operacionais.
      description:
        "Sistema de gestão financeira em operação, desenvolvido para controle de contas a pagar, fornecedores, relatórios e rotinas administrativas.",
      technologies: ["React", "Vite", "Tailwind CSS", "Python", "FastAPI"],
      // Uso operacional confirmado pelo usuário; URL de acesso público não fornecida.
      deployUrl: null,
      isAcademic: false,
      repositoryUrl: "https://github.com/guilhermehcaguiar/AutoShop-Payables",
    },
    {
      key: "autofilter-search",
      context:
        "Reunir dados de aplicações automotivas e referências de filtros para consulta no dia a dia.",
      result:
        "Melhora o fluxo de consulta e a assertividade na identificação das referências de filtros, com busca guiada por veículo e referências cruzadas.",
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
      // URL anterior retornou 404 público; aguarda novo destino confirmado.
      deployUrl: null,
      isAcademic: true,
      repositoryUrl: null,
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
  {
    key: "linguagens",
    title: "Linguagens",
    items: ["TypeScript", "JavaScript", "Python", "Java"],
  },
  {
    key: "frontend",
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  { key: "backend", title: "Backend", items: ["Node.js"] },
  // Java, SQL e Git confirmados pelo usuário; sem inferir SGBD ou framework Java.
  { key: "banco-de-dados", title: "Banco de dados", items: ["SQL"] },
  { key: "ferramentas", title: "Ferramentas", items: ["Git"] },
  {
    key: "explorando",
    title: "Explorando",
    items: [
      "Inteligência Artificial",
      "Machine Learning",
      "Cibersegurança",
      "Hardware",
      "Automação",
    ],
  },
];

export const beyondInterests: BeyondInterest[] = [
  // Descrições editoriais baseadas nos interesses já confirmados; sem alegar experiência adicional.
  // Ícones Lucide substituídos (registrado no relatório da A3.3):
  // folder-git-2 → git-branch; brain-circuit → bot.
  {
    key: "projetos-pessoais",
    title: "Projetos pessoais",
    description:
      "Um espaço para transformar ideias em aplicações e continuar aprendendo na prática.",
    icon: "git-branch",
    link: null,
  },
  {
    key: "eletronica",
    title: "Eletrônica",
    description:
      "Exploração de hardware e eletrônica, conectando o estudo de componentes ao funcionamento dos dispositivos e à interação com software.",
    icon: "cpu",
    link: null,
  },
  {
    key: "linux",
    title: "Linux",
    description:
      "Curiosidade por sistemas, ferramentas e possibilidades de personalização do ambiente de desenvolvimento.",
    icon: "terminal",
    link: null,
  },
  {
    key: "automacao",
    title: "Automação",
    description:
      "Exploração de automação para conectar software e rotinas práticas, organizar processos e reduzir tarefas repetitivas.",
    icon: "zap",
    link: null,
  },
  {
    key: "ia-local",
    title: "Machine Learning e IA local",
    description:
      "Interesse em Machine Learning, no funcionamento de modelos e nas possibilidades de executá-los no ambiente local.",
    icon: "bot",
    link: null,
  },
  {
    key: "ciberseguranca",
    title: "Cibersegurança",
    description:
      "Interesse em compreender como proteger sistemas e informações e desenvolver uma visão de segurança na construção de software.",
    icon: "shield",
    link: null,
  },
];

// Traduções obrigatórias por ID estável; fatos e destinos permanecem únicos.
type ProjectCopy = Pick<
  Project,
  "type" | "description" | "context" | "contribution" | "result" | "imageAlt"
>;
const englishProjects: Record<ProjectKey, ProjectCopy> = {
  alambrado: {
    type: "Football jersey e-commerce",
    description:
      "A football jersey shopping experience with its own identity, a league-based catalog and an order flow that ends on WhatsApp.",
    context:
      "Present a football jersey brand online and connect product discovery to customer service for placing an order.",
    contribution:
      "Solely responsible for planning, developing and deploying the website, from organizing its pages to publishing on Vercel.",
    result:
      "A public website with collections and leagues, product pages, size selection and a cart with WhatsApp checkout.",
    imageAlt:
      "Alambrado homepage with its brand identity and football jersey catalog.",
  },
  "autoshop-payables": {
    type: "Internal system",
    description:
      "A financial management system in operational use for accounts payable, suppliers, reporting and administrative routines.",
    context:
      "Organize financial information and make recurring administrative workflows easier to follow.",
    result:
      "In operational use, it has substantially improved the speed of the accounts payable process and financial planning, bringing accounts, suppliers and reports into a single workflow.",
  },
  "autofilter-search": {
    type: "Internal system",
    description:
      "A local tool for looking up automotive filters and applications, with vehicle-guided search and cross-references.",
    context:
      "Bring together automotive application data and filter references for everyday lookup.",
    result:
      "Improves the lookup workflow and accuracy when identifying filter references, with vehicle-guided search and cross-references.",
  },
  vetcare: {
    type: "Veterinary system",
    description:
      "An academic veterinary management system covering appointments, patients, owners and medical records.",
  },
  translog: {
    type: "Logistics system",
    description:
      "A collaborative academic project centralizing vehicles, drivers and incidents for a transportation operation.",
  },
  "forma-store": {
    type: "Institutional store",
    description:
      "An academic oversized-fashion e-commerce project with a catalog, cart, demo authentication and account area.",
  },
  orbit: {
    type: "Student organization platform",
    description:
      "A platform for organizing courses, assignments, exams, schedules and student productivity.",
  },
};

const englishInterests: Record<string, { title: string; description: string }> =
  {
    "projetos-pessoais": {
      title: "Personal projects",
      description:
        "A space to turn ideas into applications and keep learning through practice.",
    },
    eletronica: {
      title: "Electronics",
      description:
        "Exploring hardware and electronics, connecting the study of components to how devices work and interact with software.",
    },
    linux: {
      title: "Linux",
      description:
        "Curiosity about systems, tools and ways to customize a development environment.",
    },
    automacao: {
      title: "Automation",
      description:
        "Exploring automation to connect software with practical routines, organize processes and reduce repetitive tasks.",
    },
    "ia-local": {
      title: "Machine Learning and local AI",
      description:
        "An interest in Machine Learning, how models work and the possibilities of running them locally.",
    },
    ciberseguranca: {
      title: "Cybersecurity",
      description:
        "An interest in understanding how to protect systems and information and bringing a security perspective to software development.",
    },
  };

export function getPortfolio(locale: Locale) {
  const isEnglish = locale === "en";
  const localizeProject = (project: Project): Project =>
    isEnglish ? { ...project, ...englishProjects[project.key] } : project;
  const categoryTitles: Record<string, string> = {
    linguagens: "Languages",
    frontend: "Frontend",
    backend: "Backend",
    "banco-de-dados": "Databases",
    ferramentas: "Tools",
    explorando: "Exploring",
  };
  return {
    about: isEnglish
      ? {
          paragraphs: [
            "I’m Guilherme Aguiar, a software developer and Computer Science student. My interest in technology includes programming logic, building systems and solving problems, connecting computing fundamentals to practical applications.",
            "Most of my current projects focus on front-end development, largely through university coursework, and I continue to deepen my practice with React. This builds on my background in IT, web development and Python automation for business processes, with projects ranging from lookup tools to e-commerce and student productivity applications.",
            "For Alambrado, I handled all planning, development and deployment. Taking an idea through to publication lets me connect presentation, navigation and implementation within one project.",
            "I’m also deepening my knowledge of Java and Python and have a strong interest in Machine Learning and cybersecurity. I explore hardware and automation to broaden my understanding of how software, devices and systems connect. I learn by building and use each project to strengthen my foundations and try solutions across different areas of computing.",
          ],
          focusAreas: [
            "Front-end with React",
            "Java",
            "Python",
            "Machine Learning",
            "Cybersecurity",
          ],
        }
      : about,
    projects: {
      main: projects.main.map(localizeProject),
      secondary: projects.secondary.map(localizeProject),
    },
    stack: stack.map((category) => ({
      ...category,
      title: isEnglish ? categoryTitles[category.key] : category.title,
      items: category.items.map((item) =>
        isEnglish
          ? ((
              {
                "Inteligência Artificial": "Artificial Intelligence",
                Cibersegurança: "Cybersecurity",
                Automação: "Automation",
              } as Record<string, string>
            )[item] ?? item)
          : item,
      ),
    })),
    interests: beyondInterests.map((interest) =>
      isEnglish ? { ...interest, ...englishInterests[interest.key] } : interest,
    ),
    channels: contactChannels.map((channel) =>
      isEnglish && channel.key === "email"
        ? { ...channel, label: "Email" }
        : channel,
    ),
  };
}

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
    href: linkedinProfileUrl,
    icon: "linkedin",
  },
  // Endereço confirmado pelo usuário em 26/10/2026.
  {
    key: "email",
    label: "E-mail",
    handle: email,
    href: `mailto:${email}`,
    icon: "mail",
  },
];
