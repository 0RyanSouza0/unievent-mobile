import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function EmptyState({ theme, icon, text }) {
  return (
    <View
      style={[
        styles.emptyState,
        { backgroundColor: theme.card, borderColor: theme.border },
      ]}
    >
      <Ionicons name={icon} size={32} color={theme.orange} />
      <Text style={[styles.emptyText, { color: theme.textSoft }]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  emptyState: {
    minHeight: 188,
    borderWidth: 1,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    padding: 18,
  },
  emptyText: {
    textAlign: "center",
    fontSize: 13,
    fontWeight: "800",
    marginTop: 10,
  },
});

