import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HelloBasePage from "./Page/HelloBasePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/hello-base">
            <HelloBasePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
