import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { registerFetchTask } from "./tasks";
const INTERVAL_TASKS = 60 * 15;

registerFetchTask(
  "TASK_NAME",
  () => {
    console.log(
      "Task is running in background each ",
      INTERVAL_TASKS,
      " seconds."
    );
  },
  INTERVAL_TASKS
);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
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
});
