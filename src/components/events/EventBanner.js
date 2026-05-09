import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function EventBanner({ event, size }) {
  const large = size === "large";
  const thumb = size === "thumb";

  return (
    <View
      style={[
        large ? styles.bannerLarge : thumb ? styles.bannerThumb : styles.bannerSmall,
        { backgroundColor: event.banner },
      ]}
    >
      <View style={[styles.bannerGlow, { backgroundColor: event.accent }]} />
      <View style={styles.bannerNoiseRow}>
        {[0, 1, 2, 3, 4].map((bar) => (
          <View
            key={bar}
            style={[
              styles.bannerBar,
              {
                backgroundColor: bar % 2 ? event.accent : "rgba(255,255,255,0.22)",
                height: large ? 26 + bar * 5 : 10 + bar * 3,
              },
            ]}
          />
        ))}
      </View>
      <Text
        numberOfLines={1}
        adjustsFontSizeToFit
        style={[
          large ? styles.bannerTextLarge : thumb ? styles.bannerTextThumb : styles.bannerTextSmall,
          { color: "#FFFFFF" },
        ]}
      >
        {event.tag}
      </Text>
      <View style={[styles.bannerBadge, { backgroundColor: event.accent }]}>
        <Text style={styles.bannerBadgeText}>UNI</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bannerSmall: {
    height: 82,
    borderRadius: 6,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  bannerThumb: {
    width: 106,
    height: 78,
    borderRadius: 8,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 0,
  },
  bannerLarge: {
    height: 148,
    borderRadius: 9,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  bannerGlow: {
    position: "absolute",
    width: 130,
    height: 130,
    borderRadius: 70,
    opacity: 0.32,
    top: -40,
    right: -34,
  },
  bannerNoiseRow: {
    position: "absolute",
    left: 14,
    right: 14,
    bottom: 14,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    opacity: 0.58,
  },
  bannerBar: {
    width: 9,
    borderRadius: 4,
  },
  bannerTextSmall: {
    fontSize: 25,
    fontWeight: "900",
  },
  bannerTextThumb: {
    fontSize: 16,
    fontWeight: "900",
  },
  bannerTextLarge: {
    fontSize: 43,
    fontWeight: "900",
  },
  bannerBadge: {
    position: "absolute",
    top: 8,
    right: 8,
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 5,
  },
  bannerBadgeText: {
    color: "#FFFFFF",
    fontSize: 8,
    fontWeight: "900",
  },
});

