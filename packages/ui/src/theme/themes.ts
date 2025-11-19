import { colors } from "./colors";
import { spacing } from "./spacing";
import { typography } from "./typography";

export const ColorSchemes = {
  LIGHT: "light",
  DARK: "dark",
} as const;

export type ColorScheme = (typeof ColorSchemes)[keyof typeof ColorSchemes];

export const themes = {
  [ColorSchemes.LIGHT]: {
    colors: colors.light,
    spacing,
    typography,
  },
  [ColorSchemes.DARK]: {
    colors: colors.dark,
    spacing,
    typography,
  },
};

export type Theme = (typeof themes)[ColorScheme];
