import React, { useState } from "react";
import BarChart from "../charts/BarChart";

const data = [
  {
    filter: "18-25",
    Male: 34,
    Female: 60,
    Other: 3,
  },
  {
    filter: "26-39",
    Male: 20,
    Female: 40,
    Other: 6,
  },
  {
    filter: "40-59",
    Male: 30,
    Female: 45,
    Other: 8,
  },
  {
    filter: "60-75",
    Male: 40,
    Female: 60,
    Other: 3,
  },
  {
    filter: "76-80",
    Male: 40,
    Female: 30,
    Other: 5,
  },
];

const allKeys = ["Male", "Female", "Other"];

const colors = {
  Male: "#6f5df6",
  Other: "#ffa600",
  Female: "#d45087",
};

function AgeAnalysis() {
  const [keys, setKeys] = useState(allKeys);
  return (
    <React.Fragment>
      <div className="box">
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

export default AgeAnalysis;
