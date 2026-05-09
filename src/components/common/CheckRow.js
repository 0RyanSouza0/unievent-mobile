import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CheckRow({ label, checked, onPress, color = "#FFFFFF" }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.checkRow} activeOpacity={0.78}>
      <View style={[styles.checkbox, { borderColor: color }]}>
        {checked && <Ionicons name="checkmark" size={12} color={color} />}
      </View>
      <Text style={[styles.checkText, { color }]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  checkRow: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 28,
  },
  checkbox: {
    width: 16,
    height: 16,
    borderRadius: 3,
    borderWidth: 1.6,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 7,
  },
  checkText: {
    flexShrink: 1,
    fontSize: 10,
    fontWeight: "700",
  },
});

