import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Components/AppBar";
import Theme from "./theme";
import { BrowserRouter, Router } from "react-router-dom";
import AppRouter from "./router";
import { Provider } from "react-redux";
// import store from "./Store/Index";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./Store/index.js";
// import { persistor, store } from "./Store";

export default function Blog() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={Theme}>
          <CssBaseline enableColorScheme />
          <BrowserRouter>
            <Header />
            <div style={{ padding: "16px" }}>
              <AppRouter />
            </div>
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
