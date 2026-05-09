export function generateTicketCode(nextNumber) {
  return `UNI-2026-${String(nextNumber).padStart(3, "0")}`;
}

