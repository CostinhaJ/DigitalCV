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

// Deixe a lista vazia para esconder a secção "Experiência".
export const experience: { role: string; company: string; period: string; summary: string }[] = [];

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
