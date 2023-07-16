import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import ApplyForm from "./components/ApplyForm"; // Import ApplyForm component

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/apply-form" component={ApplyForm} />
      </Switch>
    </Router>
  );
}

export default App;
