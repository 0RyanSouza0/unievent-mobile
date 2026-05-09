import { useMemo, useState } from "react";
import { DEFAULT_FAVORITES } from "../constants/appConstants";

export function useFavoritesViewModel(events) {
  const [favorites, setFavorites] = useState(DEFAULT_FAVORITES);

  const toggleFavorite = (eventId) => {
    setFavorites((current) =>
      current.includes(eventId)
        ? current.filter((id) => id !== eventId)
        : [...current, eventId]
    );
  };

  const removeFavorite = (eventId) => {
    setFavorites((current) => current.filter((id) => id !== eventId));
  };

  const isFavorite = (eventId) => favorites.includes(eventId);

  const favoriteEvents = useMemo(
    () => events.filter((event) => favorites.includes(event.id)),
    [events, favorites]
  );

  return {
    favorites,
    favoriteEvents,
    toggleFavorite,
    removeFavorite,
    isFavorite,
  };
}

