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

  Other: "#10a1c2",
  Perm: "#00b79c",
  Aust: "#86be49",
  Temp: "#ffa91f",
};

function WorkAnalysis2() {
  const [keys, setKeys] = useState(allKeys);
  return (
    <React.Fragment>
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
