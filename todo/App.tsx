import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import TodoCard from "./components/TodoCard";
import { IcOutlinePlus } from "./components/icons/IcOutlinePlus";
import { Todo, useTodos } from "./hooks/useTodos";
import * as SecureStore from "expo-secure-store";

export default function App() {
  const { todos, addTodo, deleteTodo, toDone } = useTodos([]);

  return (
    <SafeAreaView>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          alignItems: "flex-start",
          flexGrow: 1,
        }}
      >
        <StatusBar style="auto" />
        <Text
          style={{
            fontSize: 25,
            paddingHorizontal: 30,
            paddingTop: 30,
            width: "100%",
          }}
        >
          Welcome back, Carlo
        </Text>

        <View
          style={{
            padding: 30,
            width: "100%",
            height: "100%",
            flex: 1,
          }}
        >
          <FlatList
            style={{
              width: "100%",
              height: "auto",
              flexGrow: 0,
            }}
            data={todos}
            renderItem={({ item }) => (
              <TodoCard
                key={item.id}
                done={item.done}
                title={item.title}
                onClick={(done) => {
                  toDone(item.id, done);
                }}
              />
            )}
          />

          <TouchableOpacity
            style={{
              paddingVertical: 10,
              flexDirection: "row",
              alignItems: "center",
              columnGap: 5,
            }}
            onPressOut={() => addTodo("New Todo", false)}
          >
            <IcOutlinePlus width="24" height="24" color="black" />
            <Text>Add New</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    height: "100%",
  },
});
