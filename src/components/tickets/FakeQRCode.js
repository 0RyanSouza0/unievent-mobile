import React from "react";
import { StyleSheet, View } from "react-native";

export default function FakeQRCode({ theme, seed }) {
  const cells = Array.from({ length: 49 }, (_, index) => {
    const n = Number(seed) * 7 + index * 3;
    return index < 7 || index % 7 === 0 || n % 4 === 0 || n % 5 === 0;
  });

  return (
    <View style={[styles.qr, { backgroundColor: theme.mode === "dark" ? "#FFFFFF" : "#F8F8F8" }]}>
      {cells.map((filled, index) => (
        <View
          key={index}
          style={[
            styles.qrCell,
            { backgroundColor: filled ? "#171717" : "transparent" },
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  qr: {
    width: 56,
    height: 56,
    borderRadius: 6,
    padding: 5,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  qrCell: {
    width: 6,
    height: 6,
    margin: 0.5,
    borderRadius: 1,
  },
});

