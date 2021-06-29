import React, { useState } from "react";
import StackedArea from "../charts/StackedArea";

const allKeys = ["Male", "Female", "Other"];

const colors = {
  Male: "#6f5df6",
  Other: "#ffa600",
  Female: "#d45087",
};

function TimeAnalysis() {
  const [keys, setKeys] = useState(allKeys);
  const [data, setData] = useState([
    {
      year: 2000,
      Male: 13,
      Female: 2,
      Other: 12,
    },
    {
      year: 2001,
      Male: 3,
      Female: 2,
      Other: 8,
    },
    {
      year: 2002,
      Male: 3,
      Female: 32,
      Other: 12,
    },
    {
      year: 2003,
      Male: 13,
      Female: 2,
      Other: 12,
    },
    {
      year: 2004,
      Male: 3,
      Female: 2,
      Other: 8,
    },
    {
      year: 2005,
      Male: 3,
      Female: 3,
      Other: 12,
    },
        {
    year: 2006,
    Male: 13,
    Female: 2,
    Other: 12,
  },
  {
    year: 2007,
    Male: 3,
    Female: 2,
    Other: 8,
  },
  {
    year: 2008,
    Male: 3,
    Female: 32,
    Other: 12,
  },
  ]);

 

  return (
    <>
      <StackedArea data={data} keys={keys} colors={colors} />
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
      {/* <button
        onClick={() =>
          setData([
            ...data,
            {
              year: Math.max(...data.map((d) => d.year)) + 10,
              "Male": Math.round(Math.random() * 100),
              "Female": Math.round(Math.random() * 125),
              "Other": Math.round(Math.random() * 150),
            },
          ])
        }
      >
        Add data
      </button> */}
    </>
  );
}

export default TimeAnalysis;
