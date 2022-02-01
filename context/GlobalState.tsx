import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export type TransactionType = {
  id: string;
  text: string;
  description: string;
  amount: number;
  createdAt: Date;
};

export interface GlobalContextInterface {
  transactions: TransactionType[];
  addTransaction?: (transaction: TransactionType) => void;
  deleteTransaction?: (id: string) => void;
}

const initialState: GlobalContextInterface = {
  transactions: [],
};

// Create App Context
export const GlobalContext =
  createContext<GlobalContextInterface>(initialState);

// Hook to use the context
export const useTransactions = () => {
  return useContext(GlobalContext);
};

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

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<GlobalContextInterface>(initialState);

  const addTransaction = async (transaction: TransactionType) => {
    try {
      await addValue(transaction);
      setState((prevState) => ({
        ...prevState,
        transactions: [...prevState.transactions, transaction],
      }));
    } catch (error) {
      Alert.alert(error as string);
    }
  };

  const deleteTransaction = async (id: string) => {
    try {
      await removeValue(id);
      setState((prevState) => ({
        ...prevState,
        transactions: prevState.transactions.filter(
          (transaction) => transaction.id !== id
        ),
      }));
    } catch (error) {
      Alert.alert(error as string);
    }
  };

  useEffect(() => {
    const getAllTransactions = async () => {
      try {
        const response = await parseMultiple();
        setState((prevState) => ({
          ...prevState,
          transactions: response,
        }));
      } catch (error) {
        Alert.alert(error as string);
      }
    };
    getAllTransactions();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
