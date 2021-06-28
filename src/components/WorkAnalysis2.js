import React, { useState } from "react";
import StackedBarChart from "../charts/StackedBarChart";

const data = [
  {
    filter: "FullTime",
    Aust: 15,
    Perm: 33,
    Temp: 30,
    Other: 5,
  },
  {
    filter: "PartTime",
    Aust: 10,
    Perm: 2,
    Temp: 30,
    Other: 5,
  },
  {
    filter: "Fixed",
    Aust: 5,
    Perm: 25,
    Temp: 13,
    Other: 5,
  },
  {
    filter: "Casual",
    Aust: 10,
    Perm: 30,
    Temp: 3,
    Other: 50,
  },
];

const allKeys = [
  "Aust",
  "Perm",
  "Temp",
  "Other",
];

const colors = {
  Other: "#26b6a1",
  Perm: "#B6A126",
  Aust: "#ffa600",
  Temp: "slateblue",
};

function WorkAnalysis2() {
  const [keys, setKeys] = useState(allKeys);
  return (
    <React.Fragment>
      {/* <h2>Work Status Analysis</h2> */}
      <div className="box">
        <StackedBarChart data={data} keys={keys} colors={colors} />

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

export default WorkAnalysis2;
