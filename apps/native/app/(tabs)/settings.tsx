import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Heading } from "@repo/ui/components/text/Heading";
import { ColorSchemes, Theme } from "@repo/ui/theme";
import { StyleSheet } from "react-native";
import { useTheme } from "@repo/ui/hooks/useTheme";
import { SettingButton } from "@repo/ui/components/buttons/SettingButton";

export default function SettingsScreen() {
  const { theme, toggleTheme, colorScheme } = useTheme();

  const styles = useStyles(theme);

  const themeIcon =
    colorScheme === ColorSchemes.LIGHT ? "sunny-outline" : "moon-outline";
  const themeTitle = colorScheme === ColorSchemes.LIGHT ? "Light" : "Dark";

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <View style={styles.content}>
        <Heading>Settings</Heading>
        <SettingButton
          title={themeTitle}
          onPress={toggleTheme}
          icon={themeIcon}
        />
      </View>
    </SafeAreaView>
  );
}

const useStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      padding: theme.spacing["2"],
      gap: theme.spacing["2"],
      alignItems: "center",
    },
    content: {
      flex: 1,
      alignItems: "center",
      width: "100%",
      gap: theme.spacing["2"],
      maxWidth: 128,
    },
  });
