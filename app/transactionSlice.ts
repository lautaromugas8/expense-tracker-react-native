import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addValue, parseMultiple, removeValue } from "./asyncStorage";

export type TransactionType = {
  id: string;
  text: string;
  description: string;
  amount: number;
  // createdAt: Date;
};

export interface TransactionState {
  transactions: TransactionType[];
}

const initialState: TransactionState = {
  transactions: [],
};

export const addTransaction = createAsyncThunk(
  "transaction/add",
  async (transaction: TransactionType) => {
    try {
      await addValue(transaction);
      return transaction;
    } catch (error) {}
  }
);

export const deleteTransaction = createAsyncThunk(
  "transaction/delete",
  async (id: string) => {
    try {
      await removeValue(id);
      return id;
    } catch (error) {}
  }
);

export const getAllTransactions = createAsyncThunk(
  "transaction/getAll",
  async () => {
    try {
      const response = await parseMultiple();
      return response;
    } catch (error) {}
  }
);

export const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.transactions.push(action.payload as TransactionType);
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.transactions = state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        );
      })
      .addCase(getAllTransactions.fulfilled, (state, action) => {
        state.transactions = action.payload as TransactionType[];
      });
  },
});

export default transactionSlice.reducer;
