import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [enteredTodoText, setEnteredTodoText] = useState("");
  const [todos, setTodos] = useState([]);

  function todoInputHandler(enteredText) {
    setEnteredTodoText(enteredText);
  }

  function addTodoHandler() {
    setTodos((currentTodos) => [...currentTodos, enteredTodoText]);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="To Do List"
          onChangeText={todoInputHandler}
        />
        <Button title="Add To Do" onPress={addTodoHandler} />
      </View>
      <View style={styles.todosContainer}>
        {todos.map((todo) => (
          <View style={styles.todoList} key={todo}>
            <Text style={styles.todoText}>{todo}</Text>
          </View>
        ))}
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
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24, //spacing between the input text and the list marginbottom is beeter than padding
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  todosContainer: {
    flex: 5,
  },
  todoList: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
  todoText: {
    color: "white",
  },
});
