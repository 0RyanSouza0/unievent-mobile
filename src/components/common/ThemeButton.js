import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ThemeButton({ theme, themeMode, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.iconCircle,
        { backgroundColor: theme.card, borderColor: theme.border },
      ]}
    >
      <Ionicons
        name={themeMode === "dark" ? "sunny" : "moon"}
        size={18}
        color={theme.orange}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconCircle: {
    width: 38,
    height: 38,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

