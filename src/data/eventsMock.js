import { createEvent } from "../models/EventModel";

export const eventsMock = [
  createEvent({
    id: "1",
    title: "TecRock - 3ª edição",
    category: "Música",
    place: "Auditório Fatec",
    date: "24 Maio",
    time: "19:00",
    organizer: "Atlética Fatec",
    tag: "ROCK",
    accent: "#D92929",
    banner: "#1B0F12",
    description:
      "Evento musical universitário com bandas da faculdade, convidados especiais e uma noite preparada para conectar alunos por meio da música.",
  }),
  createEvent({
    id: "2",
    title: "Hackathon UniEvent",
    category: "Tecnologia",
    place: "Laboratório 4",
    date: "10 Junho",
    time: "09:00",
    organizer: "Coordenação ADS",
    tag: "HACKATHON",
    accent: "#4B6BFF",
    banner: "#10162C",
    description:
      "Maratona de programação com desafios práticos, mentoria, trabalho em equipe e apresentação dos projetos ao final do dia.",
  }),
  createEvent({
    id: "3",
    title: "Criatividade & Design",
    category: "Faculdade",
    place: "Sala Maker",
    date: "18 Junho",
    time: "14:00",
    organizer: "Núcleo Criativo",
    tag: "DESIGN",
    accent: "#FF9F1A",
    banner: "#2D170D",
    description:
      "Oficina sobre repertório visual, prototipação, processo criativo e construção de soluções para projetos acadêmicos.",
  }),
  createEvent({
    id: "4",
    title: "Semana da Tecnologia",
    category: "Tecnologia",
    place: "Bloco Central",
    date: "22 Junho",
    time: "08:30",
    organizer: "UniEvent Lab",
    tag: "TECH",
    accent: "#00B8A9",
    banner: "#062523",
    description:
      "Ciclo de palestras, demonstrações e encontros com profissionais para discutir tendências e oportunidades em tecnologia.",
  }),
  createEvent({
    id: "5",
    title: "Torneio Universitário",
    category: "Esportes",
    place: "Quadra",
    date: "30 Junho",
    time: "15:00",
    organizer: "Centro Acadêmico",
    tag: "SPORT",
    accent: "#2BCB63",
    banner: "#102317",
    description:
      "Torneio entre turmas com jogos rápidos, integração dos estudantes e premiação simbólica para os finalistas.",
  }),
  createEvent({
    id: "6",
    title: "Palestra de Carreira",
    category: "Faculdade",
    place: "Auditório",
    date: "05 Julho",
    time: "20:00",
    organizer: "Empregabilidade",
    tag: "CARREIRA",
    accent: "#A855F7",
    banner: "#20112C",
    description:
      "Encontro com profissionais do mercado para falar sobre currículo, entrevistas, estágio, portfólio e primeiros passos na carreira.",
  }),
];

