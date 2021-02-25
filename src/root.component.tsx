import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Nav from "./nav";

export default function Root() {
  return (
    <Router>
      <Route path="/react" exact>
        <Nav />
      </Route>
    </Router>
  );
}
