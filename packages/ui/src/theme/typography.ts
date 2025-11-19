const families = {
  regular: "Poppins-Regular",
  semiBold: "Poppins-SemiBold",
  bold: "Poppins-Bold",
} as const;

const sizes = {
  xxs: 10,
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 24,
  xxl: 38,
} as const;

export const typography = {
  heading: {
    sm: {
      fontFamily: families.bold,
      fontSize: sizes.lg,
    },
    md: {
      fontFamily: families.bold,
      fontSize: sizes.xl,
    },
    lg: {
      fontFamily: families.bold,
      fontSize: sizes.xxl,
    },
  },
  title: {
    sm: {
      fontFamily: families.semiBold,
      fontSize: sizes.sm,
    },
    md: {
      fontFamily: families.semiBold,
      fontSize: sizes.md,
    },
    lg: {
      fontFamily: families.semiBold,
      fontSize: sizes.lg,
    },
  },
  body: {
    sm: {
      fontFamily: families.regular,
      fontSize: sizes.sm,
    },
    md: {
      fontFamily: families.regular,
      fontSize: sizes.md,
    },
    lg: {
      fontFamily: families.regular,
      fontSize: sizes.lg,
    },
  },
  label: {
    regular: {
      fontFamily: families.regular,
      fontSize: sizes.xxs,
    },
    semiBold: {
      fontFamily: families.semiBold,
      fontSize: sizes.xxs,
    },
  },
};
