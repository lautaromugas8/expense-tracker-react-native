import { View, Text, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";

type Props = {
  title: string;
  amount: string;
  name: "trending-up" | "trending-down";
  color: "green" | "red";
};

export function SummaryCard({ title, amount, name, color }: Props) {
  return (
    <View style={styles.container}>
      {/* <Image /> */}
      <Feather name={name} size={24} color={color} style={styles.icon} />
      <View style={styles.dataContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.amount}>{amount}</Text>
      </View>
    </View>
  );
}
