import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Saved from "./pages/Saved"
import Search from "./pages/Search"
import Header from "./components/Header/Header"


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </Switch>
    </Router>
  );
}


export default App;
