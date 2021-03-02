import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import Todo from "./TodoList";
import "./index.css";
import Shop from "./components/Shop";

const routes = [
    { path: '/react', exact: true, component: Home },
    { path: '/react/todo', component: Todo },
    { path: '/react/shop', component: Shop }
]

export default function Root() {
  return (
    <Router>
        { routes.map(route => <Route {...route} />) }
    </Router>
  );
}
