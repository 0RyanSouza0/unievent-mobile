import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function StatBox({ theme, value, label }) {
  return (
    <View
      style={[
        styles.statBox,
        { backgroundColor: theme.card, borderColor: theme.border },
      ]}
    >
      <Text style={[styles.statValue, { color: theme.orange }]}>{value}</Text>
      <Text style={[styles.statLabel, { color: theme.textSoft }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  statBox: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 13,
    padding: 14,
    alignItems: "center",
  },
  statValue: {
    fontSize: 23,
    fontWeight: "900",
  },
  statLabel: {
    fontSize: 11,
    fontWeight: "800",
    marginTop: 3,
  },
});

