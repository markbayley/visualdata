import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Filter from "./components/Filter";
import TimeSeries from "./components/TimeSeries";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact />
        <Route path="/filter" component={Filter} />
        <Route path="/time-series" component={TimeSeries} />
      </Switch>
    </Router>
  );
}

export default App;
