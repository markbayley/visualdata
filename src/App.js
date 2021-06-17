import React, { useState } from "react";
import "./App.css";
import Counters from "./Counters";
import GenderAnalysis from "./GenderAnalysis";
import GenderByAge from "./GenderByAge";
import Pie from "./Pie";
// import Victory from "./Victory";
import WorkClassByAge from "./WorkClassByAge";



function App() {
  
  return (
    <div className="mainview">
      <GenderAnalysis />
      {/* <WorkClassByAge /> */}
      {/* <Victory /> */}
      {/* <Pie /> */}
      {/* <Counters /> */}
      <GenderByAge />
   
    </div>
  );
}

export default App;
