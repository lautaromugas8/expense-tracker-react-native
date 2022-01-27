import { View, Text } from "react-native";
import { styles } from "./styles";

type Props = {
  text: string;
  description: string;
  amount: number;
};

export function Transaction({ text, description, amount }: Props) {
  return (
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
  );
}
