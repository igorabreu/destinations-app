import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { ThemeProvider } from "styled-components";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { GlobalStyle } from "../src/_settings/global-style";
import { theme } from "../src/_settings/style-theme";
import storage from "redux-persist/lib/storage";
import rootReducer from "./store/reducers";
import App from "./App";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer);
let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />
        <App />
      </PersistGate>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
