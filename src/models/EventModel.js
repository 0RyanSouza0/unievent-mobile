export function createEvent({
  id,
  title,
  category,
  date,
  time,
  place,
  organizer,
  description,
  color,
  accent,
  banner,
  tag,
}) {
  return {
    id,
    title,
    category,
    date,
    time,
    place,
    organizer,
    description,
    color: color || banner,
    accent,
    banner,
    tag,
  };
}

