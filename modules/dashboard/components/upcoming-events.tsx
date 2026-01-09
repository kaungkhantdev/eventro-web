import { Clock, MoreHorizontal } from "lucide-react"
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface UpcomingEventProps {
  id: string
  title: string
  date: string
  month: string
  year: string
  time: string
  attendees: { image: string; name: string }[]
  dateColor: string
}

function UpcomingEventCard({
  title,
  date,
  month,
  year,
  time,
  attendees,
  dateColor,
}: UpcomingEventProps) {
  return (
    <div className="min-w-[160px] rounded-xl border p-4">
      <div
        className="inline-block rounded-full px-3 py-1 text-xs font-medium mb-3"
        style={{
          backgroundColor: `${dateColor}15`,
          color: dateColor,
        }}
      >
        {date} {month} {year}
      </div>
      <h4 className="text-sm font-semibold line-clamp-1">{title}</h4>
      <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
        <Clock className="h-3 w-3" />
        <span>{time}</span>
      </div>
      <div className="flex -space-x-2 mt-3">
        {attendees.slice(0, 4).map((attendee, index) => (
          <Avatar key={index} className="h-7 w-7 border-2 border-white">
            <AvatarImage src={attendee.image} alt={attendee.name} />
            <AvatarFallback className="text-xs">
              {attendee.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
        ))}
        {attendees.length > 4 && (
          <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-gray-100 text-xs font-medium">
            +{attendees.length - 4}
          </div>
        )}
      </div>
    </div>
  )
}

const upcomingEvents: UpcomingEventProps[] = [
  {
    id: "1",
    title: "Doel Sumbang Concert",
    date: "27",
    month: "Apr",
    year: "2022",
    time: "10:00 PM - 11:30 PM",
    dateColor: "#EF4444",
    attendees: [
      { image: "https://i.pravatar.cc/100?img=1", name: "John" },
      { image: "https://i.pravatar.cc/100?img=2", name: "Jane" },
      { image: "https://i.pravatar.cc/100?img=3", name: "Bob" },
      { image: "https://i.pravatar.cc/100?img=4", name: "Alice" },
    ],
  },
  {
    id: "2",
    title: "Air Baloon Festival",
    date: "28",
    month: "Apr",
    year: "2022",
    time: "08:00 AM - 10:00 AM",
    dateColor: "#F59E0B",
    attendees: [
      { image: "https://i.pravatar.cc/100?img=5", name: "Mike" },
      { image: "https://i.pravatar.cc/100?img=6", name: "Sarah" },
    ],
  },
  {
    id: "3",
    title: "Global Firework Fest",
    date: "29",
    month: "Apr",
    year: "2022",
    time: "08:30 PM - 11:30 PM",
    dateColor: "#10B981",
    attendees: [
      { image: "https://i.pravatar.cc/100?img=7", name: "Tom" },
      { image: "https://i.pravatar.cc/100?img=8", name: "Lisa" },
      { image: "https://i.pravatar.cc/100?img=9", name: "Chris" },
    ],
  },
  {
    id: "4",
    title: "Selena Gomez Concert",
    date: "30",
    month: "Apr",
    year: "2022",
    time: "09:00 PM - 10:30 PM",
    dateColor: "#3B82F6",
    attendees: [
      { image: "https://i.pravatar.cc/100?img=10", name: "Emma" },
      { image: "https://i.pravatar.cc/100?img=11", name: "David" },
      { image: "https://i.pravatar.cc/100?img=12", name: "Kate" },
      { image: "https://i.pravatar.cc/100?img=13", name: "Paul" },
      { image: "https://i.pravatar.cc/100?img=14", name: "Anna" },
    ],
  },
]

export function UpcomingEvents() {
  return (
    <Card className="border-0 shadow-none py-0 gap-4">
      <CardHeader className="px-0">
        <CardTitle className="text-base">Upcoming Event</CardTitle>
        <CardAction>
          <Button variant="ghost" size="icon-sm">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="px-0">
        <div className="flex gap-4 overflow-x-auto pb-2">
          {upcomingEvents.map((event) => (
            <UpcomingEventCard key={event.id} {...event} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
