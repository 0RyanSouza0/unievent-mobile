import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import EventBanner from "../events/EventBanner";

export default function TicketCard({ theme, event, onCancel }) {
  return (
    <View
      style={[
        styles.ticketCard,
        {
          backgroundColor: theme.mode === "dark" ? "#1D1D1F" : "#FFFFFF",
          borderColor: theme.mode === "dark" ? "#282828" : theme.border,
        },
      ]}
    >
      <View style={styles.ticketTop}>
        <View style={styles.ticketEventBlock}>
          <EventBanner event={event} size="thumb" />
          <View style={styles.ticketInfo}>
            <Text numberOfLines={1} style={[styles.ticketTitle, { color: theme.text }]}>
              {event.title}
            </Text>
            <Text style={[styles.ticketTinyLabel, { color: theme.textSoft }]}>Data</Text>
            <Text style={[styles.ticketMeta, { color: theme.textSoft }]}>
              {event.date} de 2024
            </Text>
            <Text style={[styles.ticketTinyLabel, { color: theme.textSoft }]}>Horário</Text>
            <Text numberOfLines={1} style={[styles.ticketMeta, { color: theme.textSoft }]}>
              {event.time}
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={onCancel} hitSlop={10}>
          <Ionicons name="heart" size={17} color={theme.orange} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ticketCard: {
    borderWidth: 0,
    borderRadius: 12,
    padding: 0,
    overflow: "hidden",
  },
  ticketTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
    paddingRight: 9,
  },
  ticketEventBlock: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  ticketInfo: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  ticketTitle: {
    fontSize: 12,
    fontWeight: "900",
  },
  ticketTinyLabel: {
    fontSize: 7,
    fontWeight: "800",
    marginTop: 7,
  },
  ticketMeta: {
    fontSize: 8,
    fontWeight: "700",
    marginTop: 1,
  },
});

