import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import GoalItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodoHandler(enteredTodoText) {
    setTodos((currentTodos) => [
      ...currentTodos,
      { text: enteredTodoText, id: Math.random().toString() },
    ]);
  }

  function deleteTodoHandler(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <TodoInput onAddTodo={addTodoHandler} />
      <View style={styles.todosContainer}>
        <FlatList
          data={todos}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteTodo={deleteTodoHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  todosContainer: {
    flex: 5,
  },
});
