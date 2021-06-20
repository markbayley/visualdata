import React, { useState, useCallback, useEffect } from "react";
import PieChart from "../charts/PieChart";
import "./Home.css";
import { csv } from "d3";
import { message } from "../data/message";
import DonutChart from "../charts/DonutChart";
import InteractivityBasic from "../charts/InteractivityBasic";
import CurvedLineChart from "../charts/CurvedLineChart";


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
        <li class="flex-item-chart">
          <InteractivityBasic />
        </li>
        <li class="">
          <DonutChart />
        </li>
        <li class="flex-item">
          <h3>Employees by Residency </h3>
          {/* <PieChart /> */}
        </li>
        <li class="flex-item">
          <h3>Employees by Gender </h3>
          {/* <div className="number">45%</div>
          Female{" "} */}
        </li>
        <li class="flex-item-large">
          <h3>Employees by Age Group </h3>
          <CurvedLineChart />
        </li>
      </ul>
    </div>
  );
};

export default Home;
