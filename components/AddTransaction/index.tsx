import { useState } from "react";
import {
  View,
  Text,
  Modal,
  Pressable,
  TextInput,
  Alert,
  Platform,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TransactionType, useTransactions } from "../../context/GlobalState";
import { styles } from "./styles";

export function AddTransaction() {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const { addTransaction } = useTransactions();
  const resetFields = () => {
    setText("");
    setDescription("");
    setAmount("");
  };

  const onAdd = () => {
    if (!text || !description || !amount) {
      return Alert.alert("You must complete all fields");
    }
    const newTransaction: TransactionType = {
      id: Math.floor(Math.random() * 100),
      text,
      description,
      amount: +amount,
      createdAt: new Date(),
    };
    if (addTransaction) addTransaction(newTransaction);
    resetFields();
    setModalVisible(!modalVisible);
  };

  const onClose = () => {
    resetFields();
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <Modal animationType="fade" visible={modalVisible} transparent>
        <View style={styles.container}>
          <View style={styles.modalView}>
            <Text style={{ fontSize: 21, marginBottom: 15 }}>
              New Transaction
            </Text>
            <Text style={styles.inputTitle}>Title</Text>
            <TextInput
              value={text}
              onChangeText={setText}
              style={styles.input}
            />
            <Text style={styles.inputTitle}>Desciption</Text>
            <TextInput
              value={description}
              onChangeText={setDescription}
              style={styles.input}
            />
            <Text style={styles.inputTitle}>Amount</Text>
            <TextInput
              value={amount}
              onChangeText={setAmount}
              style={styles.input}
              keyboardType={
                Platform.OS === "android"
                  ? "numeric"
                  : "numbers-and-punctuation"
              }
              placeholder="Negative values for expenses"
            />
            <View style={styles.buttons}>
              <Pressable onPress={onAdd}>
                <Text>Add</Text>
              </Pressable>
              <Pressable onPress={onClose}>
                <Text>Close</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        onPress={() => setModalVisible(!modalVisible)}
        disabled={modalVisible}
      >
        <AntDesign
          name="pluscircle"
          size={48}
          color={modalVisible ? "gray" : "black"}
        />
      </Pressable>
    </View>
  );
}
