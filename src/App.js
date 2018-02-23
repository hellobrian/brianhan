import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import UsesPage from "./pages/UsesPage";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/uses" component={UsesPage} />
      </Switch>
    );
  }
}

export default App;
