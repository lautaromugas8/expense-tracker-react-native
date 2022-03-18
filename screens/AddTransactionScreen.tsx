import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import AddTransaction from "../components/AddTransaction";

export default function AddTransactionScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <AddTransaction />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
