import React, { useState } from "react";
import BarChart from "../charts/BarChart";

const data = [
  {
    filter: "Male",
    18: 10,
    30: 40,
    50: 32,
    64: 5,
  },
  {
    filter: "Female",
    18: 10,
    30: 40,
    50: 32,
    64: 5,
  },

  {
    filter: "Other",
    18: 10,
    30: 40,
    50: 32,
    64: 5,
  },
];

const allKeys = ["18", "30", "50", "64"];

const colors = {
  18: "#6f5df6",
  30: "#9636d6",
  50: "#d56b99",
  64: "slateblue",
};
function GenderAnalysis() {
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

export default GenderAnalysis;
