import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { financeChartData } from "../../utils/data";

const FinanceChart = () => {
  return (
    <ResponsiveContainer>
      <LineChart width={500} height={300} data={financeChartData}>
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
        <Line
          type="monotone"
          strokeWidth={2}
          dataKey="Income"
          stroke="#4ade80"
        />
        <Line
          type="monotone"
          strokeWidth={2}
          dataKey="Expense"
          stroke="#f87171"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default FinanceChart;
