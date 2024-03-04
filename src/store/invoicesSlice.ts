/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchInvoices } from "./invoiceThunk";
import axios from "axios";

interface InvoiceState {
  invoices: any[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: InvoiceState = {
  invoices: [],
  status: "idle",
  error: null,
};

const invoiceSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {},
});

export default invoiceSlice.reducer;
