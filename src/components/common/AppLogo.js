import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AppLogo({ color = "#FFFFFF", size = "medium" }) {
  const large = size === "large";
  const small = size === "small";

  return (
    <View style={styles.logoWrap}>
      <View style={styles.logoRow}>
        <Text
          style={[
            styles.logoUni,
            {
              color,
              fontSize: large ? 42 : small ? 20 : 26,
              lineHeight: large ? 44 : small ? 22 : 28,
            },
          ]}
        >
          uni
        </Text>
        <View
          style={[
            styles.logoTicket,
            {
              width: large ? 42 : small ? 22 : 28,
              height: large ? 44 : small ? 24 : 30,
              borderColor: color,
            },
          ]}
        >
          <Ionicons name="ticket" size={large ? 25 : small ? 13 : 17} color={color} />
        </View>
      </View>
      <Text
        style={[
          styles.logoEvent,
          {
            color,
            fontSize: large ? 38 : small ? 18 : 24,
            lineHeight: large ? 38 : small ? 18 : 24,
          },
        ]}
      >
        EVENT
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logoWrap: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  logoRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  logoUni: {
    fontWeight: "900",
    letterSpacing: 0,
  },
  logoEvent: {
    fontWeight: "900",
    letterSpacing: 0,
    marginTop: -4,
  },
  logoTicket: {
    borderWidth: 2,
    borderRadius: 4,
    marginLeft: 1,
    marginTop: -4,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ rotate: "12deg" }],
  },
});

