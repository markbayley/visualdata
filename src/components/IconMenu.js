import React from 'react'
import Tooltip from "@material-ui/core/Tooltip";
import * as FaIcons from "react-icons/fa";

export const IconMenu = () => {
    return (
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
    );
}
