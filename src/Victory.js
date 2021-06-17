import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { csv } from "d3";

import { VictoryBar, VictoryChart, VictoryPie } from "victory";

const row = (d) => {
  d.population = +d.population;
  return d;
};

const Victory = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    csv("data.csv", row).then(setData);
  }, []);

  return (
    <VictoryChart
      style={{ tickLabels: { fontSize: 120 } }}
      width="960"
      height="500"
      domainPadding={50}
      padding={{ top: 10, bottom: 40, left: 80, right: 10 }}
    >
      <VictoryBar data={data} x="country" y="population" />
      <VictoryPie />
    </VictoryChart>
  );
};

export default Victory;
