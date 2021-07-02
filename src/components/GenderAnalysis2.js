import React, { useState } from "react";
import BarChart from "../charts/BarChart";

const data = [
  {
    filter: "Male",
    FullTime: 44,
    PartTime: 6,
    Fixed: 30,
    Casual: 15,
  },
  {
    filter: "Female",
    FullTime: 14,
    PartTime: 26,
    Fixed: 3,
    Casual: 10,
  },

  {
    filter: "Other",
    FullTime: 44,
    PartTime: 60,
    Fixed: 30,
    Casual: 20,
  },
];

const allKeys = ["FullTime", "PartTime", "Fixed", "Casual"];

const colors = {
  FullTime: "#8265c2",
  PartTime: "#e458a4",
  Fixed: "#ff6e66",
  Casual: "#ffa91f",
};

function GenderAnalysis2() {
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

export default GenderAnalysis2;
