import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable
      android_ripple={{ color: "lightgrey" }}
      onPress={props.onDeleteTodo.bind(this, props.id)}
    >
      <View style={styles.todoList}>
        <View style={styles.todoText}>
          <Text style={styles.todoText}>{props.text}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  todoList: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#36454F",
    color: "white",
  },
  todoText: {
    color: "white",
  },
});
