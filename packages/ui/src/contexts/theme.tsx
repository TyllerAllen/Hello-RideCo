import { Appearance } from "react-native";
import { createContext, useState } from "react";
import { Theme, ColorSchemes, themes, ColorScheme } from "@repo/ui/theme";

export const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
  colorScheme: ColorScheme;
}>({
  theme: themes.light,
  toggleTheme: () => {},
  colorScheme: ColorSchemes.LIGHT,
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const deviceColorScheme = Appearance.getColorScheme();
  const [colorScheme, setColorScheme] = useState(
    deviceColorScheme ?? ColorSchemes.LIGHT
  );

  const toggleTheme = () => {
    const newColorScheme =
      colorScheme === ColorSchemes.LIGHT
        ? ColorSchemes.DARK
        : ColorSchemes.LIGHT;
    setColorScheme(newColorScheme);
  };

  return (
    <ThemeContext.Provider
      value={{ theme: themes[colorScheme], toggleTheme, colorScheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
