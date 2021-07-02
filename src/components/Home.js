import React from "react";
import "./Home.css";
import { message } from "../data/message";
import DonutChart from "../charts/DonutChart";
import InteractivityBasic from "../charts/InteractivityBasic";
import { Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import * as FaIcons from "react-icons/fa";
import Donut from "../charts/Donut";
import DonutGender from "../charts/DonutGender";
import DonutAge from "../charts/DonutAge";

const Home = () => {
  return (
    <div className="home">
      <div className="flex-container">
        <div className="flex-item-chart">
          <h3>
            Business Unit
            <div className="total">
              <li className="active">
                <Tooltip title="Headcount" placement="bottom">
                  <FaIcons.FaExpand />
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
            <Link to="/filter">Work Status</Link>
            <div className="total">
              <li className="active">
                <Tooltip title="Headcount" placement="bottom">
                  <FaIcons.FaProjectDiagram />
                </Tooltip>
              </li>
            </div>
          </h3>
          <DonutChart />
        </div>
        <div className="flex-item-small">
          <h3>
            Residency{" "}
            <div className="total">
              <li className="active">
                <Tooltip title="Headcount" placement="bottom">
                  <FaIcons.FaUsers />
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
                  <FaIcons.FaUsers />
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
                  <FaIcons.FaUsers />
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
