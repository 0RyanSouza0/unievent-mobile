import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import BottomNav from "./BottomNav";

export default function ScreenContainer({
  theme,
  children,
  activeRoute,
  onNavigate,
  withBottomNav = false,
}) {
  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: theme.background }]}>
      <View style={styles.content}>{children}</View>
      {withBottomNav && (
        <BottomNav theme={theme} active={activeRoute} onNavigate={onNavigate} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});

