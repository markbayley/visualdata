import React, { useState, useCallback, useEffect } from "react";
import "./Home.css";
import { message } from "../data/message";
import DonutChart from "../charts/DonutChart";
import InteractivityBasic from "../charts/InteractivityBasic";
import CurvedLineChart from "../charts/CurvedLineChart";
import { csv } from "d3";
// import Test from './../Test';
import Bar from "../charts/Bar";

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
      <ul className="flex-container">
        <li className="flex-item-chart">
          <h3>
            Employees by Business Unit{" "}
            <div className="total">
              Total: {data ? message(data) : "Loading..."}{" "}
            </div>
          </h3>
          <InteractivityBasic />
        </li>
        <li className="">
          <DonutChart />
        </li>
        <li className="flex-item">
          <h3>Employees by Residency </h3>
          {/* <PieChart /> */}
        </li>
        <li className="flex-item">
          <h3>Employees by Gender </h3>
          {/* <div className="number">45%</div>
          Female{" "} */}
          <Bar />
        </li>
        <li className="flex-item-large">
          <h3>Employees by Age Group </h3>
          <CurvedLineChart />
        </li>
      </ul>

      {/* <Test /> */}
    </div>
  );
};

export default Home;
