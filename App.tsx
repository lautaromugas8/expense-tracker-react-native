import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Balance } from "./components/Balance";

import { GlobalProvider } from "./context/GlobalState";

export default function App() {
  return (
    <GlobalProvider>
      <View style={styles.container}>
        <Balance />
        <StatusBar style="auto" />
      </View>
    </GlobalProvider>
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
