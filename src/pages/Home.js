import React from "react";
import GenderAnalysis from "../GenderAnalysis";
import Pie from "../Pie";
import "./Home.css";


function Home() {
  return (
    <div className="home">
      <ul class="flex-container">
        <li class="flex-item">
          Total Employees <h1>277</h1>
        </li>
        <li class="flex-item">Total Age Distribution Graph</li>
        <li class="flex-item">
          {" "}
          <Pie />
        </li>
     
      </ul>
      <h2 style={{ textAlign: "center" }}></h2>
      <div style={{ width: "50%", marginLeft: "3%" }}>
        <GenderAnalysis />
      </div>
    </div>
  );
}

export default Home;
