import { FlatList, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Heading } from "@repo/ui/components/text/Heading";
import { Item } from "@repo/ui/components/cards/Item";
import { useEffect, useState } from "react";
import { Theme } from "@repo/ui/theme";
import { useTheme } from "@repo/ui/hooks/useTheme";
import { TextInput } from "@repo/ui/components/inputs/TextInput";
import { IconButton } from "@repo/ui/components/buttons/IconButton";
import { retrieveList } from "../../features/list/retrieve";
import { GroceryItem } from "../../features/list/types";
import { addItem } from "../../features/list/add";
import { updateItem } from "../../features/list/update";

export default function HomeScreen() {
  const { theme } = useTheme();

  const styles = useStyles(theme);

  const [list, setList] = useState<GroceryItem[]>([]);
  const [newItem, setNewItem] = useState<string>("");

  const handleItemPress = (item: GroceryItem) => {
    updateItem({
      id: item.id,
      purchased: !item.purchased,
    }).then((list) => setList(list?.items ?? []));
  };

  const handleTrashPress = (item: GroceryItem) => {
    updateItem({
      id: item.id,
      deleted: true,
    }).then((list) => setList(list?.items ?? []));
  };

  const handleAddItem = () => {
    console.log(newItem);
    addItem({ name: newItem }).then((list) => setList(list?.items ?? []));
  };

  useEffect(() => {
    retrieveList().then((list) => setList(list?.items ?? []));
  }, []);

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <View style={styles.content}>
        <Heading>Groceries</Heading>
        <FlatList
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}
          data={list}
          keyExtractor={(_item, index) => `${index}`}
          renderItem={({ item }) => (
            <Item
              name={item.name}
              checked={item.purchased}
              onItemPress={() => handleItemPress(item)}
              onTrashPress={() => handleTrashPress(item)}
            />
          )}
        />
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Add item"
            value={newItem}
            onChangeText={setNewItem}
          />
          <View style={styles.iconButtonContainer}>
            <IconButton icon="add-outline" onPress={handleAddItem} />
          </View>
        </View>
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
      maxWidth: 512,
    },
    scrollView: {
      width: "100%",
    },
    contentContainer: {
      gap: theme.spacing["2"],
    },
    inputContainer: {
      flexDirection: "row",
      alignSelf: "stretch",
      gap: theme.spacing["2"],
    },
    iconButtonContainer: {
      padding: theme.spacing["3"],
      borderWidth: 1,
      borderRadius: 8,
      borderColor: theme.colors.active,
      backgroundColor: theme.colors.blue,
    },
  });
