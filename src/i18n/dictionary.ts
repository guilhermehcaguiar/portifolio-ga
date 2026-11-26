export interface Dictionary {
  nav: {
    projects: string;
    about: string;
    stack: string;
    contact: string;
    label: string;
    open: string;
    close: string;
    language: string;
    resume: string;
  };
  skip: string;
  newTab: string;
  hero: {
    kicker: string;
    description: string;
    projects: string;
    contact: string;
    featured: string;
  };
  projects: {
    title: string;
    lede: string;
    featured: string;
    academic: string;
    others: string;
    website: string;
    repository: string;
    context: string;
    contribution: string;
    result: string;
    unavailable: string;
    gallery: string;
    homeImage: string;
    catalogImage: string;
    cartImage: string;
    enlarge: string;
    closeImage: string;
    loadingImage: string;
    imageError: string;
    retryImage: string;
    technologies: string;
  };
  about: { title: string; focus: string };
  stack: { title: string; lede: string };
  beyond: { title: string; lede: string };
  contact: { title: string; lede: string; email: string; resume: string };
  footer: { built: string; top: string; label: string };
  seo: { title: string; description: string };
}
