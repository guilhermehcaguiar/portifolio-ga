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
