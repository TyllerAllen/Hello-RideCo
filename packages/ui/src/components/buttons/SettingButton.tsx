import { StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "@repo/ui/hooks/useTheme";
import { Theme } from "@repo/ui/theme";
import { Title } from "@repo/ui/components/text/Title";
import { IonIcon, IonIconName } from "@repo/ui/components/icons/IonIcon";

export interface SettingButtonProps {
  title: string;
  icon: IonIconName;
  onPress: () => void;
}

export const SettingButton = ({ title, icon, onPress }: SettingButtonProps) => {
  const { theme } = useTheme();

  const styles = useStyles(theme);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Title>{title}</Title>
      <IonIcon name={icon} color={theme.colors.active} />
    </TouchableOpacity>
  );
};

const useStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: theme.spacing["3"],
      borderWidth: 1,
      borderRadius: 8,
      borderColor: theme.colors.active,
      width: "100%",
    },
  });
