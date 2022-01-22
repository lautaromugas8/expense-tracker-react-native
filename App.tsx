import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "./components/Header";

import { GlobalProvider } from "./context/GlobalState";

export default function App() {
  return (
    <GlobalProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Header />
      </View>
    </GlobalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
