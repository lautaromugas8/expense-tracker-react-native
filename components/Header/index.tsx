import { View } from "react-native";
import { Balance } from "../Balance";
import { SummaryCard } from "../SummaryCard";
import { useTransactions } from "../../context/GlobalState";
import { styles } from "./styles";

export function Header() {
  const { transactions } = useTransactions();

  const amounts = transactions.map((transaction) => transaction.amount);

  const totalIncome = amounts.reduce((acc, item) => {
    if (item > 0) {
      return (acc += item);
    } else return acc;
  }, 0);

  const totalExpenses = amounts.reduce((acc, item) => {
    if (item < 0) {
      return (acc += item);
    } else return acc;
  }, 0);

  const income = totalIncome.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const expenses = totalExpenses.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <View style={styles.container}>
      <Balance />
      <View style={styles.summaryCardContainer}>
        <SummaryCard title="Income" amount={`$${income}`} />
        <SummaryCard title="Expense" amount={`$${expenses}`} />
      </View>
    </View>
  );
}
