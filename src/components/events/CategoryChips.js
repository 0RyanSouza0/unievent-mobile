import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function CategoryChips({
  theme,
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.chipRow}
    >
      {categories.map((category) => {
        const active = selectedCategory === category;
        return (
          <TouchableOpacity
            key={category}
            onPress={() => onSelectCategory(category)}
            style={[
              styles.filterChip,
              {
                backgroundColor: active ? theme.orange : theme.card,
                borderColor: active ? theme.orange : theme.border,
              },
            ]}
          >
            <Text
              style={[
                styles.filterText,
                { color: active ? "#FFFFFF" : theme.textSoft },
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  chipRow: {
    paddingVertical: 10,
    gap: 6,
  },
  filterChip: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 5,
  },
  filterText: {
    fontSize: 11,
    fontWeight: "800",
  },
});

