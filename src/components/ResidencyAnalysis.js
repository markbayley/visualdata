import React, { useState } from "react";
import BarChart from "../charts/BarChart";

const data = [
  {
    work_class: "Australian Citizen",
    fulltime: 14,
    partime: 20,
    fixedterm: 10,
    casual: 63,
  },
  {
    work_class: "Permanent Resident",
    fulltime: 50,
    partime: 30,
    fixedterm: 10,
    casual: 6,
  },
  {
    work_class: "Temporary Visa",
    fulltime: 60,
    partime: 45,
    fixedterm: 10,
    casual: 8,
  },
  {
    work_class: "Other Visa",
    fulltime: 70,
    partime: 15,
    fixedterm: 27,
    casual: 3,
  },
];

const allKeys = ["fulltime", "partime", "fixedterm", "casual"];

const colors = {
  fulltime: "orange",
  partime: "slateblue",
  fixedterm: "mediumpurple",
  casual: "gold",
};

function ResidencyAnalysis() {
  const [keys, setKeys] = useState(allKeys);
  return (
    <React.Fragment>
        <h2>Residency Analysis</h2>
      <div className="box">
        <div className="title">
          Residency By: <a>Business Unit</a> | <a>Gender</a> | <a>Age Group</a> |
          <a className="active"> Work Status</a>
        </div>
        <BarChart data={data} keys={keys} colors={colors} />

        <div className="fields">
          {allKeys.map((key) => (
            <div key={key} className="field">
              <input
                id={key}
                type="checkbox"
                checked={keys.includes(key)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setKeys(Array.from(new Set([...keys, key])));
                  } else {
                    setKeys(keys.filter((_key) => _key !== key));
                  }
                }}
              />
              <label htmlFor={key} style={{ color: colors[key] }}>
                {key}
              </label>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default ResidencyAnalysis;
