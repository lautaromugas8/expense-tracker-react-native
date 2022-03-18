import { View, Text, FlatList } from "react-native";
import { useAppSelector } from "../../app/hooks";
import { Transaction } from "../Transaction";
import { useTheme } from "@react-navigation/native";
import { styles } from "./styles";

export function TransactionList() {
  const { transactions } = useAppSelector((state) => state.transactions);
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, { color: colors.text }]}>Transactions</Text>
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
              id={item.id}
            />
          )}
        />
      </View>
    </View>
  );
}
