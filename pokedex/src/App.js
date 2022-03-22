import React from "react";
import { GlobalStyle, MainContainer } from "./components/globalStyle";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/router";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./constants/theme";
import GlobalState from "./Global/GlobalState";
import Header from "./components/Header/Header";

function App() {
  return (
    <GlobalState>
      <ThemeProvider theme={theme}>
        <MainContainer>
          <GlobalStyle />
          <BrowserRouter>
            <Header />
            <Router />
          </BrowserRouter>
        </MainContainer>
      </ThemeProvider>
    </GlobalState>
  );
}

export default App;
