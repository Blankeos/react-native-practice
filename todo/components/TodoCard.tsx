import { Text, TouchableOpacity, View } from "react-native";
import Checkbox from "expo-checkbox";

export default function TodoCard(props: {
  done: boolean;
  title: string;
  onClick: (done: boolean) => void;
}) {
  return (
    <TouchableOpacity
      onPressOut={() => props.onClick(!props.done)}
      style={{
        paddingVertical: 10,
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Checkbox value={props.done} />
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
}
