import React from "react";
import { Alert, ScrollView, StyleSheet, View } from "react-native";
import EmptyState from "../components/common/EmptyState";
import EventCard from "../components/events/EventCard";
import Header from "../components/layout/Header";

export default function FavoritesScreen({ theme, events, favoritesVm, onOpenEvent }) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.mainContent}
    >
      <Header
        theme={theme}
        title="Meus favoritos"
        actionIcon="filter"
        onAction={() => Alert.alert("Meus favoritos", "Filtro visual do protótipo UniEvent.")}
      />
      {events.length ? (
        <View style={styles.eventList}>
          {events.map((event) => (
            <EventCard
              key={event.id}
              theme={theme}
              event={event}
              favorite={favoritesVm.isFavorite(event.id)}
              onPress={() => onOpenEvent(event)}
              onFavorite={() => favoritesVm.toggleFavorite(event.id)}
              variant="list"
            />
          ))}
        </View>
      ) : (
        <EmptyState
          theme={theme}
          icon="heart-outline"
          text="Nenhum evento favorito ainda"
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContent: {
    paddingHorizontal: 26,
    paddingTop: 26,
    paddingBottom: 104,
  },
  eventList: {
    gap: 10,
  },
});

