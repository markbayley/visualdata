import React, { useState } from "react";
import "./App.css";
import StackedBarChart from "./StackedBarChart";

const data = [
  {
    business_unit: "Marketing",
    Male: 34,
    Female: 60,
    Other: 3,
  },
  {
    business_unit: "Distribution",
    Male: 20,
    Female: 40,
    Other: 6,
  },
  {
    business_unit: "Finance",
    Male: 30,
    Female: 45,
    Other: 8,
  },
  {
    business_unit: "HR",
    Male: 40,
    Female: 60,
    Other: 3,
  },
  {
    business_unit: "Software",
    Male: 50,
    Female: 30,
    Other: 12,
  },
  {
    business_unit: "IT",
    Male: 73,
    Female: 32,
    Other: 12,
  },
  {
    business_unit: "Contact Centre",
    Male: 23,
    Female: 32,
    Other: 2,
  },
  {
    business_unit: "HR",
    Male: 43,
    Female: 32,
    Other: 12,
  },
  {
    business_unit: "Admin",
    Male: 13,
    Female: 3,
    Other: 2,
  },
  {
    business_unit: "Legal",
    Male: 32,
    Female: 32,
    Other: 12,
  },
  {
    business_unit: "Packing",
    Male: 13,
    Female: 32,
    Other: 12,
  },
  {
    business_unit: "R & D",
    Male: 43,
    Female: 22,
    Other: 8,
  },
  {
    business_unit: "Strike Team",
    Male: 23,
    Female: 32,
    Other: 12,
  },
];

const allKeys = ["Male", "Female", "Other"];

const colors = {
  Male: "cyan",
  Female: "orange",
  Other: "grey",
};

function GenderAnalysis() {
  const [keys, setKeys] = useState(allKeys);
  return (
    <React.Fragment>
      <div className="box">
        <div className="title">
          <strong>Gender By: </strong>
          <a className="active">Business Unit</a> | <a>Age</a> | <a>Work Class</a> | <a>Work Right</a>
          <strong className="total"> Total: 324</strong>
        </div>

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

export default GenderAnalysis;
