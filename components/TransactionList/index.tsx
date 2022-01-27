import { View, Text, FlatList } from "react-native";
import { useTransactions } from "../../context/GlobalState";
import { Transaction } from "../Transaction";
import { styles } from "./styles";

export function TransactionList() {
  const { transactions } = useTransactions();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Transactions</Text>
      </View>
      <View>
        <FlatList
          data={transactions}
          keyExtractor={(item) => "" + item.id}
          renderItem={({ item }) => (
            <Transaction
              text={item.text}
              description={item.description}
              amount={item.amount}
            />
          )}
        />
      </View>
    </View>
  );
}
