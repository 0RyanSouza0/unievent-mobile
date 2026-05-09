import { useMemo, useState } from "react";
import { DARK_THEME, LIGHT_THEME } from "../theme/themes";

export function useThemeViewModel() {
  const [themeMode, setThemeMode] = useState("dark");

  const theme = useMemo(
    () => (themeMode === "dark" ? DARK_THEME : LIGHT_THEME),
    [themeMode]
  );

  const toggleTheme = () => {
    setThemeMode((current) => (current === "dark" ? "light" : "dark"));
  };

  return {
    themeMode,
    theme,
    toggleTheme,
  };
}

