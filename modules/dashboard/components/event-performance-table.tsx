import { ArrowUpRight, ArrowDownRight, MoreHorizontal } from "lucide-react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardAction,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

interface EventPerformance {
  id: string
  name: string
  date: string
  ticketsSold: number
  totalTickets: number
  revenue: string
  trend: "up" | "down"
  trendValue: string
  status: "live" | "upcoming" | "ended"
}

const eventPerformance: EventPerformance[] = [
  {
    id: "1",
    name: "Justin Bieber Concert",
    date: "Mar 30, 2022",
    ticketsSold: 850,
    totalTickets: 1000,
    revenue: "$12,750",
    trend: "up",
    trendValue: "12%",
    status: "live",
  },
  {
    id: "2",
    name: "Global Firework Fest",
    date: "Apr 29, 2022",
    ticketsSold: 1200,
    totalTickets: 1500,
    revenue: "$18,000",
    trend: "up",
    trendValue: "8%",
    status: "upcoming",
  },
  {
    id: "3",
    name: "Air Balloon Festival",
    date: "Apr 28, 2022",
    ticketsSold: 420,
    totalTickets: 500,
    revenue: "$6,300",
    trend: "down",
    trendValue: "5%",
    status: "upcoming",
  },
  {
    id: "4",
    name: "Charlie Puth Concert",
    date: "Mar 30, 2022",
    ticketsSold: 680,
    totalTickets: 800,
    revenue: "$10,200",
    trend: "up",
    trendValue: "15%",
    status: "live",
  },
]

export function EventPerformanceTable() {
  const statusColors = {
    live: "bg-green-500",
    upcoming: "bg-blue-500",
    ended: "bg-gray-500",
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Event Performance</CardTitle>
        <CardAction>
          <Button variant="ghost" size="icon-sm">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {eventPerformance.map((event) => {
            const percentage = (event.ticketsSold / event.totalTickets) * 100
            return (
              <div
                key={event.id}
                className="flex items-center justify-between gap-4 p-3 rounded-lg border hover:bg-muted/50 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-sm line-clamp-1">
                      {event.name}
                    </h4>
                    <Badge
                      className={`${statusColors[event.status]} text-white text-xs px-2 py-0`}
                    >
                      {event.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">
                    {event.date}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-muted-foreground">
                          {event.ticketsSold} / {event.totalTickets} sold
                        </span>
                        <span className="font-medium">{percentage.toFixed(0)}%</span>
                      </div>
                      <Progress value={percentage} className="h-1.5" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  <div className="text-right">
                    <p className="text-sm font-semibold text-green-600">
                      {event.revenue}
                    </p>
                    <div className="flex items-center gap-1 text-xs mt-0.5">
                      {event.trend === "up" ? (
                        <ArrowUpRight className="h-3 w-3 text-green-600" />
                      ) : (
                        <ArrowDownRight className="h-3 w-3 text-red-600" />
                      )}
                      <span
                        className={
                          event.trend === "up" ? "text-green-600" : "text-red-600"
                        }
                      >
                        {event.trendValue}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
