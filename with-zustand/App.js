import * as React from "react";
import shallow from "zustand/shallow";
import { View, Text, Button } from "react-native";
import { useStore, useReset } from "./store";

export default function App() {
  const { items, addItem } = useStore(
    ({ addItem, items }) => ({
      items,
      addItem,
    }),
    shallow
  );

  return (
    <View style={{ flex: 1, padding: 12 }}>
      <TodoList />
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <Button
          onPress={() => addItem(`Item #${items.length}`)}
          title="Add Item"
        />
        <Button onPress={() => useReset()} title="reset" />
      </View>
    </View>
  );
}

function TodoList() {
  const items = useStore(({ items }) => items);
  return (
    <View style={{ flex: 1 }}>
      {items.map((item) => (
        <Text key={item.id}>{item.text}</Text>
      ))}
    </View>
  );
}
