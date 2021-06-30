import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import * as d3 from "d3";

const DonutStyle = styled.svg`
  font-family: "Roboto", sans-serif;
  .textTop {
    font-size: 18px;
  }
  .textBottom {
    font-size: 30px;
    font-weight: bolder;
  }
  .annotation {
    font-family: "Roboto", sans-serif;
    font-size: 12px;
  }
`;
const Legend = styled.svg`
  font-size: 12px;
`;

const DonutGender = () => {
  const svgRef = useRef(null);
  const margin = {
    top: 50,
    right: 0,
    bottom: 20,
    left: 0,
  };
  const width = 600;
  const height = 380;
  const graphWidth = width - margin.left - margin.right;
  const graphHeight = height - margin.top - margin.bottom;

  const radius = Math.min(graphWidth, graphHeight) / 2 - 10;
  const innerRadius = 110;

  const data = [
    { label: "Male", value: 108 },
    { label: "Female", value: 116 },
    { label: "Non-Binary", value: 44 },
    { label: "Other", value: 9 },
  ];

  const total = data.reduce((sum, current) => sum + current.value, 0);

  const colorScale = d3
    .scaleLinear()
    .domain(d3.extent(data, (data) => data.value))
    .range([0, 1]);

  const colored = (t) => d3.interpolatePuBu(colorScale(t));

  const arcLabel = () => {
    return d3.arc().innerRadius(innerRadius).outerRadius(radius);
  };

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    const textTop = svg
      .append("text")
      .style("text-anchor", "middle")
      .attr("class", "textTop")
      .text("TOTAL")
      .attr("fill", "#fff")
      .attr("y", -10);

    const textBottom = svg
      .append("text")
      .attr("dy", "0.3em")
      .style("text-anchor", "middle")
      .attr("class", "textBottom")
      .text(total)
      .attr("fill", "#fff")
      .attr("y", 10);

    const arc = d3.arc().innerRadius(innerRadius).outerRadius(radius);

    const arcOver = d3
      .arc()
      .innerRadius(innerRadius + 5)
      .outerRadius(radius + 5);

    // Compute the position of each group on the pie
    const pie = d3
      .pie()
      .value((d) => d.value)
      .padAngle(0.01);

    // add pie
    svg
      .append("g")
      .selectAll(".slice")
      .data(pie(data))
      .join("path")
      .attr("fill", "#ffa91f")
      .attr("d", arc)
      .on("mouseover", function () {
        d3.select(this).transition().duration(200).attr("d", arcOver);
        textTop.text(d3.select(this).datum().data.label).attr("y", -10);
        textBottom.text(d3.select(this).datum().data.value).attr("y", 10);
      })
      .on("mouseout", function () {
        d3.select(this).transition().duration(100).attr("d", arc);
        textTop.text("TOTAL").attr("y", -10);
        textBottom.text(total);
      })
      .transition()
      .duration(1000)
      .attrTween("d", (d) => {
        // return an interpolater
        const interpolate = d3.interpolate(
          {
            startAngle: 0,
            endAngle: 0,
          },
          d
        );
        return function (t) {
          return arc(interpolate(t));
        };
      });

    // add annotation
    svg
      .append("g")
      .attr("font-size", 12)

      .attr("text-anchor", "middle")
      .selectAll(".annotation")
      .data(pie(data))
      .join("text")
      .transition()
      .duration(800)
      .text((d) => d.data.label)
      .attr("transform", (d) => `translate(${arcLabel().centroid(d)})`)
      .attr("dy", "0.4em")
      .attr("text-anchor", "middle")
      .attr("fill", "white")
      .transition();
  }, []);

  return (
    <div style={{ paddingBottom: "10px" }}>
      {/* <h3 style={{ marginLeft: "30px" }}>Employees by Work Status</h3> */}
      <DonutStyle
        width={graphWidth}
        height={graphHeight}
        // pan left, pan up & zoom out and show double the content
        // viewBox={`${-graphWidth/2} ${-graphHeight/2} ${graphWidth} ${graphHeight}`}
        preserveAspectRatio="xMinYMin"
      >
        <g
          ref={svgRef}
          transform={`translate(${graphWidth / 2}, ${graphHeight / 2})`}
        />
      </DonutStyle>
    </div>
  );
};

export default DonutGender;
