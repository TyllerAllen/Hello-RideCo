import IonIcons from "@expo/vector-icons/Ionicons";
import { ColorValue, type StyleProp, type TextStyle } from "react-native";

export type IonIconName = keyof typeof IonIcons.glyphMap;

export function IonIcon({
  name,
  color,
  style,
}: {
  name: IonIconName;
  color: ColorValue;
  style?: StyleProp<TextStyle>;
}) {
  return <IonIcons color={color} size={24} name={name} style={style} />;
}
