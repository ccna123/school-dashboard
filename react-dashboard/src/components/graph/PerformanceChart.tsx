import { Pie, PieChart, ResponsiveContainer } from "recharts";
import { performanceChartData } from "../../utils/data";

const PerformanceChart = ({}) => {
  return (
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
  );
};

export default PerformanceChart;
