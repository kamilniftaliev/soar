"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { SectionTitle } from "./SectionTitle";

const data = [
  {
    name: "Jul",
    uv: 0,
  },
  {
    name: "Aug",
    uv: 500,
  },
  {
    name: "Sep",
    uv: 150,
  },
  {
    name: "Oct",
    uv: 800,
  },
  {
    name: "Nov",
    uv: 200,
  },
  {
    name: "Dec",
    uv: 580,
  },
  {
    name: "Jan",
    uv: 230,
  },
  {
    name: "Feb",
    uv: 700,
  },
];

export function BalanceHistory() {
  return (
    <div className="lg:col-span-2">
      <SectionTitle>Balance History</SectionTitle>
      <ResponsiveContainer
        className="white-section px-4"
        width="100%"
        height={300}
      >
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: -40,
            left: -60,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="2 2" className="opacity-70" />
          <XAxis dataKey="name" className="opacity-70" />
          <YAxis className="opacity-70" />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#1814F3"
            strokeWidth={3}
            fill="#2D60FF40"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
