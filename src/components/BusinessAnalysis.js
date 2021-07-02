import React, { useState, useEffect } from "react";
import StackedBarChart from "../charts/StackedBarChart";

const mockdata = [
  {
    filter: "Marketing",
    Male: 34,
    Female: 60,
    Other: 3,
  },
  {
    filter: "Distribution",
    Male: 20,
    Female: 40,
    Other: 6,
  },
  {
    filter: "Finance",
    Male: 30,
    Female: 45,
    Other: 8,
  },

  {
    filter: "Software",
    Male: 50,
    Female: 30,
    Other: 12,
  },
  {
    filter: "IT",
    Male: 73,
    Female: 32,
    Other: 12,
  },
  {
    filter: "Contact Centre",
    Male: 23,
    Female: 32,
    Other: 2,
  },
  {
    filter: "HR",
    Male: 43,
    Female: 32,
    Other: 12,
  },
  {
    filter: "Admin",
    Male: 13,
    Female: 3,
    Other: 2,
  },
  {
    filter: "Legal",
    Male: 32,
    Female: 32,
    Other: 12,
  },
  {
    filter: "Packing",
    Male: 13,
    Female: 32,
    Other: 12,
  },
  {
    filter: "R & D",
    Male: 43,
    Female: 22,
    Other: 8,
  },
  {
    filter: "Strike Team",
    Male: 23,
    Female: 32,
    Other: 12,
  },
];

const allKeys = ["Male", "Female", "Other"];

const colors = {
  Male: "#6f5df6",
  Other: "#ffa600",
  Female: "#d45087",
};

const BusinessAnalysis = () => {
  const [data, setData] = useState(mockdata);

  //When rerendering execute this function
  const [keys, setKeys] = useState(allKeys);

  return (
    <React.Fragment>
      <div className="box">
        <StackedBarChart data={mockdata} keys={keys} colors={colors} />

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
};

export default BusinessAnalysis;
