import React from "react";
import { ThemeProvider } from "@material-ui/core/styles"
import MainTheme from "./theme"
import Router from './pages/router'

function App() {
  return (
    <ThemeProvider theme={MainTheme}>
      <Router />
    </ThemeProvider>

  );
}

export default App;
