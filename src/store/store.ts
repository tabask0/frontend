import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import invoicesReducer from "./invoicesSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    invoices: invoicesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
