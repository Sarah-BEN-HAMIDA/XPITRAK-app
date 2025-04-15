// src/components/Chart2.js
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Products sold", uv: 4000 },
  { name: "Products inventory", uv: 3000 },
  { name: "Products expired", uv: 2000 },
  { name: "Products high price", uv: 2780 },
  { name: "Products low price", uv: 1890 },
];

const Chart2 = () => {
  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="uv" fill="#8884d8" />
    </BarChart>
  );
};

export default Chart2;
