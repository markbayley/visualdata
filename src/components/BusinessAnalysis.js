import React, { useState, useEffect } from "react";
import StackedBarChart from "../charts/StackedBarChart";
import { csv, filter } from "d3";
import { message } from "../data/message";
import { Link } from "react-router-dom";

const csvUrl = "../chart-data.csv";

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


const datas = [
  {
    filter: "Marketing",
    Male: 34,
    Female: 6,
    Other: 3,
  },
  {
    filter: "Distribution",
    Male: 20,
    Female: 4,
    Other: 6,
  },
  {
    filter: "Finance",
    Male: 30,
    Female: 45,
    Other: 8,
  },
  {
    filter: "HR",
    Male: 4,
    Female: 30,
    Other: 3,
  },
  {
    filter: "Software",
    Male: 5,
    Female: 30,
    Other: 12,
  },
  {
    filter: "IT",
    Male: 3,
    Female: 32,
    Other: 12,
  },
  {
    filter: "Contact Centre",
    Male: 23,
    Female: 2,
    Other: 2,
  },
  {
    filter: "HR",
    Male: 3,
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
    Male: 2,
    Female: 2,
    Other: 12,
  },
  {
    filter: "Packing",
    Male: 13,
    Female: 2,
    Other: 12,
  },
  {
    filter: "R & D",
    Male: 3,
    Female: 22,
    Other: 8,
  },
  {
    filter: "Strike Team",
    Male: 23,
    Female: 3,
    Other: 12,
  },
];

const allKeys = ["Male", "Female", "Other"];

const otherKeys = ["Australian", "Overseas", "Other"];

const colors = {
  Male: "#6f5df6",
  Female: "#9636d6",
  Other: "#d56b99",
};

const BusinessAnalysis = () => {
  const [data, setData] = useState(mockdata);

  //When rerendering execute this function
  useEffect(() => {
    csv(csvUrl).then(setData);
  }, []);
  const [keys, setKeys] = useState(allKeys);

  // const keyHandler = () => {
  //       <div className="fields">
  //         {otherKeys.map((key) => (
  //           <div key={key} className="field">
  //             <input
  //               id={key}
  //               type="checkbox"
  //               checked={keys.includes(key)}
  //               onChange={(e) => {
  //                 if (e.target.checked) {
  //                   setKeys(Array.from(new Set([...keys, key])));
  //                 } else {
  //                   setKeys(keys.filter((_key) => _key !== key));
  //                 }
  //               }}
  //             />
  //             <label htmlFor={key} style={{ color: colors[key] }}>
  //               {key}
  //             </label>
  //           </div>
  //         ))}
  //       </div>;
  // }

  return (
    <React.Fragment>
      <h2>Business Unit Analysis</h2>
      <div className="box">
        <div className="title">
          <strong>Business Unit </strong>by:{" "}
          <Link to={"/gender"} className="active">
            Gender
          </Link>{" "}
          | <a>Age Group</a> | <a>Work Status</a> | <a>Residency</a>
          <div className="total">
            Total: {data ? message(data) : "Loading..."}{" "}
          </div>
        </div>
        <StackedBarChart data={mockdata} keys={keys} colors={colors} />
        {/* <button onClick={keyHandler}>Click</button> */}
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
        <button onClick={() => setData(data.map((value) => value + 5))}>
          Update data
        </button>
        <button onClick={() => setData(data.filter((value) => value > 5))}>
          Filter data
        </button>
        <button onClick={() => setData(data.map((value) => value))}>
          Reset data
        </button>
      
      </div>
    </React.Fragment>
  );
};

export default BusinessAnalysis;
