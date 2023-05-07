import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from "./redux/services/counterSlice";
import { productApi } from "./redux/services/apiSlice";
import cartReducer from "./redux/services/cartSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "./redux/services/authSlice";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [productApi.reducerPath]: productApi.reducer,
    cart: cartReducer,
    [authApi.reducerPath]: authApi.reducer, // add the auth reducer here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      thunk,
      productApi.middleware,
      authApi.middleware
    ),
});

setupListeners(store.dispatch);
