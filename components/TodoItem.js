import { StyleSheet, View, Text } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.todoList}>
      <Text style={styles.todoText}>{props.text}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  todoList: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
});
