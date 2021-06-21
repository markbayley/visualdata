import React, { useState, useEffect } from "react";
import StackedBarChart from "../charts/StackedBarChart";
import { csv } from "d3";
import { message } from "../data/message";
import { Link } from "react-router-dom";

const csvUrl =
  "../chart-data.csv";

const mockdata = [
  {
    business_unit: "Male",
    Marketing: 34,
    Sales: 60,
    IT: 3,
    Research: 1,
    Finance: 30,
    Distribution: 2,
    HR: 13,
  },
  {
    business_unit: "Female",
    Marketing: 34,
    Sales: 60,
    IT: 3,
    Research: 1,
    Finance: 43,
    Distribution: 2,
    HR: 30,
  },
  {
    business_unit: "Non-Binary",
    Marketing: 3,
    Sales: 6,
    IT: 3,
    Research: 1,
    Finance: 1,
    Distribution: 1,
    HR: 30,
  },
  {
    business_unit: "Other",
    Marketing: 3,
    Sales: 6,
    IT: 3,
    Research: 1,
    Finance: 3,
    Distribution: 2,
    HR: 3,
  },
];

const allKeys = ["Marketing", "Sales", "IT", "Research", "Finance", "Distribution", "HR"];

const colors = {
  Marketing: "#6f5df6",
  Sales: "#9636d6",
  IT: "#d56b99",
  Research: "gold",
  Finance: "plum",
  Distribution: "yellow",
  HR: "coral",
};


const GenderAnalysis = () => {
    const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvUrl).then(setData);
  }, []);
  const [keys, setKeys] = useState(allKeys);
  return (
    <React.Fragment>
      <h2>Gender Analysis</h2>
      <div className="box">
        <div className="title">
          <strong>Gender by: </strong>
          <Link to={'/business-unit'} className="active">Business Unit</Link> | <a>Age Group</a> |{" "}
          <a>Work Status</a> | <a>Residency</a> 
          <strong className="total">
            {" "}
            Total: 277
            {/* <pre>{data ? message(data) : "Loading..."}</pre> */}
          </strong>
        </div>

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
}

export default GenderAnalysis;
