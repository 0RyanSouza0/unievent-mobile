import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import EventBanner from "./EventBanner";

export default function EventCard({
  theme,
  event,
  favorite,
  onPress,
  onFavorite,
  variant = "list",
}) {
  const featured = variant === "featured";

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.88}
      style={[
        featured ? styles.eventCardFeatured : styles.eventCardList,
        { backgroundColor: theme.card, borderColor: theme.border },
      ]}
    >
      <EventBanner event={event} size={featured ? "small" : "thumb"} />
      <View style={featured ? styles.featuredInfo : styles.listInfo}>
        <View style={styles.cardTitleRow}>
          <Text
            numberOfLines={featured ? 2 : 1}
            style={[
              featured ? styles.eventTitleFeatured : styles.eventTitleList,
              { color: theme.text },
            ]}
          >
            {event.title}
          </Text>
          <TouchableOpacity onPress={onFavorite} hitSlop={10}>
            <Ionicons
              name={favorite ? "heart" : "heart-outline"}
              size={featured ? 18 : 17}
              color={favorite ? theme.orange : theme.muted}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.eventMetaRow}>
          <Ionicons name="calendar-outline" size={12} color={theme.orange} />
          <Text numberOfLines={1} style={[styles.eventMeta, { color: theme.textSoft }]}>
            {event.date} • {event.time}
          </Text>
        </View>
        <View style={styles.eventMetaRow}>
          <Ionicons name="location-outline" size={12} color={theme.orange} />
          <Text numberOfLines={1} style={[styles.eventMeta, { color: theme.textSoft }]}>
            {event.place}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  eventCardFeatured: {
    width: 166,
    borderWidth: 0,
    borderRadius: 8,
    padding: 6,
  },
  eventCardList: {
    minHeight: 78,
    borderWidth: 0,
    borderRadius: 9,
    padding: 0,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  featuredInfo: {
    paddingTop: 8,
  },
  listInfo: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  cardTitleRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 8,
  },
  eventTitleFeatured: {
    flex: 1,
    fontSize: 13,
    lineHeight: 17,
    fontWeight: "900",
  },
  eventTitleList: {
    flex: 1,
    fontSize: 13,
    fontWeight: "900",
  },
  eventMetaRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
    gap: 4,
  },
  eventMeta: {
    flex: 1,
    fontSize: 10,
    fontWeight: "700",
  },
});

