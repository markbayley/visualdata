import React, { useEffect, useRef, useState } from "react";
import {
  select,
  scaleBand,
  axisBottom,
  stack,
  max,
  scaleLinear,
  axisLeft,
  stackOrderAscending,

} from "d3";
import * as d3 from "d3";
import useResizeObserver from "../tools/useResizeObserver";
import styled from "styled-components";

const Canvas = styled.div`
  // display: grid;
  // place-items: center;
  rect {
    // fill: yellowgreen;
    &:hover {
      opacity: 0.5;
      transition: all 0.2s;
    }
  }
`;


function StackedBarChart({ data, keys, colors }) {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);
    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();

    // stacks / layers
    const stackGenerator = stack().keys(keys).order(stackOrderAscending);
    const layers = stackGenerator(data);
    const extent = [
      0,
      max(layers, (layer) => max(layer, (sequence) => sequence[1])),
    ];

    // scales
    const xScale = scaleBand()
      .domain(data.map((d) => d.filter))
      .range([0, width])
      .padding(0.25);



    const yScale = scaleLinear().domain(extent).range([height, 0])
   

        const tooltip = d3
          .select("#my_dataviz")
          .append("div")
          .style("display", "none")
      
          .attr("class", "tooltip")
          .style("background-color", "black")
          .style("border", "solid")
          .style("border-width", "1px")
          .style("border-radius", "5px")
          .style("width", "60px")
          .style("padding", "10px")
          .style("text-align", "center");

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
        .style("left", event.x / 1 + "px")
        .style("top", event.y / 2+100 + "px")
        .style("position", "absolute");
    };
    const mouseleave = function (event, d) {
      tooltip.style("opacity", 0);
    };

    // rendering
    svg
      .selectAll(".layer")
      .data(layers)
      .join("g")
      .attr("class", "layer")
      .attr("fill", (layer) => colors[layer.key])
      .selectAll("rect")
      .data((layer) => layer)
      .join("rect")
      .attr("x", (sequence) => xScale(sequence.data.filter))
      .attr("width", xScale.bandwidth())
      .attr("y", (sequence) => yScale(sequence[1]))
      .attr("height", (sequence) => yScale(sequence[0]) - yScale(sequence[1]))
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave)
      .attr("d", (value) => yScale(value));
    

    // axes
    const xAxis = axisBottom(xScale);
    svg
      .select(".x-axis")
      .attr("transform", `translate(0, ${height})`)
      .call(xAxis)
      .transition()
      .duration(1000);



    const yAxis = axisLeft(yScale);
    svg.select(".y-axis").call(yAxis);
  }, [colors, data, dimensions, keys]);

  return (
    <Canvas>
      <div id="my_dataviz"></div>
      <div ref={wrapperRef} style={{ marginBottom: "3rem" }}>
        <svg className="svg" ref={svgRef}>
          <g className="x-axis" />
          <g className="y-axis" />
        </svg>
      </div>
 
      
    </Canvas>
  );
}

export default StackedBarChart;
