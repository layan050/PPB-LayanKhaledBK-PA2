import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import MyFriends from "./src/components/friends/MyFriends";

export default function App() {
  return (
    <View style={styles.container}>
      <MyFriends />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
