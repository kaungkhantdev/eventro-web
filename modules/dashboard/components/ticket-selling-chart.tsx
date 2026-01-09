"use client"

import { MoreHorizontal, ChevronRight } from "lucide-react"
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const chartData = [
  { time: "06.00", value: 30 },
  { time: "07.00", value: 45 },
  { time: "08.00", value: 35 },
  { time: "09.00", value: 60 },
]

export function TicketSellingChart() {
  const maxValue = Math.max(...chartData.map((d) => d.value))
  const minValue = Math.min(...chartData.map((d) => d.value))
  const range = maxValue - minValue

  const getY = (value: number) => {
    return 100 - ((value - minValue) / range) * 80 + 10
  }

  const pathData = chartData
    .map((point, index) => {
      const x = (index / (chartData.length - 1)) * 100
      const y = getY(point.value)
      return `${index === 0 ? "M" : "L"} ${x} ${y}`
    })
    .join(" ")

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
      <CardContent>
        <div className="h-32 w-full">
          <svg viewBox="0 0 100 100" className="h-full w-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
            </defs>
            <path
              d={pathData}
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
            {chartData.map((point, index) => {
              const x = (index / (chartData.length - 1)) * 100
              const y = getY(point.value)
              return (
                <circle
                  key={index}
                  cx={x}
                  cy={y}
                  r="3"
                  fill="#F59E0B"
                  vectorEffect="non-scaling-stroke"
                />
              )
            })}
          </svg>
        </div>
        <div className="flex justify-between text-xs text-muted-foreground mt-2">
          {chartData.map((point) => (
            <span key={point.time}>{point.time}</span>
          ))}
        </div>
        <Button
          variant="link"
          className="mt-3 h-auto p-0 text-primary text-sm font-medium"
        >
          Show More
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  )
}
