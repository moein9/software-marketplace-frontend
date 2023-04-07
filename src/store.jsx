import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./redux/counterSlice";
import { productApi } from "./redux/services/apiSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
