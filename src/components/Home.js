import React, { useState, useEffect } from "react";
import "./Home.css";
import { message } from "../data/message";
import DonutChart from "../charts/DonutChart";
import InteractivityBasic from "../charts/InteractivityBasic";
import CurvedLineChart from "../charts/CurvedLineChart";
import { csv } from "d3";
import { Link } from "react-router-dom";

import Tooltip from "@material-ui/core/Tooltip";

import Bar from "../charts/Bar";

import * as FaIcons from "react-icons/fa";
import BusinessAnalysis from "./BusinessAnalysis";

import ResidencyAnalysis from "./ResidencyAnalysis";
import WorkAnalysis from "./WorkAnalysis";

import AgeAnalysis from "./AgeAnalysis";
import Donut from "../charts/Donut";
import DonutGender from "../charts/DonutGender";
import DonutAge from "../charts/DonutAge";




const csvUrl = "./chart-data.csv";

const Home = () => {
  const [data, setData] = useState(null);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    csv(csvUrl).then(setData);
  }, []);

  console.log(data);

   const [toggle, setToggle] = useState(true);
   const toggleChecked = () => setToggle((toggle) => !toggle);

   const [toggle2, setToggle2] = useState(true);
   const toggleChecked2 = () => setToggle2((toggle2) => !toggle2);

    const [toggle3, setToggle3] = useState(true);
    const toggleChecked3 = () => setToggle3((toggle3) => !toggle3);

     const [toggle4, setToggle4] = useState(true);
     const toggleChecked4 = () => setToggle4((toggle4) => !toggle4);

       const [toggle5, setToggle5] = useState(true);
       const toggleChecked5 = () => setToggle5((toggle5) => !toggle5);
 

  return (
    <div className="home">
      <div className="flex-container">
        <div className="flex-item-chart">
          <h3>
            Business Unit
            <div className="total">
              <li className="active">
                <Tooltip title="Headcount" placement="bottom">
                  <Link onClick={toggleChecked}>
                    <FaIcons.FaUsers />
                  </Link>
                </Tooltip>
              </li>
           
            
            </div>
          </h3>
          <div>
           <InteractivityBasic /> 
   
          </div>
        </div>
        <div className="flex-item">
          <h3>
            Work Status
            <div className="total">
              <li className="active">
                <Tooltip title="Headcount" placement="bottom">
                  <Link onClick={toggleChecked2}>
                    <FaIcons.FaProjectDiagram />
                  </Link>
                </Tooltip>
              </li>
             
            </div>
          </h3>
          {toggle2 && <DonutChart />}
          {!toggle2 && <WorkAnalysis />}
        </div>
        <div className="flex-item-small">
          <h3>
            Residency{" "}
            <div className="total">
              <li className="active">
                <Tooltip title="Headcount" placement="bottom">
                  <Link onClick={toggleChecked4}>
                    <FaIcons.FaUsers />
                  </Link>
                </Tooltip>
              </li>
           
            </div>
          </h3>
         <Donut />
      
        </div>
        <div className="flex-item-small">
          <h3>
            Gender{" "}
            <div className="total">
              <li className="active">
                <Tooltip title="Headcount" placement="bottom">
                  <Link onClick={toggleChecked3}>
                    <FaIcons.FaUsers />
                  </Link>
                </Tooltip>
              </li>
           
            </div>{" "}
          </h3>
          <DonutGender />
       
        </div>
        <div className="flex-item-small">
          <h3>
            Age Group{" "}
            <div className="total">
              <li className="active">
                <Tooltip title="Headcount" placement="bottom">
                  <Link onClick={toggleChecked5}>
                    <FaIcons.FaUsers />
                  </Link>
                </Tooltip>
              </li>
           
            </div>
          </h3>
         <DonutAge />
      
        </div>
      </div>
    </div>
  );
};

export default Home;
