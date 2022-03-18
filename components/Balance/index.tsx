import { View, Text } from "react-native";
import { useAppSelector } from "../../app/hooks";
import { styles } from "./styles";

export function Balance() {
  const { transactions } = useAppSelector((state) => state.transactions);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  const balance = total.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Total Balance</Text>
      <Text style={styles.balance}>${balance}</Text>
    </View>
  );
}
