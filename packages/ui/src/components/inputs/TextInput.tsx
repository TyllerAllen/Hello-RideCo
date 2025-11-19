import {
  TextInput as RNTextInput,
  TextInputProps,
  StyleSheet,
} from "react-native";
import { useTheme } from "@repo/ui/hooks/useTheme";
import { Theme } from "@repo/ui/theme";
import { useState } from "react";

export const TextInput = ({
  placeholder,
  value,
  onChangeText,
  ...props
}: TextInputProps) => {
  const { theme } = useTheme();

  const [isFocused, setIsFocused] = useState(false);

  const _onBlur = () => {
    setIsFocused(false);
  };

  const _onFocus = () => {
    setIsFocused(true);
  };

  const styles = useStyles(theme, { isFocused });

  return (
    <RNTextInput
      style={styles.container}
      onBlur={_onBlur}
      onFocus={_onFocus}
      placeholder={placeholder}
      placeholderTextColor={styles.placeholder.color}
      value={value}
      onChangeText={onChangeText}
      {...props}
    />
  );
};

const useStyles = (theme: Theme, { isFocused }: { isFocused: boolean }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      padding: theme.spacing["3"],
      borderWidth: 1,
      borderRadius: 8,
      borderColor: isFocused ? theme.colors.active : theme.colors.inactive,
      color: theme.colors.active,
    },
    placeholder: {
      color: theme.colors.inactive,
    },
  });
