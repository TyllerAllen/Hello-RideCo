import { ColorValue, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "@repo/ui/hooks/useTheme";
import { Theme } from "@repo/ui/theme";
import { IonIcon, IonIconName } from "@repo/ui/components/icons/IonIcon";

export interface IconButtonProps {
  backgroundColor?: ColorValue;
  color?: ColorValue;
  icon: IonIconName;
  onPress: () => void;
}

export const IconButton = ({
  backgroundColor,
  color,
  icon,
  onPress,
}: IconButtonProps) => {
  const { theme } = useTheme();

  const styles = useStyles(theme, {
    backgroundColor,
  });

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <IonIcon name={icon} color={color ?? theme.colors.active} />
    </TouchableOpacity>
  );
};

const useStyles = (
  theme: Theme,
  { backgroundColor }: Pick<IconButtonProps, "backgroundColor">
) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor,
    },
  });
