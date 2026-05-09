import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ROUTES } from "../../navigation/routes";

const NAV_ITEMS = [
  { key: ROUTES.HOME, icon: "home" },
  { key: ROUTES.TICKETS, icon: "hand-left" },
  { key: ROUTES.FAVORITES, icon: "heart" },
  { key: ROUTES.PROFILE, icon: "person" },
];

export default function BottomNav({ theme, active, onNavigate }) {
  return (
    <View
      style={[
        styles.bottomNav,
        {
          backgroundColor: theme.orange,
          borderColor: theme.orangeDark,
        },
      ]}
    >
      {NAV_ITEMS.map((item) => {
        const isActive = active === item.key;
        return (
          <TouchableOpacity
            key={item.key}
            onPress={() => onNavigate(item.key)}
            style={[
              styles.navIconWrap,
              { backgroundColor: isActive ? "#FFFFFF" : "#1F1F1F" },
            ]}
          >
            <Ionicons
              name={item.icon}
              size={19}
              color={isActive ? "#1F1F1F" : "#FFFFFF"}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    position: "absolute",
    left: 22,
    right: 22,
    bottom: 12,
    height: 60,
    borderWidth: 0,
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
  },
  navIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
});

