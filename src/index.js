import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./components/store/reducers";

import App from "./App";
import thunk from "redux-thunk";

import "./index.css";

export const store = configureStore(
  { reducer: rootReducer },
  applyMiddleware(thunk)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HashRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </HashRouter>
  </Provider>
);
