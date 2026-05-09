import React from "react";
import { Platform, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function InputField({
  theme,
  value,
  onChangeText,
  placeholder,
  icon,
  rightIcon,
  onRightPress,
  secureTextEntry,
  keyboardType,
  lightOnOrange,
}) {
  const fieldColor = lightOnOrange ? "#FFFFFF" : theme.text;
  const borderColor = lightOnOrange ? "rgba(255,255,255,0.76)" : theme.border;
  const bg = lightOnOrange ? "rgba(0,0,0,0.08)" : theme.input;

  return (
    <View style={[styles.inputWrap, { borderColor, backgroundColor: bg }]}>
      <Ionicons name={icon} size={16} color={fieldColor} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={lightOnOrange ? "rgba(255,255,255,0.72)" : theme.muted}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize="none"
        style={[styles.input, { color: fieldColor }]}
      />
      {!!rightIcon && (
        <TouchableOpacity onPress={onRightPress} hitSlop={10}>
          <Ionicons name={rightIcon} size={17} color={fieldColor} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputWrap: {
    minHeight: 42,
    borderWidth: 2,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 11,
  },
  input: {
    flex: 1,
    fontSize: 12,
    fontWeight: "700",
    paddingVertical: Platform.OS === "web" ? 10 : 8,
    marginLeft: 8,
  },
});

