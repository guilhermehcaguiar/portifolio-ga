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
  links: ProjectLink[];
}

export interface ProjectsData {
  main: Project[];
  secondary: Project[];
}
