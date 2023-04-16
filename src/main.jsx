import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store.jsx";
import { productApi } from "./redux/services/apiSlice";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </Provider>
  
);
