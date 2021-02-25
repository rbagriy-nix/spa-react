import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";

export default function Root() {
  return (
    <Router>
      <Route path="/react" exact>
        <Home />
      </Route>
    </Router>
  );
}
