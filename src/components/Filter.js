import React, { useState, useEffect } from "react";
import "./Home.css";
import { message } from "../data/message";
import DonutChart from "../charts/DonutChart";
import InteractivityBasic from "../charts/InteractivityBasic";
import CurvedLineChart from "../charts/CurvedLineChart";
import { csv } from "d3";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Tooltip from "@material-ui/core/Tooltip";

import Bar from "../charts/Bar";

import * as FaIcons from "react-icons/fa";
import BusinessAnalysis from "./BusinessAnalysis";

import ResidencyAnalysis from "./ResidencyAnalysis";
import WorkAnalysis from "./WorkAnalysis";
import GenderAnalysis from "./GenderAnalysis";
import AgeAnalysis from "./AgeAnalysis";
import StackedArea from "../charts/StackedArea";
import BusinessAnalysisAge from "./BusinessAnalysisAge";
import BusinessAnalysisWork from "./BusinessAnalysisWork";
import GenderAnalysis2 from "./GenderAnalysis2";
import WorkAnalysis2 from "./WorkAnalysis2";

const csvUrl = "./chart-data.csv";

const Filter = () => {
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
                <Tooltip title="Gender" placement="bottom">
                  <Link onClick={toggleChecked}>
                    <FaIcons.FaVenusMars />
                  </Link>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Age Group" placement="bottom">
                  <Link onClick={toggleChecked}>
                    <FaIcons.FaRegClock />
                  </Link>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Work Status" placement="bottom">
                  <Link onClick={toggleChecked}>
                    <FaIcons.FaBusinessTime />
                  </Link>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Residency" placement="bottom">
                  <Link onClick={toggleChecked}>
                    <FaIcons.FaPassport />
                  </Link>
                </Tooltip>
              </li>
            </div>
          </h3>
          <div>
            {/* {!toggle && <BusinessAnalysisAge />} */}
            {toggle && <BusinessAnalysis />}
            {!toggle && <BusinessAnalysisWork />}
          </div>
        </div>
        <div className="flex-item" style={{ border: "1px solid grey" }}>
          <h3>
            Work Status
            <div className="total">
              <li className="active">
                <Tooltip title="Business Unit" placement="bottom">
                  <Link onClick={toggleChecked2}>
                    <FaIcons.FaProjectDiagram />
                  </Link>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Gender" placement="bottom">
                  <Link onClick={toggleChecked2}>
                    <FaIcons.FaVenusMars />
                  </Link>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Age Group" placement="bottom">
                  <Link onClick={toggleChecked2}>
                    <FaIcons.FaRegClock />
                  </Link>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Residency" placement="bottom">
                  <Link onClick={toggleChecked2}>
                    <FaIcons.FaPassport />
                  </Link>
                </Tooltip>
              </li>
            </div>
          </h3>
          {toggle2 && <WorkAnalysis2 />}
          {!toggle2 && <WorkAnalysis />}
        </div>
        <div className="flex-item-small">
          <h3>
            Residency{" "}
            <div className="total">
              <li className="active">
                <Tooltip title="Business Unit" placement="bottom">
                  <Link onClick={toggleChecked4}>
                    <FaIcons.FaProjectDiagram />
                  </Link>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Gender" placement="bottom">
                  <Link onClick={toggleChecked4}>
                    <FaIcons.FaVenusMars />
                  </Link>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Age Group" placement="bottom">
                  <Link onClick={toggleChecked4}>
                    <FaIcons.FaRegClock />
                  </Link>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Work Status" placement="bottom">
                  <Link onClick={toggleChecked4}>
                    <FaIcons.FaBusinessTime />
                  </Link>
                </Tooltip>
              </li>
            </div>
          </h3>
          {!toggle4 && <CurvedLineChart />}
          {toggle4 && <ResidencyAnalysis />}
        </div>
        <div className="flex-item-small">
          <h3>
            Gender{" "}
            <div className="total">
              <li className="active">
                <Tooltip title="Business Unit" placement="bottom">
                  <Link onClick={toggleChecked3}>
                    <FaIcons.FaProjectDiagram />
                  </Link>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Age Group" placement="bottom">
                  <Link onClick={toggleChecked3}>
                    <FaIcons.FaRegClock />
                  </Link>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Work Status" placement="bottom">
                  <Link onClick={toggleChecked3}>
                    <FaIcons.FaBusinessTime />
                  </Link>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Residency" placement="bottom">
                  <Link onClick={toggleChecked3}>
                    <FaIcons.FaPassport />
                  </Link>
                </Tooltip>
              </li>
            </div>{" "}
          </h3>
          {toggle3 && <GenderAnalysis2/>}
          {!toggle3 && <CurvedLineChart />}
        </div>
        <div className="flex-item-small">
          <h3>
            Age Group{" "}
            <div className="total">
              <li className="active">
                <Tooltip title="Business Unit" placement="bottom">
                  <Link onClick={toggleChecked5}>
                    <FaIcons.FaProjectDiagram />
                  </Link>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Gender" placement="bottom">
                  <Link onClick={toggleChecked5}>
                    <FaIcons.FaVenusMars />
                  </Link>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Work Status" placement="bottom">
                  <Link onClick={toggleChecked5}>
                    <FaIcons.FaBusinessTime />
                  </Link>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Residency" placement="bottom">
                  <Link onClick={toggleChecked5}>
                    <FaIcons.FaPassport />
                  </Link>
                </Tooltip>
              </li>
            </div>
          </h3>
          {!toggle5 && <CurvedLineChart />}
          {toggle5 && <AgeAnalysis />}
        </div>
      </div>
    </div>
  );
};

export default Filter;
