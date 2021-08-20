import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./component/Home/Home";
import { UserProvider } from "./component/UserContext/UserContext";
import Delete from "./component/Delete/Delete";
import Read from "./component/Read/Read";
import Create from "./component/Create/Create";
import Edit from "./component/Edit/Edit";

function App() {
  return (
    <div className="app">
      <UserProvider>
        <Router>
          <Switch>
            <Route path="/create/">
              <Create />
            </Route>
            <Route path="/edit/:id">
              <Edit />
            </Route>
            <Route path="/read/:id">
              <Read />
            </Route>
            <Route path="/delete/:id">
              <Delete />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
