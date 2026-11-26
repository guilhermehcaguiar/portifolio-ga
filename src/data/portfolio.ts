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
    "Sou desenvolvedor de software e estou no quarto período de Ciência da Computação. No estágio em TI, trabalhei com suporte técnico, hardware e sistemas internos. Também desenvolvo aplicações web completas e já usei automação para simplificar rotinas de trabalho.",
    "Num projeto, começo por entender quem vai usar a aplicação e onde o problema aparece. Depois acompanho o caminho dos dados entre a interface, as regras de negócio e o banco. Quando surge uma dúvida, consulto a documentação e faço um teste pequeno para entender o que está acontecendo.",
  ],
  focusAreas: [
    "Desenvolvimento full-stack",
    "Arquitetura e integração de sistemas",
    "IA e aprendizado de máquina",
    "Linux e infraestrutura",
    "Segurança de aplicações",
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
      // A lista descreve a stack do site público.
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
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Python",
        "FastAPI",
        "SQLAlchemy",
        "PostgreSQL",
      ],
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
  spotlight: [
    {
      key: "beyond-the-prompt",
      name: "Beyond the Prompt",
      type: "Plataforma educacional sobre IA",
      description:
        "Projeto de extensão da Uninassau para ensinar estudantes do ensino médio a usar inteligência artificial com responsabilidade. Reúne uma oficina, uma trilha de estudos, um laboratório e um quiz.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Lucide"],
      deployUrl: "https://beyondtheprompt-ia.vercel.app/",
      isAcademic: true,
      repositoryUrl: "https://github.com/guilhermehcaguiar/beyondtheprompt",
      image: "/projetos/beyond-the-prompt.webp",
      imageAlt: "Arte do Beyond the Prompt com um diagrama de rede neural e referência à trilha, ao laboratório e ao quiz.",
    },
    {
      key: "translog",
      name: "TransLog",
      type: "Sistema de logística",
      description:
        "Sistema acadêmico para centralizar veículos, motoristas e ocorrências de uma operação de transporte.",
      technologies: [
        "React",
        "JavaScript",
        "Vite",
        "React Router",
        "Java",
        "Spring Boot",
        "PostgreSQL",
      ],
      deployUrl: "https://translogbr.vercel.app/",
      isAcademic: true,
      repositoryUrl: "https://github.com/arthurniceass-jpg/translog",
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
        "React Router",
        "Tailwind CSS",
        "Python",
        "Django",
        "Django REST Framework",
        "SQLite",
      ],
      // PENDÊNCIA A5 — deploy público não confirmado.
      deployUrl: null,
      isAcademic: true,
      repositoryUrl: "https://github.com/guilhermehcaguiar/VetCare",
    },
    {
      key: "forma-store",
      name: "FORMA Store",
      type: "Loja institucional",
      description:
        "E-commerce acadêmico de moda oversized com catálogo, carrinho, autenticação demonstrativa e área de conta.",
      technologies: [
        "React",
        "JavaScript",
        "Vite",
        "React Router",
        "Node.js",
        "Express",
        "PostgreSQL",
      ],
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
      "Meus projetos autorais partem de problemas como organizar tarefas ou acompanhar contas. Neles, testo tecnologias e ajusto a aplicação até ela servir à rotina para a qual foi pensada.",
    icon: "git-branch",
    link: null,
  },
  {
    key: "eletronica",
    title: "Eletrônica",
    description:
      "Na eletrônica, estudo como microcontroladores leem sensores e controlam dispositivos. Gosto de investigar esse caminho na prática, da leitura do sinal à resposta de um sistema embarcado.",
    icon: "cpu",
    link: null,
  },
  {
    key: "linux",
    title: "Linux",
    description:
      "Uso Linux para desenvolver e monto meu ambiente com ferramentas de terminal e de código aberto. Ajustar esse ambiente me ajuda a entender o que acontece por trás dos comandos.",
    icon: "terminal",
    link: null,
  },
  {
    key: "automacao",
    title: "Automação",
    description:
      "Quando uma rotina exige copiar ou conferir os mesmos dados à mão, avalio o que o software pode assumir. Conectar os sistemas costuma eliminar etapas manuais e reduzir retrabalho.",
    icon: "zap",
    link: null,
  },
  {
    key: "ia-local",
    title: "IA e modelos locais",
    description:
      "Executo modelos no meu computador para entender como se comportam, onde erram e em que tarefas podem ajudar. Esses experimentos dão contexto ao que estudo sobre aprendizado de máquina.",
    icon: "bot",
    link: null,
  },
  {
    key: "ciberseguranca",
    title: "Cibersegurança",
    description:
      "Penso em segurança ao decidir quais dados guardar e quem deve acessá-los. Estudo vulnerabilidades comuns e o que posso fazer no desenvolvimento para reduzir esses riscos.",
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
  "beyond-the-prompt": {
    type: "AI education platform",
    description:
      "A Uninassau university outreach project that teaches high school students to use artificial intelligence responsibly. It offers a workshop, a learning path, a lab and a quiz.",
    imageAlt:
      "Beyond the Prompt artwork with a neural network diagram and references to the learning path, lab and quiz.",
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
        "I start personal projects with problems like keeping track of tasks or managing bills. I try new tools along the way and judge the result by how well it fits the routine I built it for.",
    },
    eletronica: {
      title: "Electronics",
      description:
        "I study how microcontrollers read sensors and control devices. What I enjoy about electronics is tracing how an embedded system turns a sensor reading into a response.",
    },
    linux: {
      title: "Linux",
      description:
        "Linux is my development environment. I build my setup around command-line and open-source tools, and customizing it helps me understand what the system does when I run a command.",
    },
    automacao: {
      title: "Automation",
      description:
        "When a workflow involves copying or checking the same data by hand, I look for a step software can take over. Connecting the systems can cut down on repeat work.",
    },
    "ia-local": {
      title: "AI and local models",
      description:
        "Running models on my own computer lets me see how they behave, where they fail and which tasks they can help with. Those experiments ground my study of machine learning.",
    },
    ciberseguranca: {
      title: "Cybersecurity",
      description:
        "Security shapes decisions about what data to store and who should have access. I study common vulnerabilities and the choices I can make during development to reduce those risks.",
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
            "I’m a software developer in my fourth semester of a computer science degree. My IT internship gave me hands-on experience with technical support, hardware and internal systems. I also build complete web applications and have used automation to simplify workflows.",
            "I start a project by finding out who will use it and where the problem shows up. From there, I trace how data moves through the interface, application logic and database. If I’m unsure how something works, I read the documentation and put together a small test.",
          ],
          focusAreas: [
            "Full-stack development",
            "Software architecture and integration",
            "AI and machine learning",
            "Linux and infrastructure",
            "Application security",
          ],
        }
      : about,
    projects: {
      main: projects.main.map(localizeProject),
      spotlight: projects.spotlight.map(localizeProject),
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
