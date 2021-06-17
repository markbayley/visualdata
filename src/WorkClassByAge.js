import React, { useState } from "react";
import "./App.css";
import BarChart from "./BarChart";

const data = [
  {
    work_class: "18-25",
    Full_Time: 14,
    partime: 20,
    fixedterm: 10,
    casual: 63,
  },
  {
    work_class: "26-35",
    fulltime: 50,
    partime: 30,
    fixedterm: 10,
    casual: 6,
  },
  {
    work_class: "36-55",
    fulltime: 60,
    partime: 45,
    fixedterm: 10,
    casual: 8,
  },
  {
    work_class: "56-75",
    fulltime: 70,
    partime: 15,
    fixedterm: 27,
    casual: 3,
  },
];

const allKeys = ["Full_Time", "partime", "fixedterm", "casual"];

const colors = {
  Full_Time: "orange",
  partime: "#2de4e3",
  fixedterm: "#ff666f",
  casual: "#6f5df6",
};

function WorkClassByAge() {
  const [keys, setKeys] = useState(allKeys);
  return (
    <React.Fragment>
      <div className="box">
        <div className="title">Work Class By Age </div>
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

export default WorkClassByAge;
