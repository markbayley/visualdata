import React, { useState } from "react";
import "./Home.css";
import Tooltip from "@material-ui/core/Tooltip";
import * as FaIcons from "react-icons/fa";
import BusinessAnalysis from "./BusinessAnalysis";
import ResidencyAnalysis from "./ResidencyAnalysis";
import WorkAnalysis2 from "./WorkAnalysis2";
import AgeAnalysis from "./AgeAnalysis";
import GenderAnalysis2 from "./GenderAnalysis2";
import { IconMenu } from "./IconMenu";

const Filter = () => {
  return (
    <div className="home">
      <div className="flex-container">
        <div className="flex-item-chart">
          <h3>
            Work Status
            <IconMenu />
          </h3>
          <BusinessAnalysis />
        </div>
        <div className="flex-item">
          <h3>
            Work Status
            <IconMenu />
          </h3>
          <WorkAnalysis2 />
        </div>
        <div className="flex-item-small">
          <h3>
            Residency
            <IconMenu />
          </h3>
          <ResidencyAnalysis />
        </div>
        <div className="flex-item-small">
          <h3>
            Gender <IconMenu />
          </h3>
          <GenderAnalysis2 />
        </div>
        <div className="flex-item-small">
          <h3>
            Age Group <IconMenu />
          </h3>
          <AgeAnalysis />
        </div>
      </div>
    </div>
  );
};

export default Filter;
