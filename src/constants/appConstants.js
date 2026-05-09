import { createTicket } from "../models/TicketModel";
import { createUser } from "../models/UserModel";

export const APP_NAME = "UniEvent";

export const COURSES = ["ADS", "Gestão", "Eventos", "Tecnologia", "Música", "Design"];

export const EMPTY_LOGIN_FORM = {
  email: "",
  password: "",
  remember: false,
};

export const EMPTY_SIGN_UP_FORM = {
  name: "",
  email: "",
  password: "",
  confirm: "",
  terms: false,
};

export const DEFAULT_USER = createUser({
  name: "Teste",
  email: "teste@fatec.sp.gov.br",
});

export const DEFAULT_TICKETS = [
  createTicket({
    id: "demo-1",
    eventId: "1",
    code: "UNI-2026-001",
    createdAt: "2026-01-15",
  }),
  createTicket({
    id: "demo-2",
    eventId: "2",
    code: "UNI-2026-002",
    createdAt: "2026-01-10",
  }),
  createTicket({
    id: "demo-3",
    eventId: "3",
    code: "UNI-2026-003",
    createdAt: "2026-01-10",
  }),
];

export const DEFAULT_FAVORITES = ["1", "2", "3"];

