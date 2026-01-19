"use client"

import { useState } from "react"
import { MoreHorizontal, ChevronRight } from "lucide-react"
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type Period = "today" | "week" | "month"

const chartDataMap = {
  today: [
    { time: "06:00", value: 30 },
    { time: "09:00", value: 45 },
    { time: "12:00", value: 65 },
    { time: "15:00", value: 55 },
    { time: "18:00", value: 80 },
    { time: "21:00", value: 95 },
  ],
  week: [
    { time: "Mon", value: 320 },
    { time: "Tue", value: 420 },
    { time: "Wed", value: 380 },
    { time: "Thu", value: 520 },
    { time: "Fri", value: 680 },
    { time: "Sat", value: 850 },
    { time: "Sun", value: 780 },
  ],
  month: [
    { time: "W1", value: 1200 },
    { time: "W2", value: 1850 },
    { time: "W3", value: 2100 },
    { time: "W4", value: 2680 },
  ],
}

export function TicketSellingChart() {
  const [period, setPeriod] = useState<Period>("today")
  const chartData = chartDataMap[period]

  const maxValue = Math.max(...chartData.map((d) => d.value))
  const minValue = Math.min(...chartData.map((d) => d.value))
  const range = maxValue - minValue || 1

  const getY = (value: number) => {
    return 100 - ((value - minValue) / range) * 75 + 10
  }

  const pathData = chartData
    .map((point, index) => {
      const x = (index / (chartData.length - 1)) * 100
      const y = getY(point.value)
      return `${index === 0 ? "M" : "L"} ${x} ${y}`
    })
    .join(" ")

  const areaPathData = `${pathData} L 100 100 L 0 100 Z`

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-base">Ticket Selling</CardTitle>
        <CardAction>
          <Button variant="ghost" size="icon-sm">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Badge
            variant={period === "today" ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => setPeriod("today")}
          >
            Today
          </Badge>
          <Badge
            variant={period === "week" ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => setPeriod("week")}
          >
            Week
          </Badge>
          <Badge
            variant={period === "month" ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => setPeriod("month")}
          >
            Month
          </Badge>
        </div>

        <div className="space-y-2">
          <div className="text-2xl font-bold">
            {chartData[chartData.length - 1].value.toLocaleString()}
          </div>
          <p className="text-xs text-muted-foreground">
            Total tickets sold {period === "today" ? "today" : `this ${period}`}
          </p>
        </div>

        <div className="h-32 w-full">
          <svg viewBox="0 0 100 100" className="h-full w-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d={areaPathData}
              fill="url(#areaGradient)"
            />
            <path
              d={pathData}
              fill="none"
              stroke="#F59E0B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
            {chartData.map((point, index) => {
              const x = (index / (chartData.length - 1)) * 100
              const y = getY(point.value)
              return (
                <g key={index}>
                  <circle
                    cx={x}
                    cy={y}
                    r="3"
                    fill="#F59E0B"
                    vectorEffect="non-scaling-stroke"
                  />
                  <circle
                    cx={x}
                    cy={y}
                    r="1.5"
                    fill="white"
                    vectorEffect="non-scaling-stroke"
                  />
                </g>
              )
            })}
          </svg>
        </div>
        <div className="flex justify-between text-xs text-muted-foreground">
          {chartData.map((point) => (
            <span key={point.time}>{point.time}</span>
          ))}
        </div>
        <Button
          variant="link"
          className="h-auto p-0 text-primary text-sm font-medium w-full justify-center"
        >
          View Detailed Analytics
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  )
}
