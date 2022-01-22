import { View, Text, Image } from "react-native";
import { styles } from "./styles";

type Props = {
  title: string;
  amount: string;
};

export function SummaryCard({ title, amount }: Props) {
  return (
    <View style={styles.container}>
      {/* <Image /> */}
      <View style={styles.dataContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.amount}>{amount}</Text>
      </View>
    </View>
  );
}
