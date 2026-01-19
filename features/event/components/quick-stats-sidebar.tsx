import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BarChart3, Users, Share2, CalendarFold } from "lucide-react";
import Link from "next/link";
import { Event } from "../types";

interface QuickStatsSidebarProps {
  event: Event;
  onViewAnalytics?: () => void;
  onExportAttendees?: () => void;
  onShareEvent?: () => void;
}

export function QuickStatsSidebar({
  event,
  onViewAnalytics,
  onExportAttendees,
  onShareEvent,
}: QuickStatsSidebarProps) {
  const soldPercentage = (event.ticketsSold / event.totalCapacity) * 100;
  const averageTicketPrice = (event.revenue / event.ticketsSold).toFixed(2);

  return (
    <div className="space-y-4">
      <Card className="rounded-3xl shadow-none">
        <CardHeader>
          <CardTitle>Quick Stats</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Tickets Available</span>
              <span className="font-semibold">
                {event.totalCapacity - event.ticketsSold}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Average Ticket Price</span>
              <span className="font-semibold">${averageTicketPrice}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Sales Progress</span>
              <span className="font-semibold">{soldPercentage.toFixed(1)}%</span>
            </div>
            <div className="mt-3">
              <Progress value={soldPercentage} className="w-full" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-3xl shadow-none">
        <CardHeader>
          <CardTitle>Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button
            variant="outline"
            className="w-full justify-start rounded-full"
            size="lg"
            onClick={onViewAnalytics}
          >
            <BarChart3 className="size-4 mr-2" />
            View Analytics
          </Button>
          <Button
            variant="outline"
            className="w-full justify-start rounded-full"
            size="lg"
            onClick={onExportAttendees}
          >
            <Users className="size-4 mr-2" />
            Export Attendees
          </Button>
          <Button
            variant="outline"
            className="w-full justify-start rounded-full"
            size="lg"
            onClick={onShareEvent}
          >
            <Share2 className="size-4 mr-2" />
            Share Event
          </Button>
          <Link href={`/event/${event.id}`}>
            <Button variant="outline" className="w-full justify-start rounded-full" size="lg">
              <CalendarFold className="size-4 mr-2" />
              Public View Event
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
