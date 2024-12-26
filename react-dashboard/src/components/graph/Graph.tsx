import { Pie, PieChart, ResponsiveContainer } from "recharts";

import { performanceChartData } from "../../utils/data";
import React from "react";
import StudentRadialBarChart from "./StudentRadialBarChart";
import FinanceChart from "./FinanceChart";
import AttendanceBarChart from "./AttendanceBarChart";
import AvgScoreChart from "./AvgScoreChart";

type Pros = {
  graphType: string;
};

const Graph: React.FC<Pros> = ({ graphType }) => {
  return (
    <div className="h-[256px]">
      {graphType === "student" ? (
        <StudentRadialBarChart />
      ) : graphType === "avg_score" ? (
        <AvgScoreChart />
      ) : graphType === "performance" ? (
        <ResponsiveContainer>
          <PieChart>
            <Pie
              dataKey="value"
              startAngle={180}
              endAngle={0}
              data={performanceChartData}
              cx="50%"
              cy="50%"
              innerRadius={70}
              fill="#8884d8"
            />
          </PieChart>
        </ResponsiveContainer>
      ) : graphType === "finance" ? (
        <FinanceChart />
      ) : graphType === "attendance" ? (
        <AttendanceBarChart />
      ) : (
        ""
      )}
    </div>
  );
};

export default Graph;
