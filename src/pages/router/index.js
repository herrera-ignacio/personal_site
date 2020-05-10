import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import NavBar from "../../components/nav-bar"
import HomePage from "../home"
import ContactPage from "../contact"

export default function()
{
    return (
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
    )
}