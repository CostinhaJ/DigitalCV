// Idiomas do site: português (/) e inglês (/en/).

export type Lang = 'pt' | 'en';
export const langs: Lang[] = ['pt', 'en'];

// Texto traduzível: uma string simples é igual nos dois idiomas;
// um objeto { pt, en } tem uma versão para cada idioma.
export type L = string | { pt: string; en: string };
export const tr = (value: L, lang: Lang): string =>
  typeof value === 'string' ? value : value[lang];

// Endereço da página inicial de cada idioma (respeita o base path do GitHub Pages).
export const homePath = (lang: Lang): string => {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  return lang === 'pt' ? base : `${base}en/`;
};

export const htmlLang: Record<Lang, string> = { pt: 'pt-PT', en: 'en' };

// Textos fixos da interface.
export const ui = {
  pt: {
    navLabel: 'Principal',
    langLabel: 'Idioma',
    nav: { cv: 'CV', projects: 'Projetos', contact: 'Contacto' },
    viewProjects: 'Ver projetos',
    readCv: 'Ler CV',
    photoAlt: 'Fotografia de',
    projects: 'Projetos',
    groups: { pessoal: 'Os Meus Trabalhos', universidade: 'Trabalhos da Universidade' },
    contact: 'Contacto',
    contactEmail: 'Quer falar comigo? Escreva-me.',
    contactLinks: 'Quer falar comigo? Encontre-me aqui.',
    sections: {
      experience: 'Experiência',
      associativism: 'Associativismo',
      volunteering: 'Voluntariado',
      education: 'Formação',
      skills: 'Competências',
      languages: 'Línguas',
    },
    links: {
      video: { button: 'Ver vídeo', badge: '▶ Vídeo' },
      website: { button: 'Visitar website', badge: '↗ Online' },
      repo: { button: 'Ver código', badge: '</> Código' },
    },
    screenshotAlt: 'Captura do projeto',
  },
  en: {
    navLabel: 'Main',
    langLabel: 'Language',
    nav: { cv: 'CV', projects: 'Projects', contact: 'Contact' },
    viewProjects: 'View projects',
    readCv: 'Read CV',
    photoAlt: 'Photo of',
    projects: 'Projects',
    groups: { pessoal: 'My Projects', universidade: 'University Projects' },
    contact: 'Contact',
    contactEmail: 'Want to talk? Write to me.',
    contactLinks: 'Want to talk? Find me here.',
    sections: {
      experience: 'Experience',
      associativism: 'Student Associations',
      volunteering: 'Volunteering',
      education: 'Education',
      skills: 'Skills',
      languages: 'Languages',
    },
    links: {
      video: { button: 'Watch video', badge: '▶ Video' },
      website: { button: 'Visit website', badge: '↗ Online' },
      repo: { button: 'View code', badge: '</> Code' },
    },
    screenshotAlt: 'Screenshot of',
  },
} as const;
