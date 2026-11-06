// Edite este ficheiro com os seus dados. Tudo o que aparece na secção "CV" vem daqui.
// Não coloque aqui dados sensíveis (telefone, morada): o site é público.
//
// Idiomas: qualquer texto pode ser uma string simples (igual em PT e EN)
// ou um objeto { pt: '...', en: '...' } com a versão de cada idioma.
// URLs dentro dos `highlights` ficam automaticamente clicáveis.
import type { L } from '../i18n';

// Foto de perfil (quadrada, em src/assets/). Para esconder, use `photo: undefined`.
import photo from '../assets/profile.jpg';

export const profile = {
  name: 'João Costa',
  role: { pt: 'Engenheiro Informático', en: 'Computer Engineer' } as L,
  tagline: {
    pt: 'BSc - Engenharia Informática & MSc - Inteligência Artificial. Orientado por dados, a crescer como Data Engineer e especialista em IA.',
    en: 'BSc in Computer Engineering & MSc in Artificial Intelligence. Data-driven, growing as a Data Engineer and AI specialist.',
  } as L,
  location: { pt: 'Lisboa, Portugal', en: 'Lisbon, Portugal' } as L,
  photo,
  // Deixe vazio ('') para não mostrar o email no site.
  email: '',
  links: [{ label: 'GitHub', href: 'https://github.com/CostinhaJ' }],
};

export const about: L = {
  pt:
    'Mudei-me para Lisboa para aprofundar os meus conhecimentos de tecnologia e acabei por me licenciar ' +
    'em Engenharia Informática no ISCTE, onde estou atualmente a fazer a investigação para a minha tese ' +
    'de mestrado em Inteligência Artificial. Sou orientado por dados e procuro crescer como Data Engineer ' +
    'e especialista em IA.',
  en:
    'I moved to Lisbon to deepen my knowledge of technology and ended up graduating in Computer Engineering ' +
    "at ISCTE, where I am currently researching my Master's thesis in Artificial Intelligence. I am " +
    'data-driven and looking to grow as a Data Engineer and AI specialist.',
};

// Entradas de Experiência, Associativismo e Voluntariado.
// `summary` e `highlights` (lista de pontos) são opcionais.
export type Entry = { role: L; company: L; period: L; summary?: L; highlights?: L[] };

const aeiscte: L = {
  pt: 'AEISCTE — Associação de Estudantes do Iscte',
  en: "AEISCTE — Iscte Students' Association",
};

// Listas vazias escondem a secção respetiva.
export const experience: Entry[] = [];

export const associativism: Entry[] = [
  {
    role: { pt: 'Developer — Departamento de IT', en: 'Developer — IT Department' },
    company: aeiscte,
    period: '2024',
    highlights: [
      {
        pt: 'Melhoria do website da AE https://aeiscte-iul.pt/',
        en: "Improvement of the association's website https://aeiscte-iul.pt/",
      },
      {
        pt: 'Front-end Informativo do evento anual Cerimónia de Finalistas https://cerimoniafinalistas.web.app/',
        en: 'Informational front-end for the annual Graduation Ceremony https://cerimoniafinalistas.web.app/',
      },
      {
        pt: 'Plataforma de gestão de sócios e descontos da AE https://aeiscte-socios.web.app/',
        en: 'Membership and discount management platform for the association https://aeiscte-socios.web.app/',
      },
    ],
  },
  {
    role: { pt: 'Responsável de Equipa — Secção de Desporto', en: 'Team Lead — Sports Section' },
    company: aeiscte,
    period: '2023',
    highlights: [
      {
        pt: 'Gestor de treinos e jogos das equipas de voleibol feminina e masculina da AEISCTE',
        en: "Training and match manager for the AEISCTE women's and men's volleyball teams",
      },
      {
        pt: 'Responsável pelo evento interno de atletas da AEISCTE',
        en: "Responsible for the AEISCTE internal athletes' event",
      },
      {
        pt: 'Colaborador na Semana do Desporto do Iscte, no Festival do Caloiro e na Festa de Natal da AEISCTE',
        en: "Collaborator at the Iscte Sports Week, the Freshers' Festival and the AEISCTE Christmas Party",
      },
    ],
  },
];

export const volunteering: Entry[] = [
  {
    role: { pt: 'Membro da equipa de montagem', en: 'Member of the assembly team' },
    company: { pt: 'Unidade de Saúde de Ilha Terceira', en: 'Terceira Island Health Unit' },
    period: '2022',
    summary: {
      pt: 'Montagem do Centro de Vacinação Covid-19.',
      en: 'Setting up the Covid-19 Vaccination Centre.',
    },
  },
];

const iscte: L = {
  pt: 'ISCTE — Instituto Universitário de Lisboa',
  en: 'ISCTE — University Institute of Lisbon',
};

export const education: { degree: L; school: L; period: L }[] = [
  {
    degree: { pt: 'Mestrado em Inteligência Artificial', en: "Master's in Artificial Intelligence" },
    school: iscte,
    period: { pt: '2024 — presente', en: '2024 — present' },
  },
  {
    degree: { pt: 'Licenciatura em Engenharia Informática', en: "Bachelor's in Computer Engineering" },
    school: iscte,
    period: '2021 — 2024',
  },
];

export const skills: L[] = [
  // IA e dados
  'Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'TensorFlow', 'Keras', 'PyTorch', 'Reinforcement Learning',
  // Desenvolvimento
  'Java', 'JavaScript', 'PHP', 'Django', 'Flutter',
  // Dados e infraestrutura
  'MySQL', 'MongoDB', 'MQTT', 'Docker', 'Kubernetes',
  // Processo
  'Git', 'Scrum',
];

export const languages: { name: L; level: L }[] = [
  { name: { pt: 'Português', en: 'Portuguese' }, level: { pt: 'Nativo', en: 'Native' } },
  { name: { pt: 'Inglês', en: 'English' }, level: { pt: 'Avançado', en: 'Advanced' } },
];
