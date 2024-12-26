import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { avgScoreChartData } from "../../utils/data";

const AvgScoreChart = () => {
  return (
    <ResponsiveContainer>
      <LineChart width={500} height={300} data={avgScoreChartData}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip
          contentStyle={{ borderRadius: "10px", borderColor: "#9ca3af" }}
        />
        <Legend
          align="center"
          verticalAlign="top"
          wrapperStyle={{
            paddingBottom: "20px",
          }}
        />
        <ReferenceLine y={100} stroke="red" />
        <Line
          type="monotone"
          strokeWidth={2}
          dataKey="Score"
          stroke="#4ade80"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default AvgScoreChart;
