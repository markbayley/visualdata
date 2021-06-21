import React, { useState, useEffect, useRef } from "react";
// import { Button } from "antd";
import * as d3 from "d3";

const CurvedLineChart = () => {
  const [data, setData] = useState([5, 30, 115, 60, 50, 65, 45, 15]);
  const svgRef = useRef();

  // will be called initially and on every data change
  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const myLine = d3
      .line()
      .x((value, index) => index * 75)
      .y((value) => 170 - value)
      .curve(d3.curveCardinal);
    svg
      .selectAll("path")
      // bind data to a single SVG element
      .data([data])
      .join("path")
      .attr("d", (value) => myLine(value))
      .attr("fill", "orange")
      .attr("stroke", "gold")
      
  }, [data]);

  return (
    <div style={{marginLeft: "50px"}}>
      {/* <h2> Curved Line Chart </h2> */}
      <svg ref={svgRef} />
      {/* <br />
      <Button onClick={() => setData(data.map((value) => value + 5))}>
        Update data
      </Button>
      <Button onClick={() => setData(data.filter((value) => value < 35))}>
        Filter data
      </Button> */}
    </div>
  );
};

export default CurvedLineChart;
