import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, TouchableOpacity } from "react-native";
import AppLogo from "../components/common/AppLogo";

export default function SplashScreen({ theme, onDone }) {
  const fade = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.84)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fade, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        friction: 5,
        tension: 60,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(onDone, 1900);
    return () => clearTimeout(timer);
  }, [fade, scale, onDone]);

  const bg = theme.mode === "dark" ? theme.orange : "#252525";

  return (
    <TouchableOpacity
      activeOpacity={0.94}
      style={[styles.loading, { backgroundColor: bg }]}
      onPress={onDone}
    >
      <Animated.View style={{ opacity: fade, transform: [{ scale }] }}>
        <AppLogo color="#FFFFFF" size="large" />
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

