import React, { useState, useEffect } from "react";
import StackedBarChart from "../charts/StackedBarChart";
import { csv, filter } from "d3";
import { message } from "../data/message";
import { Link } from "react-router-dom";

const csvUrl = "../chart-data.csv";

const mockdata = [
  {
    filter: "Marketing",
    FullTime: 44,
    PartTime: 6,
    Fixed: 3,
    Casual: 10,
  },
  {
    filter: "Distribution",
    FullTime: 34,
    PartTime: 16,
    Fixed: 3,
    Casual: 10,
  },
  {
    filter: "Finance",
    FullTime: 34,
    PartTime: 6,
    Fixed: 3,
    Casual: 10,
  },

  {
    filter: "Software",
    FullTime: 34,
    PartTime: 6,
    Fixed: 30,
    Casual: 10,
  },
  {
    filter: "IT",
    FullTime: 34,
    PartTime: 6,
    Fixed: 23,
    Casual: 10,
  },
  {
    filter: "Contact Centre",
    FullTime: 34,
    PartTime: 6,
    Fixed: 30,
    Casual: 10,
  },
  {
    filter: "HR",
    FullTime: 34,
    PartTime: 6,
    Fixed: 3,
    Casual: 10,
  },
  {
    filter: "Admin",
    FullTime: 34,
    PartTime: 16,
    Fixed: 3,
    Casual: 100,
  },
  {
    filter: "Legal",
    FullTime: 14,
    PartTime: 60,
    Fixed: 30,
    Casual: 10,
  },
  {
    filter: "Packing",
    FullTime: 34,
    PartTime: 6,
    Fixed: 3,
    Casual: 10,
  },
  {
    filter: "R & D",
    FullTime: 4,
    PartTime: 6,
    Fixed: 3,
    Casual: 1,
  },
  {
    filter: "Strike Team",
    FullTime: 54,
    PartTime: 6,
    Fixed: 3,
    Casual: 10,
  },
];



const allKeys = ["FullTime", "PartTime", "Fixed", "Casual"];



const colors = {
  FullTime: "orange",
  PartTime: "slateblue",
  Fixed: "mediumpurple",
  Casual: "gold",
};

const BusinessAnalysisWork = () => {
  const [data, setData] = useState(mockdata);

  //When rerendering execute this function
  useEffect(() => {
    csv(csvUrl).then(setData);
  }, []);
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
        {/* <button onClick={() => setData(data.map((value) => value + 5))}>
          Update data
        </button>
        <button onClick={() => setData(data.filter((value) => value > 5))}>
          Filter data
        </button>
        <button onClick={() => setData(data.map((value) => value))}>
          Reset data
        </button> */}
      </div>
    </React.Fragment>
  );
};

export default BusinessAnalysisWork;
