import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.todoList}>
      <View style={styles.todoText}>
        <Pressable
          android_ripple={{ color: "#D3D3D3" }}
          onPress={props.onDeleteTodo.bind(this, props.id)}
          //for apple phone ripple effects
          style={({ pressed }) => pressed && styles.pressedItem}
        >
          <Text style={styles.todoText}>{props.text}</Text>
        </Pressable>
      </View>
    </View>
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
  pressedItem: {
    opacity: 0.5,
  },
  todoText: {
    color: "white",
    padding: 8,
  },
});
