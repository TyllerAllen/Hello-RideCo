import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useTheme } from "@repo/ui/hooks/useTheme";
import { Theme } from "@repo/ui/theme";
import { Body } from "@repo/ui/components/text/Body";
import { Checkbox } from "expo-checkbox";
import { IconButton } from "@repo/ui/components/buttons/IconButton";

export interface ItemProps {
  name: string;
  checked: boolean;
  onItemPress: () => void;
  onTrashPress: () => void;
}

export const Item = ({
  name,
  checked,
  onItemPress,
  onTrashPress,
}: ItemProps) => {
  const { theme } = useTheme();

  const styles = useStyles(theme);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.itemContainer} onPress={onItemPress}>
        <Body>{name}</Body>
        <Checkbox
          value={checked}
          color={styles.checkbox.color}
          onValueChange={onItemPress}
        />
      </TouchableOpacity>
      <View style={styles.trashButtonContainer}>
        <IconButton
          icon="trash-outline"
          onPress={onTrashPress}
          color={styles.trash.color}
        />
      </View>
    </View>
  );
};

const useStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderWidth: 1,
      borderRadius: 8,
      borderColor: theme.colors.active,
    },
    itemContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: theme.spacing["3"],
    },
    checkbox: {
      color: theme.colors.green,
    },
    trash: {
      color: theme.colors.red,
    },
    trashButtonContainer: {
      borderLeftWidth: 1,
      borderColor: theme.colors.active,
      padding: theme.spacing["3"],
    },
  });
