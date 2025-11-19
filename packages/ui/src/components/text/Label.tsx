import { useTheme } from "@repo/ui/hooks/useTheme";
import { Text, TextProps, StyleSheet } from "react-native";
import { Theme } from "@repo/ui/theme";

interface LabelProps extends TextProps {
  variant?: "regular" | "semiBold";
}

export const Label = ({
  children,
  variant = "regular",
  ...props
}: LabelProps) => {
  const { theme } = useTheme();

  const styles = useStyles(theme, { variant });

  return (
    <Text style={styles.text} {...props}>
      {children}
    </Text>
  );
};

const useStyles = (
  theme: Theme,
  { variant = "regular" }: { variant: LabelProps["variant"] }
) =>
  StyleSheet.create({
    text: {
      color: theme.colors.active,
      ...theme.typography.label[variant],
    },
  });
