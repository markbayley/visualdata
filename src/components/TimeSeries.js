import React, { useState, useEffect } from "react";
import "./Home.css";

import CurvedLineChart from "../charts/CurvedLineChart";
import { csv } from "d3";
import { Link } from "react-router-dom";

import Tooltip from "@material-ui/core/Tooltip";



import * as FaIcons from "react-icons/fa";


import TimeAnalysis from "./TimeAnalysis";

const csvUrl = "./chart-data.csv";

const TimeSeries = () => {
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
                <Tooltip title="Business Unit" placement="bottom">
                  <Link onClick={toggleChecked2}>
                    <h6> 6mth</h6>
                  </Link>
                </Tooltip>
              </li>
              <li className="active">
                <Tooltip title="Business Unit" placement="bottom">
                  <Link onClick={toggleChecked2}>
                    <h6> 1yr</h6>
                  </Link>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Gender" placement="bottom">
                  <Link onClick={toggleChecked2}>
                    <h6> 3yr</h6>
                  </Link>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Age Group" placement="bottom">
                  <Link onClick={toggleChecked2}>
                    <h6> 5yr</h6>
                  </Link>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Residency" placement="bottom">
                  <Link onClick={toggleChecked2}>
                    <FaIcons.FaRegCalendar />
                  </Link>
                </Tooltip>
              </li>
            </div>
          </h3>

          <TimeAnalysis />
        </div>
        <div className="flex-item">
          <h3>
            Work Status
            <div className="total">
              <li className="active">
                <Tooltip title="Business Unit" placement="bottom">
                  <Link onClick={toggleChecked2}>
                    <h6> 6mth</h6>
                  </Link>
                </Tooltip>
              </li>
              <li className="active">
                <Tooltip title="Business Unit" placement="bottom">
                  <Link onClick={toggleChecked2}>
                    <h6> 1yr</h6>
                  </Link>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Gender" placement="bottom">
                  <Link onClick={toggleChecked2}>
                    <h6> 3yr</h6>
                  </Link>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Age Group" placement="bottom">
                  <Link onClick={toggleChecked2}>
                    <h6> 5yr</h6>
                  </Link>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Residency" placement="bottom">
                  <Link onClick={toggleChecked2}>
                    <FaIcons.FaRegCalendar />
                  </Link>
                </Tooltip>
              </li>
            </div>
          </h3>
          <TimeAnalysis />
        </div>
        <div className="flex-item-small">
          <h3>
            Residency{" "}
            <div className="total">
              <li className="active">
                <Tooltip title="Business Unit" placement="bottom">
                  <Link onClick={toggleChecked2}>
                    <h6> 6mth</h6>
                  </Link>
                </Tooltip>
              </li>
              <li className="active">
                <Tooltip title="Business Unit" placement="bottom">
                  <Link onClick={toggleChecked2}>
                    <h6> 1yr</h6>
                  </Link>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Gender" placement="bottom">
                  <Link onClick={toggleChecked2}>
                    <h6> 3yr</h6>
                  </Link>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Age Group" placement="bottom">
                  <Link onClick={toggleChecked2}>
                    <h6> 5yr</h6>
                  </Link>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Residency" placement="bottom">
                  <Link onClick={toggleChecked2}>
                    <FaIcons.FaRegCalendar />
                  </Link>
                </Tooltip>
              </li>
            </div>
          </h3>
          <TimeAnalysis />
        </div>
        <div className="flex-item-small">
          <h3>
            Gender{" "}
            <div className="total">
              <li className="active">
                <Tooltip title="Business Unit" placement="bottom">
                  <Link onClick={toggleChecked2}>
                    <h6> 6mth</h6>
                  </Link>
                </Tooltip>
              </li>
              <li className="active">
                <Tooltip title="Business Unit" placement="bottom">
                  <Link onClick={toggleChecked2}>
                    <h6> 1yr</h6>
                  </Link>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Gender" placement="bottom">
                  <Link onClick={toggleChecked2}>
                    <h6> 3yr</h6>
                  </Link>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Age Group" placement="bottom">
                  <Link onClick={toggleChecked2}>
                    <h6> 5yr</h6>
                  </Link>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Residency" placement="bottom">
                  <Link onClick={toggleChecked2}>
                    <FaIcons.FaRegCalendar />
                  </Link>
                </Tooltip>
              </li>
            </div>
          </h3>
          <TimeAnalysis />
        </div>
        <div className="flex-item-small">
          <h3>
            Age Group{" "}
            <div className="total">
              <li className="active">
                <Tooltip title="Business Unit" placement="bottom">
                  <Link onClick={toggleChecked2}>
                    <h6> 6mth</h6>
                  </Link>
                </Tooltip>
              </li>
              <li className="active">
                <Tooltip title="Business Unit" placement="bottom">
                  <Link onClick={toggleChecked2}>
                    <h6> 1yr</h6>
                  </Link>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Gender" placement="bottom">
                  <Link onClick={toggleChecked2}>
                    <h6> 3yr</h6>
                  </Link>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Age Group" placement="bottom">
                  <Link onClick={toggleChecked2}>
                    <h6> 5yr</h6>
                  </Link>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Residency" placement="bottom">
                  <Link onClick={toggleChecked2}>
                    <FaIcons.FaRegCalendar />
                  </Link>
                </Tooltip>
              </li>
            </div>
          </h3>
          <TimeAnalysis />
        </div>
      </div>
    </div>
  );
};

export default TimeSeries;
