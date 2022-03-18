import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TransactionType } from "./transactionSlice";

// Remove transaction from AsyncStorage
const removeValue = async (id: string) => {
  try {
    await AsyncStorage.removeItem(id);
  } catch (error) {
    Alert.alert(error as string);
  }
};

// Add transaction to AsyncStorage
const addValue = async (transaction: TransactionType) => {
  try {
    const jsonValue = JSON.stringify(transaction);
    await AsyncStorage.setItem(transaction.id, jsonValue);
  } catch (error) {
    Alert.alert(error as string);
  }
};

// Get all the keys in an array
const getAllKeys = async () => {
  let keys: string[] = [];
  try {
    keys = await AsyncStorage.getAllKeys();
  } catch (error) {
    Alert.alert(error as string);
  }
  return keys;
};

// Get everything in AsyncStorage using the keys array
const getMultiple = async () => {
  let values: [string, string | null][] = [];
  try {
    const keys = await getAllKeys();
    values = await AsyncStorage.multiGet(keys);
  } catch (error) {
    Alert.alert(error as string);
  }
  return values;
};

// Since everything is stored using JSON.stringify, we have to parse each one
const parseMultiple = async () => {
  let transactions: TransactionType[] = [];
  try {
    const values = await getMultiple();
    transactions = values.map((t) => {
      if (t[1]) {
        return JSON.parse(t[1]);
      }
    });
  } catch (error) {
    Alert.alert(error as string);
  }
  return transactions;
};

export { addValue, removeValue, parseMultiple };
