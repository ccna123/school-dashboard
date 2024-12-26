import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { attendanceChartData } from "../../utils/data";

const AttendanceBarChart = () => {
  return (
    <ResponsiveContainer>
      <BarChart width={500} data={attendanceChartData} barSize={20}>
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#9ca3af" }}
        />
        <YAxis axisLine={false} />
        <Tooltip
          contentStyle={{ borderRadius: "10px", borderColor: "#9ca3af" }}
        />
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <Legend
          align="left"
          verticalAlign="top"
          wrapperStyle={{
            paddingBottom: "40px",
          }}
        />
        <Bar
          dataKey="Absent"
          fill="#f87171"
          legendType="circle"
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="Attendance"
          fill="#4ade80"
          legendType="circle"
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default AttendanceBarChart;
