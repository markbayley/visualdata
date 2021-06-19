import React, { useState, useCallback, useEffect } from "react";
import GenderAnalysis from "../components/GenderAnalysis";
import Pie from "../charts/Pie";
import "./Home.css";
import { csv } from "d3";
import { message } from "../data/message";
import DonutChart from "../charts/DonutChart";
import InteractivityBasic from "../charts/InteractivityBasic";
import CurvedLineChart from "../charts/CurvedLineChart";


const csvUrl = "./chart-data.csv";

const BusinessUnitMenu = () => {
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
        {/* <li class="flex-item">
          <div className="number">{data ? message(data) : "Loading..."}</div>
          Employees{" "}
        </li> */}

        {/* <li class="flex-item">
          <div className="number">45%</div>
          Female{" "}
        </li> */}

        <li class="flex-item-chart">
          {" "}
          <GenderAnalysis />
        </li>
        <li class="">
          <h3>Business Unit by Work Status </h3>
          <DonutChart />
        </li>
        {/* <li class="" style={{ border: "1px solid red" }}>
          {" "}
          <InteractivityBasic />
        </li> */}
        <li class="flex-item">
          <h3>Business Unit by Residency </h3>
        </li>
        <li class="flex-item">
          <h3>Business Unit by Gender </h3>
          {/* <div className="number">45%</div>
          Female{" "} */}
        </li>
        <li class="flex-item-large">
          <h3>Business Unit by Age Group </h3>
          <CurvedLineChart />
        </li>
      </ul>
    </div>
  );
};

export default BusinessUnitMenu;
