import React, { useState } from "react";
import "./Home.css";
import Tooltip from "@material-ui/core/Tooltip";
import * as FaIcons from "react-icons/fa";
import BusinessAnalysis from "./BusinessAnalysis";
import ResidencyAnalysis from "./ResidencyAnalysis";
import WorkAnalysis from "./WorkAnalysis";
import AgeAnalysis from "./AgeAnalysis";
import GenderAnalysis2 from "./GenderAnalysis2";

const Filter = () => {
  return (
    <div className="home">
      <div className="flex-container">
        <div className="flex-item-chart">
          <h3>
            Work Status
            <div className="total">
              <li>
                <Tooltip title="Business Unit" placement="bottom">
                  <FaIcons.FaProjectDiagram />
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Gender" placement="bottom">
                  <FaIcons.FaVenusMars />
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Age Group" placement="bottom">
                  <FaIcons.FaRegClock />
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Residency" placement="bottom">
                  <FaIcons.FaPassport className="active" />
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Filter" placement="bottom">
                  <FaIcons.FaFilter />
                </Tooltip>
              </li>
            </div>
          </h3>
          <BusinessAnalysis />
        </div>
        <div className="flex-item">
          <h3>
            Work Status
            <div className="total">
              <li>
                <Tooltip title="Business Unit" placement="bottom">
                  <FaIcons.FaProjectDiagram />
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Gender" placement="bottom">
                  <FaIcons.FaVenusMars />
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Age Group" placement="bottom">
                  <FaIcons.FaRegClock />
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Residency" placement="bottom">
                  <FaIcons.FaPassport className="active" />
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Filter" placement="bottom">
                  <FaIcons.FaFilter />
                </Tooltip>
              </li>
            </div>
          </h3>
          <WorkAnalysis />
        </div>
        <div className="flex-item-small">
          <h3>
            Residency{" "}
            <div className="total">
              <li>
                <Tooltip title="Business Unit" placement="bottom">
                  <FaIcons.FaProjectDiagram />
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Gender" placement="bottom">
                  <FaIcons.FaVenusMars />
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Age Group" placement="bottom">
                  <FaIcons.FaRegClock />
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Work Status" placement="bottom">
                  <FaIcons.FaBusinessTime className="active" />
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Filter" placement="bottom">
                  <FaIcons.FaFilter />
                </Tooltip>
              </li>
            </div>
          </h3>
          <ResidencyAnalysis />
        </div>
        <div className="flex-item-small">
          <h3>
            Gender{" "}
            <div className="total">
              <li>
                <Tooltip title="Business Unit" placement="bottom">
                  <FaIcons.FaProjectDiagram />
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Age Group" placement="bottom">
                  <FaIcons.FaRegClock />
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Work Status" placement="bottom">
                  <FaIcons.FaBusinessTime className="active" />
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Residency" placement="bottom">
                  <FaIcons.FaPassport />
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Filter" placement="bottom">
                  <FaIcons.FaFilter />
                </Tooltip>
              </li>
            </div>{" "}
          </h3>
          <GenderAnalysis2 />
        </div>
        <div className="flex-item-small">
          <h3>
            Age Group{" "}
            <div className="total">
              <li>
                <Tooltip title="Business Unit" placement="bottom">
                  <FaIcons.FaProjectDiagram />
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Gender" placement="bottom">
                  <FaIcons.FaVenusMars className="active" />
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Work Status" placement="bottom">
                  <FaIcons.FaBusinessTime />
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Residency" placement="bottom">
                  <FaIcons.FaPassport />
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Filter" placement="bottom">
                  <FaIcons.FaFilter />
                </Tooltip>
              </li>
            </div>
          </h3>
          <AgeAnalysis />
        </div>
      </div>
    </div>
  );
};

export default Filter;
