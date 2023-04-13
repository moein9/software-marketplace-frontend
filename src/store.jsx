import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./redux/counterSlice";
import { productApi } from "./redux/services/apiSlice";
import cartReducer from "./redux/services/cartSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [productApi.reducerPath]: productApi.reducer,
    cart: cartReducer, // add the cart reducer here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
