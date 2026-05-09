import { useState } from "react";
import { DEFAULT_TICKETS } from "../constants/appConstants";
import { createTicket } from "../models/TicketModel";
import { generateTicketCode } from "../utils/generateTicketCode";

export function useTicketsViewModel() {
  const [tickets, setTickets] = useState(DEFAULT_TICKETS);

  const hasTicket = (eventId) => tickets.some((ticket) => ticket.eventId === eventId);

  const reserveTicket = (event) => {
    if (hasTicket(event.id)) {
      return {
        ok: false,
        reason: "duplicate",
        message: "Esse evento já está em seus ingressos.",
      };
    }

    const nextTicket = createTicket({
      id: `${event.id}-${Date.now()}`,
      eventId: event.id,
      code: generateTicketCode(tickets.length + 1),
      createdAt: new Date().toISOString(),
    });

    setTickets((current) => [...current, nextTicket]);
    return { ok: true, ticket: nextTicket };
  };

  const cancelTicket = (ticketId) => {
    setTickets((current) => current.filter((ticket) => ticket.id !== ticketId));
  };

  return {
    tickets,
    reserveTicket,
    cancelTicket,
    hasTicket,
  };
}

