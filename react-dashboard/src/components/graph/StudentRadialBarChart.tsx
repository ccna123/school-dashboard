import React, { Suspense } from "react";
import Spinner from "../share/Spinner";
import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";
import { studentChartData } from "../../utils/data";

const StudentRadialBarChart = () => {
  return (
    <ResponsiveContainer height="100%">
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="40%"
        outerRadius="100%"
        barSize={42}
        data={studentChartData}
      >
        <RadialBar
          label={{ position: "middle", fill: "#fff" }}
          background
          dataKey="count"
        />
        <Legend iconSize={10} layout="vertical" verticalAlign="middle" />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default StudentRadialBarChart;
