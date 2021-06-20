import React, { useState } from "react";
import "./../App.css";
import BarChart from "../charts/BarChart";


const data = [
  {
    work_class: "18-25",
    Male: 34,
    Female: 60,
    Other: 3,
  },
  {
    work_class: "26-39",
    Male: 20,
    Female: 40,
    Other: 6,
  },
  {
    work_class: "40-59",
    Male: 30,
    Female: 45,
    Other: 8,
  },
  {
    work_class: "60-75",
    Male: 40,
    Female: 60,
    Other: 3,
  },
  {
    work_class: "76-80",
    Male: 40,
    Female: 30,
    Other: 5,
  },
];

const allKeys = ["Male", "Female", "Other"];

const colors = {
  Male: "#6f5df6",
  Female: "#9636d6",
  Other: "#d56b99",
};

function AgeAnalysis() {
  const [keys, setKeys] = useState(allKeys);
  return (
    <React.Fragment>
      <h2>Age Analysis</h2>
      <div className="box">
        <div className="title">
          <strong>Age Group by: </strong>
          <a>Business Unit</a> | <a className="active">Gender</a> |{" "}
          <a>Work Status</a> | <a>Residency</a>
          <strong className="total"> Total: 277</strong>
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

export default AgeAnalysis;
