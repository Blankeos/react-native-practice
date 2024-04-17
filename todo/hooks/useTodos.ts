import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

function save(key: string, value: Todo[]) {
  SecureStore.setItem(key, JSON.stringify(value));
}

export type Todo = {
  id: string;
  done: boolean;
  title: string;
};

export function useTodos(initialTodos: Todo[] = []) {
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    const initialData = [];
    try {
      const storedTodos = SecureStore.getItem("todos") as unknown as
        | string
        | undefined;

      if (storedTodos?.length) {
        setTodos(JSON.parse(storedTodos));
      }
    } catch (error) {
      // Error retrieving data
    }
  }, []);

  function toDone(id: string, newDone: boolean) {
    setTodos((previousTodos) => {
      const updated = previousTodos.map((_data) => {
        if (_data.id === id) {
          return { ..._data, done: newDone };
        }

        return _data;
      });

      save("todos", updated);

      return updated;
    });
  }

  function addTodo(title: string, done: boolean) {
    setTodos((previousTodos) => {
      const updated = [
        ...previousTodos,
        {
          id: Math.random().toString(),
          done,
          title,
        },
      ];

      save("todos", updated);

      return updated;
    });
  }

  function deleteTodo(id: string) {
    setTodos((previousTodos) => {
      const updated = previousTodos.filter((_data) => _data.id !== id);

      save("todos", updated);

      return updated;
    });
  }

  return {
    todos,
    toDone,
    addTodo,
    deleteTodo,
  };
}
