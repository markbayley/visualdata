import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import WorkStatusMenu from "./pages/WorkStatusMenu";
import ResidencyMenu from "./pages/ResidencyMenu";
import GenderMenu from "./pages/GenderMenu";
import BusinessUnitMenu from "./pages/BusinessUnitMenu";
import AgeGroupMenu from "./pages/AgeGroupMenu";

function App() {
  
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/business unit" component={BusinessUnitMenu} />
          <Route path="/gender" component={GenderMenu} />
          <Route path="/age group" component={AgeGroupMenu} />
          <Route path="/work status" component={WorkStatusMenu} />
          <Route path="/residency" component={ResidencyMenu} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
