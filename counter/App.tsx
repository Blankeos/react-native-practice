import { StatusBar } from "expo-status-bar";
import { useCallback, useState } from "react";
import { Keyboard, KeyboardAvoidingView } from "react-native";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [xAmount, setXAmount] = useState(0);

  const xcrement = useCallback((x: number) => {
    setCounter((previousCount) => previousCount + x);
  }, []);

  return (
    <View style={styles.container} onTouchStart={() => Keyboard.dismiss()}>
      <Text>Counter {counter}</Text>

      <View>
        <View style={styles.counterButtonsContainer}>
          <Button onPress={() => xcrement(xAmount)} title="Increment"></Button>
          <Button onPress={() => xcrement(-xAmount)} title="Decrement"></Button>
        </View>

        <TextInput
          value={xAmount.toString()}
          keyboardType="number-pad"
          style={{ height: 40, borderWidth: 1, padding: 10, width: 200 }}
          placeholder="How much do you want to add?"
          onChangeText={(text) => {
            let parsedInt: number | "NaN" = 0;

            // Means they typed "0X" - X is any number.
            if (text?.[0] === "0" && text.length === 2) {
              parsedInt = parseInt(text[1]);
            } else {
              parsedInt = parseInt(text);
            }

            if (isNaN(parsedInt)) {
              setXAmount(0);
              return;
            }

            setXAmount(parsedInt);
          }}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  counterButtonsContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "center",
  },
});
