import { View, Text, Pressable, Alert } from "react-native";
import { useTransactions } from "../../context/GlobalState";
import { styles } from "./styles";

type Props = {
  text: string;
  description: string;
  amount: number;
  id: string;
};

export function Transaction({ text, description, amount, id }: Props) {
  const { deleteTransaction } = useTransactions();

  return (
    <Pressable
      onPress={() =>
        Alert.alert("Delete this transaction?", undefined, [
          {
            text: "Yes",
            onPress: () => {
              if (deleteTransaction) deleteTransaction(id);
            },
          },
          { text: "No", style: "cancel" },
        ])
      }
    >
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>{text}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View>
          <Text
            style={[
              styles.amount,
              {
                color: amount < 0 ? "red" : "green",
              },
            ]}
          >
            {amount < 0 ? `-$${Math.abs(amount)}` : `$${amount}`}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
