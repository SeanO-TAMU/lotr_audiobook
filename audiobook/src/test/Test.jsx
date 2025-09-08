import styles from "./Test.module.css";
import * as d3 from "d3";
import { useEffect, useRef } from "react";

function Test(){ 
  const svgRef = useRef(null); // reference to the SVG element

   const data = {
  nodes: [
    { id: "Alice", group: 1 },
    { id: "Bob", group: 1 },
    { id: "Carol", group: 2 },
    { id: "Dave", group: 2 },
    { id: "Eve", group: 3 },
    { id: "Frank", group: 1 },
    { id: "Grace", group: 3 },
    { id: "Heidi", group: 2 },
    { id: "Ivan", group: 3 },
    { id: "Judy", group: 1 },
    { id: "Karl", group: 2 },
    { id: "Laura", group: 3 },
    { id: "Mallory", group: 1 },
    { id: "Niaj", group: 2 },
    { id: "Olivia", group: 3 },
    { id: "Peggy", group: 1 },
    { id: "Quentin", group: 2 },
    { id: "Rupert", group: 3 },
    { id: "Sybil", group: 1 },
    { id: "Trent", group: 2 },
    { id: "Uma", group: 3 },
    { id: "Victor", group: 1 },
    { id: "Wendy", group: 2 },
    { id: "Xavier", group: 3 },
    { id: "Yvonne", group: 1 }
  ],
  links: [
    { source: "Alice", target: "Bob", value: 2 },
    { source: "Alice", target: "Carol", value: 1 },
    { source: "Alice", target: "Frank", value: 3 },
    { source: "Bob", target: "Dave", value: 3 },
    { source: "Bob", target: "Judy", value: 2 },
    { source: "Carol", target: "Eve", value: 1 },
    { source: "Carol", target: "Heidi", value: 2 },
    { source: "Dave", target: "Eve", value: 2 },
    { source: "Frank", target: "Grace", value: 1 },
    { source: "Grace", target: "Heidi", value: 1 },
    { source: "Ivan", target: "Judy", value: 2 },
    { source: "Heidi", target: "Ivan", value: 3 },
    { source: "Judy", target: "Frank", value: 1 },
    { source: "Karl", target: "Laura", value: 2 },
    { source: "Mallory", target: "Niaj", value: 3 },
    { source: "Olivia", target: "Peggy", value: 1 },
    { source: "Quentin", target: "Rupert", value: 2 },
    { source: "Sybil", target: "Trent", value: 3 },
    { source: "Uma", target: "Victor", value: 2 },
    { source: "Wendy", target: "Xavier", value: 1 },
    { source: "Yvonne", target: "Alice", value: 2 },
    { source: "Mallory", target: "Alice", value: 1 },
    { source: "Trent", target: "Bob", value: 2 },
    { source: "Victor", target: "Carol", value: 1 },
    { source: "Wendy", target: "Dave", value: 2 },
    { source: "Xavier", target: "Eve", value: 3 },
    { source: "Yvonne", target: "Frank", value: 1 }
  ]
};

  useEffect(() => {
    const width = 600;
  const height = 400;
  const color = d3.scaleOrdinal(d3.schemeCategory10);

  const nodes = data.nodes.map(d => ({ ...d }));
  const links = data.links.map(d => ({ ...d }));

  const svg = d3.select(svgRef.current)
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0, 0, width, height])
    .attr("style", "max-width: 100%; height: auto;");

  svg.selectAll("*").remove();

  const link = svg.append("g")
    .attr("stroke", "#999")
    .attr("stroke-opacity", 0.6)
    .selectAll("line")
    .data(links)
    .join("line")
    .attr("stroke-width", d => Math.sqrt(d.value));

  // 1️⃣ Create the simulation first
  const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id))
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(width / 2, height / 2))
    .on("tick", ticked);

  // 2️⃣ Then create nodes and call drag
  const node = svg.append("g")
    .attr("stroke", "#fff")
    .attr("stroke-width", 1.5)
    .selectAll("circle")
    .data(nodes)
    .join("circle")
    .attr("r", 8)
    .attr("fill", d => color(d.group))
    .call(drag(simulation)); // now simulation exists

  node.append("title").text(d => d.id);

  function ticked() {
    link
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);

    node
      .attr("cx", d => d.x = Math.max(0, Math.min(width, d.x))) //clamps elements to stay inside the svg
      .attr("cy", d => d.y = Math.max(0, Math.min(height, d.y)));
  }

  function drag(simulation) {
    function dragstarted(event) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    return d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
  }

  return () => simulation.stop();

  }, []); // run once on mount

  return (
    <div className={styles.chartContainer}>
      <svg ref={svgRef}></svg>
    </div>
  );
}

export default Test;