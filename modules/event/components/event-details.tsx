import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CalendarFold, MapPin, Users } from "lucide-react";
import Image from "next/image";
import { Event } from "../types";
import { EventInfoItem } from "./event-info-item";

interface EventDetailsProps {
  event: Event;
}

export function EventDetails({ event }: EventDetailsProps) {
  return (
    <Card className="rounded-3xl shadow-none">
      <CardHeader>
        <CardTitle>Event Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Event Image */}
        <div className="relative w-full h-64 rounded-2xl overflow-hidden">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Description */}
        <div>
          <h3 className="font-semibold mb-2">About this event</h3>
          <p className="text-muted-foreground">{event.description}</p>
        </div>

        {/* Event Info Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          <EventInfoItem
            icon={CalendarFold}
            iconBgColor="bg-cyan-100"
            iconColor="text-cyan-600"
            title="Start Date"
            content={`${new Date(event.startDate).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })} • ${event.startTime}`}
          />

          <EventInfoItem
            icon={CalendarFold}
            iconBgColor="bg-red-100"
            iconColor="text-red-600"
            title="End Date"
            content={`${new Date(event.endDate).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })} • ${event.endTime}`}
          />

          <EventInfoItem
            icon={MapPin}
            iconBgColor="bg-green-100"
            iconColor="text-green-600"
            title="Location"
            content={event.location}
            subtitle={event.address}
          />

          <EventInfoItem
            icon={Users}
            iconBgColor="bg-purple-100"
            iconColor="text-purple-600"
            title="Capacity"
            content={`${event.totalCapacity} attendees`}
          />
        </div>
      </CardContent>
    </Card>
  );
}
