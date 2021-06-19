import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import * as d3 from "d3";

const Donut = styled.svg`
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

const PieChart = () => {
  const svgRef = useRef(null);
  const margin = {
    top: 20,
    right: 20,
    bottom: 50,
    left: 10,
  };
  const width = 450;
  const height = 300;
  const graphWidth = width - margin.left - margin.right;
  const graphHeight = height - margin.top - margin.bottom;

  const radius = Math.min(graphWidth, graphHeight) / 2 - 10;
  const innerRadius = 90;

  const data = [
    { label: "Australian Citizen", value: 88 },
    { label: "Temporary Visa", value: 56 },
    { label: "Permanent Resident", value: 54 },
    { label: "Holiday Visa", value: 79 },

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
      .attr("fill", "orange")
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
    <div style={{ border: "1px solid #fff" }}>
      {/* <h3 style={{ marginLeft: "30px" }}>Employees by Work Status</h3> */}
      <Donut
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
      </Donut>
      {/* <Legend>
        {data.map(({ label, value }, index) => (
          <g key={index}>
            <rect y={index * 20} width={20} height={15} fill={colored(value)} />
            <text
            x={45}
            y={12 + index * 20}
            fill='white'
            textAnchor='middle'
          >
            {label}
          </text>
          </g>
        ))}
      </Legend> */}
    </div>
  );
};

export default PieChart;
