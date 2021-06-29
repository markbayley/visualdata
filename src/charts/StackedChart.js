import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import styled from "styled-components";
import chartData from "../data/barData.csv";
import { csv } from "d3";

// const Canvas = styled.div`
//   display: grid;
//   place-items: center;
//   rect {
//     fill: yellowgreen;
//     &:hover {
//       fill: green;
//       transition: all 0.2s;
//     }
//   }
// `;

const StackedChart = () => {
   
 

  useEffect(() => {

     // set the dimensions and margins of the graph
const margin = {top: 10, right: 30, bottom: 20, left: 50},
    width = 560 - margin.left - margin.right,
    height = 200 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",`translate(${margin.left},${margin.top})`);

// Parse the Data
d3.csv(
  "https://gist.githubusercontent.com/markbayley/edf33f0470755d5582fad5587239b09f/raw/76df4feed421468234da3750b30f7464a5f75428/residency"
).then(function (data) {
  // List of subgroups = header of the csv files = soil condition here
  const subgroups = data.columns.slice(1);

  // List of groups = species here = value of the first column called group -> I show them on the X axis
  const groups = data.map((d) => d.group );



  ////////////////////////////////////////////////////////

  // const filter = (groups) => {
  //     <div>
  //       {groups
  //         .filter((group) => group.includes("banana"))
  //         .map((filteredData) => (
  //           <div>{filteredData}</div>
  //         ))}
  //     </div>;

  // }

  



  // Add X axis
  const x = d3.scaleBand().domain(groups).range([0, width]).padding([0.2]);
  svg
    .append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x).tickSizeOuter(0));

  // Add Y axis
  const y = d3.scaleLinear().domain([0, 60]).range([height, 0]);
  svg.append("g").call(d3.axisLeft(y));

  // color palette = one color per subgroup
  const color = d3
    .scaleOrdinal()
    .domain(subgroups)
    .range(["#6f5df6", "#9636d6", "#d56b99"]);

  //stack the data? --> stack per subgroup
  const stackedData = d3.stack().keys(subgroups)(data);

  // ----------------
  // Create a tooltip
  // ----------------
  const tooltip = d3
    .select("#my_dataviz")
    .append("div")

    .attr("class", "tooltip")
    .style("background-color", "black")
    .style("border", "solid")
    .style("border-width", "1px")
    .style("border-radius", "5px")
    .style("width", "60px")
    .style("padding", "10px")
    .style("text-align", "center")
    .style("display", "none");

  // Three function that change the tooltip when user hover / move / leave a cell
  const mouseover = function (event, d) {
    const subgroupName = d3.select(this.parentNode).datum().key;
    const subgroupValue = d.data[subgroupName];
    tooltip
      .html(subgroupName + "<br>" + subgroupValue)
      .style("opacity", 0.5)
      .style("display", "");
  };
  const mousemove = function (event, d) {
    tooltip
      .style("transform", "translateY(-55%)")
      .style("left", event.x / 5 + "px")
      .style("top", event.y / 1 + "px")
      .style("position", "absolute");
  };
  const mouseleave = function (event, d) {
    tooltip.style("opacity", 0);
  };

  // Show the bars
  svg
    .append("g")
    .selectAll("g")
    // Enter in the stack data = loop key per key = group per group
    .data(stackedData)
    .join("g")
    .attr("fill", (d) => color(d.key))
    .selectAll("rect")
    // enter a second time = loop subgroup per subgroup to add all rectangles
    .data((d) => d)
    .join("rect")
    .attr("x", (d) => x(d.data.group))
    .attr("y", (d) => y(d[1]))
    .attr("height", (d) => y(d[0]) - y(d[1]))
    .attr("width", x.bandwidth())
    .attr("stroke", "grey")
    .on("mouseover", mouseover)
    .on("mousemove", mousemove)
    .on("mouseleave", mouseleave)
    
})


  }, [])

  
  return (
    <>
      <div id="my_dataviz"></div>
      {/* <button onClick={() => setData(data.map((value) => value + 5))}>
        Update data
      </button>
      <button onClick={() => setData(data.filter((value) => value < 35))}>
        Filter data
      </button>
      <button onClick={() => setData(data.map((value) => value > 0))}>
        Reset data
      </button> */}
    </>
  );
};
export default StackedChart;
