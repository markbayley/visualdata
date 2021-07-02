import React, { useState } from "react";
import StackedBarChart from "../charts/StackedBarChart";

const data = [
  {
    filter: "FullTime",
    Male: 34,
    Female: 60,
    Other: 30,
  },
  {
    filter: "PartTime",
    Male: 13,
    Female: 60,
    Other: 3,
  },
  {
    filter: "Fixed",
    Male: 3,
    Female: 16,
    Other: 3,
  },
  {
    filter: "Casual",
    Male: 34,
    Female: 60,
    Other: 3,
  },
];

const allKeys = ["Male", "Female", "Other"];

const colors = {
  Male: "#6f5df6",
  Other: "#ffa600",
  Female: "#d45087",
};

function WorkAnalysis() {
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

export default WorkAnalysis;
