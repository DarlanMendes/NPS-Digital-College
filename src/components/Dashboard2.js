import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Grupos", "Votos"],
  ["Decratores", 33],
  ["Passivos", 26],
  ["Promotores", 22],
];

export const options = {
  title: "NPS",
  sliceVisibilityThreshold: 0.2, // 20%
};

export function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}


