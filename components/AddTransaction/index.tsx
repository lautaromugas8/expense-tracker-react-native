import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  Keyboard,
} from "react-native";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useTheme } from "@react-navigation/native";
import { useAppDispatch } from "../../app/hooks";
import { addTransaction } from "../../app/transactionSlice";
import Util from "../../utils";
import type { TransactionType } from "../../app/transactionSlice";
import { styles } from "./styles";

type FormValues = {
  text: string;
  description: string;
  amount: string;
};

export default function AddTransaction() {
  const { dark, colors } = useTheme();
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      text: "",
      description: "",
      amount: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const newTransaction: TransactionType = {
      id: Util.generateID(),
      text: data.text,
      description: data.description,
      amount: +data.amount,
      // createdAt: new Date(),
    };

    await dispatch(addTransaction(newTransaction));

    Alert.alert("Success", "Transaction added.");

    Keyboard.dismiss();
    reset();
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: colors.text }}>Title</Text>

      <View
        style={{ borderBottomWidth: 1, borderBottomColor: colors.text }}
      ></View>

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: dark ? "#292A2D" : undefined,
                color: colors.text,
              },
            ]}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name="text"
      />

      {errors.text && (
        <Text style={[styles.error, { color: dark ? "#CF6679" : "red" }]}>
          This is required.
        </Text>
      )}

      <Text style={{ color: colors.text }}>Description</Text>

      <View
        style={{ borderBottomWidth: 1, borderBottomColor: colors.text }}
      ></View>

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: dark ? "#292A2D" : undefined,
                color: colors.text,
              },
            ]}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        name="description"
      />

      {errors.description && (
        <Text style={[styles.error, { color: dark ? "#CF6679" : "red" }]}>
          This is required.
        </Text>
      )}

      <Text style={{ color: colors.text }}>Amount</Text>

      <View
        style={{ borderBottomWidth: 1, borderBottomColor: colors.text }}
      ></View>

      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /^[-+]?\d+(\.\d+)?$/,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: dark ? "#292A2D" : undefined,
                color: colors.text,
              },
            ]}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            keyboardType="number-pad"
          />
        )}
        name="amount"
      />

      {errors.amount?.type === "required" && (
        <Text style={[styles.error, { color: dark ? "#CF6679" : "red" }]}>
          This is required.
        </Text>
      )}

      {errors.amount?.type === "pattern" && (
        <Text style={[styles.error, { color: dark ? "#CF6679" : "red" }]}>
          Not a number.
        </Text>
      )}

      <Pressable
        style={[styles.button, { backgroundColor: colors.primary }]}
        android_ripple={{ radius: 90 }}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={[styles.buttonText, { color: colors.text }]}>SUBMIT</Text>
      </Pressable>
    </View>
  );
}
