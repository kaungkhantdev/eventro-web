import { Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

interface UpcomingEventProps {
  id: string
  title: string
  date: string
  month: string
  year: string
  time: string
  attendees: { image: string; name: string }[]
  dateColor: string
  status: "upcoming" | "draft" | "scheduled"
  revenue: string
  ticketsSold: number
}

function UpcomingEventCard({
  title,
  date,
  month,
  year,
  time,
  attendees,
  dateColor,
  status,
  revenue,
  ticketsSold,
}: UpcomingEventProps) {
  const statusConfig = {
    upcoming: { label: "Upcoming", color: "bg-blue-500" },
    draft: { label: "Draft", color: "bg-gray-500" },
    scheduled: { label: "Scheduled", color: "bg-purple-500" },
  }

  return (
    <div className="min-w-40 rounded-2xl border p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div
          className="inline-block rounded-full px-3 py-1 text-xs font-medium"
          style={{
            backgroundColor: `${dateColor}15`,
            color: dateColor,
          }}
        >
          {date} {month} {year}
        </div>
        
      </div>
      <h4 className="text-sm font-semibold line-clamp-1 mb-1">{title}</h4>
      <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
        <Clock className="h-3 w-3" />
        <span>{time}</span>
      </div>

      <div className="flex items-center justify-between mb-3">
        <div className="flex -space-x-2">
          {attendees.slice(0, 3).map((attendee, index) => (
            <Avatar key={index} className="h-6 w-6 border-2 border-white">
              <AvatarImage src={attendee.image} alt={attendee.name} />
              <AvatarFallback className="text-xs">
                {attendee.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
          ))}
          {attendees.length > 3 && (
            <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-gray-100 text-xs font-medium">
              +{attendees.length - 3}
            </div>
          )}
        </div>
        <span className="text-xs text-muted-foreground">{ticketsSold} sold</span>
      </div>

      <div className="flex items-center justify-between pt-3 border-t">
        <span className="text-xs text-muted-foreground">Revenue</span>
        <span className="text-sm font-semibold text-green-600">{revenue}</span>
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
    status: "scheduled",
    revenue: "$8,500",
    ticketsSold: 340,
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
    status: "upcoming",
    revenue: "$12,300",
    ticketsSold: 615,
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
    status: "upcoming",
    revenue: "$15,800",
    ticketsSold: 790,
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
    status: "draft",
    revenue: "$0",
    ticketsSold: 0,
    attendees: [
      { image: "https://i.pravatar.cc/100?img=10", name: "Emma" },
      { image: "https://i.pravatar.cc/100?img=11", name: "David" },
      { image: "https://i.pravatar.cc/100?img=12", name: "Kate" },
      { image: "https://i.pravatar.cc/100?img=13", name: "Paul" },
      { image: "https://i.pravatar.cc/100?img=14", name: "Anna" },
    ],
  },
  {
    id: "5",
    title: "Selena Gomez Concert",
    date: "30",
    month: "Apr",
    year: "2022",
    time: "09:00 PM - 10:30 PM",
    dateColor: "#3B82F6",
    status: "draft",
    revenue: "$0",
    ticketsSold: 0,
    attendees: [
      { image: "https://i.pravatar.cc/100?img=10", name: "Emma" },
      { image: "https://i.pravatar.cc/100?img=11", name: "David" },
      { image: "https://i.pravatar.cc/100?img=12", name: "Kate" },
      { image: "https://i.pravatar.cc/100?img=13", name: "Paul" },
      { image: "https://i.pravatar.cc/100?img=14", name: "Anna" },
    ],
  },
  {
    id: "6",
    title: "Selena Gomez Concert",
    date: "30",
    month: "Apr",
    year: "2022",
    time: "09:00 PM - 10:30 PM",
    dateColor: "#3B82F6",
    status: "draft",
    revenue: "$0",
    ticketsSold: 0,
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
      </CardHeader>
      <CardContent className="px-0">
        <Carousel className="w-full">
          <CarouselContent className="">
            {upcomingEvents.map((event, index) => {
                return (
                  <CarouselItem key={index} className="md:pl-4 md:basis-1/4 lg:basis-1/5">
                     <UpcomingEventCard key={event.id} {...event} />
                  </CarouselItem>
                )
              })}
          </CarouselContent>
          <CarouselPrevious className='-left-2 lg:-left-4' />
          <CarouselNext className='-right-2 lg:-right-4' />
        </Carousel>
      </CardContent>
    </Card>
  )
}
