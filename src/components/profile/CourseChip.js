import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function CourseChip({ theme, label, selected, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.courseChip,
        {
          backgroundColor: selected ? theme.orange : "transparent",
          borderColor: selected ? theme.orange : theme.border,
        },
      ]}
    >
      <Text
        style={[
          styles.courseChipText,
          { color: selected ? "#FFFFFF" : theme.textSoft },
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  courseChip: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  courseChipText: {
    fontSize: 11,
    fontWeight: "900",
  },
});

