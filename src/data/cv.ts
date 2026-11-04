// Edite este ficheiro com os seus dados. Tudo o que aparece na secção "CV" vem daqui.
// Não coloque aqui dados sensíveis (telefone, morada): o site é público.

// Foto de perfil (quadrada, em src/assets/). Para esconder, use `photo: undefined`.
import photo from '../assets/profile.jpg';

export const profile = {
  name: 'João Costa',
  role: 'Engenheiro Informático',
  tagline:
    'Licenciado em Engenharia Informática e mestrando em Inteligência Artificial. Orientado por dados, a crescer como Data Engineer e especialista em IA.',
  location: 'Lisboa, Portugal',
  photo,
  // Deixe vazio ('') para não mostrar o email no site.
  email: '',
  links: [{ label: 'GitHub', href: 'https://github.com/CostinhaJ' }],
};

export const about =
  'Mudei-me para Lisboa para aprofundar os meus conhecimentos de tecnologia e acabei por me licenciar ' +
  'em Engenharia Informática no ISCTE, onde estou atualmente a fazer a investigação para a minha tese ' +
  'de mestrado em Inteligência Artificial. Sou orientado por dados e procuro crescer como Data Engineer ' +
  'e especialista em IA.';

// Entradas de Experiência, Associativismo e Voluntariado.
// `summary` e `highlights` (lista de pontos) são opcionais.
type Entry = { role: string; company: string; period: string; summary?: string; highlights?: string[] };

// Listas vazias escondem a secção respetiva.
export const experience: Entry[] = [];

export const associativism: Entry[] = [
  {
    role: 'Developer — Departamento de IT',
    company: 'AEISCTE — Associação de Estudantes do Iscte',
    period: '2024 — presente',
    highlights: [
      'Melhoria do website da AE (em desenvolvimento)',
      'Plataforma de inscrições e pagamentos do evento anual IscteVillage (em desenvolvimento)',
      'Plataforma de gestão de sócios e descontos da AE (em desenvolvimento)',
    ],
  },
  {
    role: 'Responsável de Equipa — Secção de Desporto',
    company: 'AEISCTE — Associação de Estudantes do Iscte',
    period: '2023',
    highlights: [
      'Gestor de treinos e jogos das equipas de voleibol feminina e masculina da AEISCTE',
      'Responsável pelo evento interno de atletas da AEISCTE',
      'Colaborador na Semana do Desporto do Iscte, no Festival do Caloiro e na Festa de Natal da AEISCTE',
    ],
  },
];

export const volunteering: Entry[] = [
  {
    role: 'Membro da equipa de montagem',
    company: 'Unidade de Saúde de Ilha Terceira',
    period: '2022',
    summary: 'Montagem do Centro de Vacinação Covid-19.',
  },
];

export const education = [
  {
    degree: 'Mestrado em Inteligência Artificial',
    school: 'ISCTE — Instituto Universitário de Lisboa',
    period: '2024 — presente',
  },
  {
    degree: 'Licenciatura em Engenharia Informática',
    school: 'ISCTE — Instituto Universitário de Lisboa',
    period: '2021 — 2024',
  },
];

export const skills = [
  // IA e dados
  'Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'TensorFlow', 'Keras', 'PyTorch', 'Reinforcement Learning',
  // Desenvolvimento
  'Java', 'JavaScript', 'PHP', 'Django', 'Flutter',
  // Dados e infraestrutura
  'MySQL', 'MongoDB', 'MQTT', 'Docker', 'Kubernetes',
  // Processo
  'Git', 'Scrum',
];

export const languages = [
  { name: 'Português', level: 'Nativo' },
  { name: 'Inglês', level: 'Avançado' },
];
