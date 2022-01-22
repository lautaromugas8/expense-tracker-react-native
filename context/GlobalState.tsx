import React, { createContext, useState, useContext } from "react";

type Transaction = {
  id: number;
  text: string;
  description: string;
  amount: number;
};

export interface GlobalContextInterface {
  transactions: Transaction[];
  addTransaction?: (transaction: Transaction) => void;
  deleteTransaction?: (id: number) => void;
}

const initialState: GlobalContextInterface = {
  transactions: [
    {
      id: 1,
      text: "Restaurant",
      description: "Today's date was awesome",
      amount: -1000,
    },
    {
      id: 2,
      text: "Coffee",
      description: "Invited everyone to have coffee today",
      amount: -133,
    },
    { id: 3, text: "Transfer", description: "Cash to Card", amount: 15000 },
  ],
};

export const GlobalContext =
  createContext<GlobalContextInterface>(initialState);

export const useTransactions = () => {
  return useContext(GlobalContext);
};

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<GlobalContextInterface>(initialState);

  const addTransaction = (transaction: Transaction) => {
    setState((prevState) => ({
      ...prevState,
      transactions: [...prevState.transactions, transaction],
    }));
  };

  const deleteTransaction = (id: number) => {
    setState((prevState) => ({
      ...prevState,
      transactions: prevState.transactions.filter(
        (transaction) => transaction.id !== id
      ),
    }));
  };

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
