import React from "react";
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Button from "../components/common/Button";
import InfoPill from "../components/common/InfoPill";
import EventBanner from "../components/events/EventBanner";

export default function EventDetailsScreen({
  theme,
  event,
  isFavorite,
  onBack,
  onFavorite,
  onReserve,
}) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.mainContent}
    >
      <View style={styles.detailsHeader}>
        <TouchableOpacity onPress={onBack} style={styles.detailsIconPlain}>
          <Ionicons name="arrow-back" size={22} color={theme.orange} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onFavorite} style={styles.detailsIconPlain}>
          <Ionicons
            name={isFavorite ? "heart" : "heart-outline"}
            size={22}
            color={theme.orange}
          />
        </TouchableOpacity>
      </View>

      <EventBanner event={event} size="large" />

      <Text style={[styles.detailTitle, { color: theme.text }]}>{event.title}</Text>

      <View style={styles.detailMetaInline}>
        <InfoPill theme={theme} label={event.date} icon="calendar" />
        <InfoPill theme={theme} label={event.time} icon="time" />
        <InfoPill theme={theme} label={event.category} icon="flag" />
      </View>

      <Text style={[styles.organizerLabel, { color: theme.textSoft }]}>Organizador</Text>
      <View style={styles.organizerRow}>
        <View style={styles.organizerAvatar}>
          <Text style={styles.organizerAvatarText}>F</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text numberOfLines={1} style={[styles.organizerName, { color: theme.text }]}>
            {event.organizer}
          </Text>
          <Text numberOfLines={1} style={[styles.organizerPlace, { color: theme.textSoft }]}>
            {event.place}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => Alert.alert("Organizador", `${event.organizer}\n${event.place}`)}
          style={[styles.knowMoreButton, { backgroundColor: theme.orange }]}
        >
          <Text style={styles.knowMoreText}>Saiba mais</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.aboutCard}>
        <Text style={[styles.aboutTitle, { color: theme.text }]}>Sobre o evento</Text>
        <Text style={[styles.aboutText, { color: theme.textSoft }]}>
          {event.description}
        </Text>
      </View>

      <Button
        label="Garantir ingresso"
        onPress={onReserve}
        background={theme.orange}
        color="#FFFFFF"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContent: {
    paddingHorizontal: 26,
    paddingTop: 26,
    paddingBottom: 42,
  },
  detailsHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 18,
  },
  detailsIconPlain: {
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
  },
  detailTitle: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: "900",
  },
  detailMetaInline: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 18,
    marginTop: 16,
    marginBottom: 18,
  },
  organizerLabel: {
    fontSize: 10,
    fontWeight: "800",
    marginBottom: 8,
  },
  organizerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.16)",
    marginBottom: 14,
  },
  organizerAvatar: {
    width: 28,
    height: 28,
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  organizerAvatarText: {
    color: "#F14B4B",
    fontSize: 18,
    fontWeight: "900",
  },
  organizerName: {
    fontSize: 11,
    fontWeight: "800",
  },
  organizerPlace: {
    fontSize: 9,
    fontWeight: "700",
    marginTop: 2,
  },
  knowMoreButton: {
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  knowMoreText: {
    color: "#FFFFFF",
    fontSize: 9,
    fontWeight: "900",
  },
  aboutCard: {
    borderWidth: 0,
    borderRadius: 0,
    padding: 0,
    marginTop: 0,
    marginBottom: 16,
  },
  aboutTitle: {
    fontSize: 15,
    fontWeight: "900",
    marginBottom: 8,
  },
  aboutText: {
    fontSize: 12,
    lineHeight: 19,
    fontWeight: "600",
  },
});

