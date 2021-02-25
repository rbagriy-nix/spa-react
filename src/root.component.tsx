import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import Todo from "./TodoList";
import "./index.css";
import Shop from "./components/Shop";

export default function Root() {
  return (
    <Router>
      <Route path="/react" exact>
        <Home />
      </Route>
      <Route path="/react/todo">
        <Todo />
      </Route>
    <Route path="/react/shop">
        <Shop />
    </Route>
    </Router>
  );
}
