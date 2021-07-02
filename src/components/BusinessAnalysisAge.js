import React, { useState } from "react";
import StackedBarChart from "../charts/StackedBarChart";

const mockdata = [
  {
    filter: "Marketing",
    18: 20,
    30: 30,
    50: 12,
    64: 10,
  },
  {
    filter: "Distribution",
    18: 10,
    30: 40,
    50: 32,
    64: 5,
  },
  {
    filter: "Finance",
    18: 20,
    30: 30,
    50: 12,
    64: 10,
  },

  {
    filter: "Software",
    18: 20,
    30: 30,
    50: 12,
    64: 10,
  },
  {
    filter: "IT",
    18: 10,
    30: 4,
    50: 12,
    64: 5,
  },
  {
    filter: "Contact Centre",
    18: 20,
    30: 3,
    50: 12,
    64: 10,
  },
  {
    filter: "HR",
    18: 10,
    30: 4,
    50: 32,
    64: 5,
  },
  {
    filter: "Admin",
    18: 20,
    30: 30,
    50: 12,
    64: 10,
  },
  {
    filter: "Legal",
    18: 20,
    30: 30,
    50: 2,
    64: 10,
  },
  {
    filter: "Packing",
    18: 10,
    30: 40,
    50: 32,
    64: 5,
  },
  {
    filter: "R & D",
    18: 2,
    30: 5,
    50: 2,
    64: 5,
  },
  {
    filter: "Strike Team",
    18: 10,
    30: 10,
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

const BusinessAnalysisAge = () => {
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

export default BusinessAnalysisAge;
