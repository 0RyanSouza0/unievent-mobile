import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header({ theme, title, actionIcon, onAction }) {
  return (
    <View style={styles.screenHeader}>
      <Text style={[styles.screenTitle, { color: theme.text }]}>{title}</Text>
      {!!actionIcon && (
        <TouchableOpacity
          style={[
            styles.iconCircle,
            styles.screenHeaderAction,
            { backgroundColor: theme.card, borderColor: theme.border },
          ]}
          onPress={onAction}
        >
          <Ionicons name={actionIcon} size={18} color={theme.orange} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screenHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  screenTitle: {
    fontSize: 17,
    fontWeight: "900",
  },
  screenHeaderAction: {
    position: "absolute",
    right: 0,
  },
  iconCircle: {
    width: 38,
    height: 38,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

