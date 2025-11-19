const greyColors = {
  black: "hsla(0, 0.0%, 0.0%, 1)",
  white: "hsla(0, 0%, 100%, 1)",
} as const;

const darkColors = {
  // Colors
  blue: "hsl(211, 89.7%, 34.1%)",
  green: "hsl(151, 51.7%, 28.4%)",
  orange: "hsl(25, 100%, 29.0%)",
  pink: "hsl(322, 74.9%, 37.5%)",
  purple: "hsl(272, 52.1%, 45.9%)",
  red: "hsl(358, 65.0%, 40.4%)",
  yellow: "hsl(50, 100%, 22.0%)",
  ...greyColors,

  // Active Colors
  active: "hsla(0, 0%, 100%, 0.87)",
  inactive: "hsla(0, 0%, 100%, 0.6)",
  disabled: "hsla(0, 0%, 100%, 0.38)",

  // Background Colors
  background: "hsl(0, 0%, 9%)",
} as const;

const darkAliases = {
  error: darkColors.red,
  success: darkColors.green,
  warning: darkColors.yellow,
  info: darkColors.blue,
} as const;

const lightColors = {
  // Colors
  blue: "hsl(206, 81.9%, 65.3%)",
  green: "hsl(151, 40.2%, 54.1%)",
  orange: "hsl(24, 94.5%, 64.3%)",
  pink: "hsl(323, 60.3%, 72.4%)",
  purple: "hsl(272, 60.0%, 73.5%)",
  red: "hsl(359, 69.5%, 74.3%)",
  yellow: "hsl(48, 100%, 46.1%)",
  ...greyColors,

  // Active Colors
  active: "hsla(0, 0%, 0%, 0.87)",
  inactive: "hsla(0, 0%, 0%, 0.6)",
  disabled: "hsla(0, 0%, 0%, 0.38)",

  // Background Colors
  background: "hsl(0, 0%, 91%)",
} as const;

const lightAliases = {
  error: lightColors.red,
  success: lightColors.green,
  warning: lightColors.yellow,
  info: lightColors.blue,
} as const;

export const colors = {
  dark: {
    ...darkColors,
    ...darkAliases,
  },
  light: {
    ...lightColors,
    ...lightAliases,
  },
};
