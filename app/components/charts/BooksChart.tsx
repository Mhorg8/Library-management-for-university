"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/components/ui/chart";
const chartData = [
  { status: "موجود", users: 700, fill: "var(--color-chrome)" },
  { status: "ناموجود", users: 200, fill: "var(--color-safari)" },
];

const chartConfig = {
  visitors: {
    label: "کتاب ها",
  },
  chrome: {
    label: "Chrome",
    color: "#7ebc89",
  },
  safari: {
    label: "Safari",
    color: "#6096ba",
  },
} satisfies ChartConfig;

export function BooksChart() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.users, 0);
  }, []);

  return (
    <Card className="flex flex-col border-none">
      <CardHeader className="items-center pb-0">
        <CardTitle>وضعیت کتاب ها</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0 border-none">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={true}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="users"
              nameKey="status"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          کتاب ها
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
