import React, { useState, useCallback, useEffect } from "react";
import GenderAnalysis from "../GenderAnalysis";
import Pie from "../Pie";
import "./Home.css";
import { csv } from "d3";
import { message } from "../message";




const csvUrl =
  "./chart-data.csv";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvUrl).then(setData);
  }, []);

  

   console.log(data);
  //  console.log(data.columns.person_id);

    // <pre>
    //   {data
    //     .filter((person_id) => (person_id.gender = "Male"))
    //     .map((filteredPerson) => (
    //       <li>{filteredPerson.name}</li>
    //     ))}
    // </pre>;


  return (
    <div className="home">
      <ul class="flex-container">
        <li class="flex-item">
          <div className="number">{data ? message(data) : "Loading..."}</div>
          Employees{" "}
        </li>

        <li class="flex-item">
          <div className="number">45%</div>
          Female{" "}
        </li>
        <li class="flex-item">
          {" "}
          <Pie />
        </li>
      </ul>
      <h2 style={{ textAlign: "center" }}></h2>
      <div style={{ marginLeft: "3%", marginRight: "3%" }}>
        <GenderAnalysis />
      </div>
    </div>
  );
};

export default Home;
