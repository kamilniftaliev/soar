"use client";

import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { SectionTitle } from "./SectionTitle";

const data = [
  {
    name: "Sat",
    Diposit: 220,
    Withdraw: 490,
  },
  {
    name: "Sun",
    Diposit: 110,
    Withdraw: 350,
  },
  {
    name: "Mon",
    Diposit: 280,
    Withdraw: 310,
  },
  {
    name: "Tue",
    Diposit: 380,
    Withdraw: 490,
  },
  {
    name: "Wed",
    Diposit: 220,
    Withdraw: 130,
  },
  {
    name: "Thu",
    Diposit: 230,
    Withdraw: 395,
  },
  {
    name: "Fri",
    Diposit: 330,
    Withdraw: 400,
  },
];

export function WeeklyActivity() {
  return (
    <div className="col-span-2">
      <SectionTitle>Weekly Activity</SectionTitle>
      <ResponsiveContainer className="white-section" width="100%" height={300}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 30, left: -50, right: -30, bottom: 0 }}
        >
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize={15}
            wrapperStyle={{
              marginTop: -30,
              marginRight: 60,
            }}
          />
          <CartesianGrid strokeDasharray="2 2" className="opacity-70" />
          <XAxis dataKey="name" className="opacity-70" />
          <YAxis className="opacity-70" />
          <Bar dataKey="Withdraw" barSize={15} radius={30} fill="#232323" />
          <Bar dataKey="Diposit" barSize={15} radius={30} fill="#396AFF" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
