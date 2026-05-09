import { useMemo, useState } from "react";
import { eventsMock } from "../data/eventsMock";

export function useEventsViewModel() {
  const [events] = useState(eventsMock);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedEvent, setSelectedEvent] = useState(eventsMock[0]);

  const filteredEvents = useMemo(() => {
    const query = search.trim().toLowerCase();
    return events.filter((event) => {
      const matchesCategory =
        selectedCategory === "Todos" || event.category === selectedCategory;
      const matchesSearch =
        !query ||
        event.title.toLowerCase().includes(query) ||
        event.category.toLowerCase().includes(query) ||
        event.place.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [events, search, selectedCategory]);

  const featuredEvents = filteredEvents.slice(0, 3);
  const newEvents = filteredEvents.slice(2);

  const selectEvent = (event) => {
    if (event) setSelectedEvent(event);
  };

  return {
    events,
    search,
    setSearch,
    selectedCategory,
    setSelectedCategory,
    selectedEvent,
    setSelectedEvent,
    selectEvent,
    filteredEvents,
    featuredEvents,
    newEvents,
  };
}

