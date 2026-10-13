export interface AboutData {
  paragraphs: string[];
  focusAreas: string[];
}

export interface ExperienceItem {
  role: string | null;
  company: string | null;
  period: string | null;
  summary: string | null;
  contributions: string[];
}

export interface ProjectLink {
  label: string; // rótulo exibido (ex.: "Repositório", "Site")
  href: string | null; // null = pendente → NÃO renderiza como clicável
}

export interface Project {
  key: string;
  name: string;
  type: string | null;
  description: string | null;
  technologies: string[];
  isFeatured?: boolean;
  isAcademic: boolean; // projeto acadêmico → exibe tag discreta "Acadêmico" (não inferir por type/descrição)
  deployUrl: string | null; // site público ativo — destino principal do card (A5)
  repositoryUrl: string | null; // repositório GitHub verificado
}

export interface ProjectsData {
  main: Project[];
  secondary: Project[];
}

export interface StackCategory {
  key: string;
  title: string;
  items: string[];
}

export interface BeyondInterest {
  key: string;
  title: string;
  description: string | null; // pendente → não renderiza
  icon: string; // nome Lucide resolvido pelo componente
  link: ProjectLink | null; // href null = não clicável
}

export interface ContactChannel {
  key: string;
  label: string; // rótulo exibido (ex.: "GitHub", "LinkedIn", "E-mail")
  handle: string | null; // texto secundário (ex.: "github.com/guilhermehcaguiar")
  href: string | null; // null = pendente → card não renderiza
  icon: string; // nome Lucide resolvido pelo componente
}

export interface PersonData {
  name: string;
  jobTitle: string | null; // apenas nomenclatura já consolidada no site
  description: string | null; // derivada da bio pública verificada
  sameAs: string[]; // perfis verificados (GitHub, LinkedIn)
}

export interface HeroData {
  kicker: string; // rótulo profissional acima do nome
  firstName: string; // "Guilherme"
  lastName: string; // "Aguiar"
  quote: string; // citação profissional
}
