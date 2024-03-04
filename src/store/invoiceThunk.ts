import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchInvoices = createAsyncThunk(
  "invoices",
  async (_, { rejectWithValue }) => {
    try {
      const username = "postgres";
      const password = "admin";
      const token = Buffer.from(`${username}:${password}`, "utf8").toString(
        "base64"
      );

      const response = await axios.get("/invoices/invoices", {
        headers: {
          Authorization: `Basic ${token}`,
        },
      });

      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
