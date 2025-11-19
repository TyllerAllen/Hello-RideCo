import { useTheme } from "@repo/ui/hooks/useTheme";
import { Text, TextProps, StyleSheet } from "react-native";
import { Theme } from "@repo/ui/theme";

interface BodyProps extends TextProps {
  size?: "sm" | "md" | "lg";
}

export const Body = ({ children, size = "md", ...props }: BodyProps) => {
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
  { size = "md" }: { size: BodyProps["size"] }
) =>
  StyleSheet.create({
    text: {
      color: theme.colors.active,
      ...theme.typography.body[size],
    },
  });
