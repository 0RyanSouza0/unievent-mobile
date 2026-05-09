import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function InfoPill({ theme, label, icon }) {
  return (
    <View style={styles.infoPill}>
      <Ionicons name={icon} size={13} color={theme.orange} />
      <Text style={[styles.infoPillText, { color: theme.text }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  infoPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  infoPillText: {
    fontSize: 11,
    fontWeight: "800",
  },
});

