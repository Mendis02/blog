import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home"
import About from "./About"

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <hr />

        <Switch>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}