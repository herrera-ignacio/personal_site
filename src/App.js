import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { ThemeProvider } from "@material-ui/core/styles"
import MainTheme from "./theme"
import NavBar from "./components/nav-bar"
import HomePage from "./pages/home"
import ContactPage from "./pages/contact"

function App() {
  return (
    <ThemeProvider theme={MainTheme}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
