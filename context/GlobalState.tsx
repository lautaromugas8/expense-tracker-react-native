import React, { createContext, useState, useContext } from "react";

type Transaction = {
  id: number;
  text: string;
  amount: number;
};

export interface GlobalContextInterface {
  transactions: Transaction[];
  addTransaction?: (transaction: Transaction) => void;
  deleteTransaction?: (id: number) => void;
}

const initialState: GlobalContextInterface = {
  transactions: [],
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
