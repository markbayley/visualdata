import React, { useState, useEffect } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";


  

function Toggle({comp}) {
      const [toggle, setToggle] = useState(true);
      const toggleMenu = () => setToggle((toggle) => !toggle);

      const [toggle1, setToggle1] = useState(true);
      const toggleChart = () => setToggle1((toggle1) => !toggle1);

  return (
    
    <div className="total">
      {toggle && (
        <li>
          <Tooltip title="Filter" placement="bottom">
            <Link onClick={toggleMenu}>
              <FaIcons.FaFilter />
            </Link>
          </Tooltip>
        </li>
      )}
      {!toggle && (
        <div>
          <li className="active">
            <Tooltip title="Gender" placement="bottom">
              <Link onClick={toggleChart}>
                <FaIcons.FaVenusMars />
              </Link>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Age Group" placement="bottom">
              <Link onClick={toggleChart}>
                <FaIcons.FaRegClock />
              </Link>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Work Status" placement="bottom">
              <Link onClick={toggleChart}>
                <FaIcons.FaBusinessTime />
              </Link>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Residency" placement="bottom">
              <Link onClick={toggleChart}>
                <FaIcons.FaPassport />
              </Link>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Filter" placement="bottom">
              <Link onClick={toggleMenu}>
                <FaIcons.FaFilter />
              </Link>
            </Tooltip>
          </li>
        </div>
      )}
    </div>
  
        
  );
}

export default Toggle;
