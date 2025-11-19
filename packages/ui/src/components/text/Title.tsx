import { useTheme } from "@repo/ui/hooks/useTheme";
import { Text, TextProps, StyleSheet } from "react-native";
import { Theme } from "@repo/ui/theme";

interface TitleProps extends TextProps {
  size?: "sm" | "md" | "lg";
}

export const Title = ({ children, size = "md", ...props }: TitleProps) => {
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
  { size = "md" }: { size: TitleProps["size"] }
) =>
  StyleSheet.create({
    text: {
      color: theme.colors.active,
      ...theme.typography.title[size],
    },
  });
