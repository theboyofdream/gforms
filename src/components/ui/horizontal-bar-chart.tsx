"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

type HorizontalBarChartProps = {
  title?: string
  dataKey: string
  nameKey: string
  data: any[]
  config: ChartConfig
}

export function HorizontalBarChart({
  title,
  dataKey,
  nameKey,
  data,
  config,
  // total
}: HorizontalBarChartProps) {
  return (
    <div className="h-full">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="tracking-widest text-base">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={config}>
            <BarChart accessibilityLayer data={data}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey={nameKey}
                tickLine={false}
                axisLine={false}
              />
              <ChartTooltip
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey={dataKey} fill={config[dataKey].color} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}


