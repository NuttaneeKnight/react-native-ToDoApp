import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function TodoInput(props) {
  const [enteredTodoText, setEnteredTodoText] = useState("");

  function todoInputHandler(enteredText) {
    setEnteredTodoText(enteredText);
  }

  function addTodoHandler() {
    props.onAddTodo(enteredTodoText);
    setEnteredTodoText(""); // clear it everytiem we entered the text.
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/todo.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="To Do List"
          onChangeText={todoInputHandler}
          value={enteredTodoText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add To Do"
              color="#36454F"
              onPress={addTodoHandler}
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="#FC6A03" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default TodoInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "grey",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
