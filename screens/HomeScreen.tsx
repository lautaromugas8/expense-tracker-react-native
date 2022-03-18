import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../components/Header";
import { TransactionList } from "../components/TransactionList";

import { useAppDispatch } from "../app/hooks";
import { getAllTransactions } from "../app/transactionSlice";

export default function HomeScreen() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetch() {
      await dispatch(getAllTransactions());
    }

    fetch();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <TransactionList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
