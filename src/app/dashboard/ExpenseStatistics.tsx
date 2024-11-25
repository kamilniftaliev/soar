"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { SectionTitle } from "./SectionTitle";

const data = [
  { name: "Group A", value: 300 },
  { name: "Group B", value: 150 },
  { name: "Group C", value: 350 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#FC7900", "#343C6A", "#232323", "#396AFF"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export function ExpenseStatistics() {
  return (
    <div>
      <SectionTitle>Expense Statistics</SectionTitle>
      <ResponsiveContainer
        width="100%"
        height={300}
        className="bg-white rounded-container py-5 mt-5"
      >
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            paddingAngle={5}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
