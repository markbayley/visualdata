import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Filter from "./components/Filter";
import WorkAnalysis from "./components/WorkAnalysis";
import ResidencyAnalysis from "./components/ResidencyAnalysis";
import GenderAnalysis from "./components/GenderAnalysis";
import BusinessAnalysis from "./components/BusinessAnalysis";
import AgeAnalysis from "./components/AgeAnalysis";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact />
        <Route path="/filter" component={Filter} />
        <Route path="/business-unit" component={BusinessAnalysis} />
        <Route path="/gender" component={GenderAnalysis} />
        <Route path="/age-group" component={AgeAnalysis} />
        <Route path="/work-status" component={WorkAnalysis} />
        <Route path="/residency" component={ResidencyAnalysis} />
      </Switch>
    </Router>
  );
}

export default App;
