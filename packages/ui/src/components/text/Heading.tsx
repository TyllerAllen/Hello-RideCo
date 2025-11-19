import { useTheme } from "@repo/ui/hooks/useTheme";
import { Text, TextProps, StyleSheet } from "react-native";
import { Theme } from "@repo/ui/theme";

interface HeadingProps extends TextProps {
  size?: "sm" | "md" | "lg";
}

export const Heading = ({ children, size = "md", ...props }: HeadingProps) => {
  const { theme } = useTheme();

  const styles = useStyles(theme, { size });

  return (
    <Text style={styles.text} {...props}>
      {children}
    </Text>
  );
};

const useStyles = (
  theme: Theme,
  { size = "md" }: { size: HeadingProps["size"] }
) =>
  StyleSheet.create({
    text: {
      color: theme.colors.active,
      ...theme.typography.heading[size],
    },
  });
