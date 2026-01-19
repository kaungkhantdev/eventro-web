import { Card, CardHeader, CardDescription, CardTitle } from "@/components/ui/card";
import { DollarSign, Tickets, Eye, TrendingUp } from "lucide-react";
import { Event } from "../types";

interface EventStatsCardsProps {
  event: Event;
}

export function EventStatsCards({ event }: EventStatsCardsProps) {
  const conversionRate = ((event.ticketsSold / event.views) * 100).toFixed(2);

  return (
    <div className="md:grid-cols-2 lg:grid-cols-4 grid grid-cols-1 gap-4">
      <Card className="border gap-3 shadow-none p-2 rounded-2xl">
        <CardHeader className="relative mb-1 p-2">
          <CardDescription>Total Revenue</CardDescription>
          <CardTitle className="@[250px]/card:text-2xl text-xl font-semibold">
            ${event.revenue.toLocaleString()}
          </CardTitle>
          <div className="absolute right-4 top-0 p-2 border rounded-md border-primary/5">
            <DollarSign className="size-5 text-green-600" />
          </div>
        </CardHeader>
      </Card>

      <Card className="border gap-3 shadow-none p-2 rounded-2xl">
        <CardHeader className="relative mb-1 p-2">
          <CardDescription>Tickets Sold</CardDescription>
          <CardTitle className="@[250px]/card:text-2xl text-xl font-semibold">
            {event.ticketsSold} / {event.totalCapacity}
          </CardTitle>
          <div className="absolute right-4 top-0 p-2 border rounded-md border-primary/5">
            <Tickets className="size-5 text-sky-600" />
          </div>
        </CardHeader>
      </Card>

      <Card className="border gap-3 shadow-none p-2 rounded-2xl">
        <CardHeader className="relative mb-1 p-2">
          <CardDescription>Page Views</CardDescription>
          <CardTitle className="@[250px]/card:text-2xl text-xl font-semibold">
            {event.views.toLocaleString()}
          </CardTitle>
          <div className="absolute right-4 top-0 p-2 border rounded-md border-primary/5">
            <Eye className="size-5 text-purple-600" />
          </div>
        </CardHeader>
      </Card>

      <Card className="border gap-3 shadow-none p-2 rounded-2xl">
        <CardHeader className="relative mb-1 p-2">
          <CardDescription>Conversion Rate</CardDescription>
          <CardTitle className="@[250px]/card:text-2xl text-xl font-semibold">
            {conversionRate}%
          </CardTitle>
          <div className="absolute right-4 top-0 p-2 border rounded-md border-primary/5">
            <TrendingUp className="size-5 text-orange-600" />
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
