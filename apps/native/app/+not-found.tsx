import { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@repo/ui/hooks/useTheme";
import { Theme } from "@repo/ui/theme";
import { Heading } from "@repo/ui/components/text/Heading";
import { Title } from "@repo/ui/components/text/Title";
import { Body } from "@repo/ui/components/text/Body";

export default function NotFoundScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const styles = useStyles(theme);

  useEffect(() => {
    // Redirect to home page after a short delay
    const timer = setTimeout(() => {
      router.replace("/");
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Heading size="lg">404</Heading>
        <Title size="lg">Page Not Found</Title>
        <Body>Redirecting to home...</Body>
      </View>
    </SafeAreaView>
  );
}

const useStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    content: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      gap: theme.spacing["1"],
    },
  });
