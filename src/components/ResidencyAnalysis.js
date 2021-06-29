import React, { useState } from "react";
import BarChart from "../charts/BarChart";

const data = [
  {
   filter: "Australian Citizen",
    FullTime: 14,
    PartTime: 20,
    Fixed: 10,
    Casual: 63,
  },
  {
   filter: "Permanent Resident",
    FullTime: 50,
    PartTime: 30,
    Fixed: 10,
    Casual: 6,
  },
  {
   filter: "Temporary Visa",
    FullTime: 60,
    PartTime: 45,
    Fixed: 10,
    Casual: 8,
  },
  {
   filter: "Other Visa",
    FullTime: 70,
    PartTime: 15,
    Fixed: 27,
    Casual: 3,
  },
];

const allKeys = ["FullTime", "PartTime", "Fixed", "Casual"];

const colors = {

  FullTime: "#8265c2",
  PartTime: "#e458a4",
  Fixed: "#ff6e66",
  Casual: "#ffa91f",
};

function ResidencyAnalysis() {
  const [keys, setKeys] = useState(allKeys);
  return (
    <React.Fragment>
        {/* <h2>Residency Analysis</h2> */}
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

export default ResidencyAnalysis;
