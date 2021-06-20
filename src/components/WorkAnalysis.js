import React, { useState } from "react";
import BarChart from "../charts/BarChart";

const data = [
  {
    work_class: "18-25",
    fulltime: 14,
    partime: 20,
    fixedterm: 10,
    casual: 63,
  },
  {
    work_class: "26-35",
    fulltime: 50,
    partime: 30,
    fixedterm: 10,
    casual: 6,
  },
  {
    work_class: "36-55",
    fulltime: 60,
    partime: 45,
    fixedterm: 10,
    casual: 8,
  },
  {
    work_class: "56-75",
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

function WorkAnalysis() {
  const [keys, setKeys] = useState(allKeys);
  return (
    <React.Fragment>
      <h2>Work Status Analysis</h2>
      <div className="box">
        <div className="title">
          Work Status By: Business Unit | Gender | <a className="active">Age Group</a> | Residency{" "}
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

export default WorkAnalysis;
