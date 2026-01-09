import Image from "next/image"
import Link from "next/link"
import { Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface OngoingEventProps {
  id: string
  title: string
  image: string
  date: string
  time: string
}

function OngoingEventCard({ id, title, image, date, time }: OngoingEventProps) {
  return (
    <Link
      href={`/event/${id}`}
      className="group block min-w-[160px] max-w-[180px]"
    >
      <div className="relative h-28 w-full overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-2">
        <h4 className="text-sm font-semibold line-clamp-1 group-hover:text-primary transition-colors">
          {title}
        </h4>
        <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
          <Clock className="h-3 w-3" />
          <span>
            {date}, {time}
          </span>
        </div>
      </div>
    </Link>
  )
}

const ongoingEvents: OngoingEventProps[] = [
  {
    id: "1",
    title: "Justin Bieber Concert",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400",
    date: "30 Mar 2022",
    time: "07:30 PM",
  },
  {
    id: "2",
    title: "Tony Quefara Concert",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400",
    date: "30 Mar 2022",
    time: "08:00 PM",
  },
  {
    id: "3",
    title: "Charlie Puth Concert",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
    date: "30 Mar 2022",
    time: "08:30 PM",
  },
  {
    id: "4",
    title: "Firework Concert Fest",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400",
    date: "30 Mar 2022",
    time: "09:00 PM",
  },
]

export function OngoingEvents() {
  return (
    <Card className="border-0 shadow-none py-0 gap-4">
      <CardHeader className="px-0">
        <CardTitle className="text-base">Ongoing Event</CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <div className="flex gap-4 overflow-x-auto pb-2">
          {ongoingEvents.map((event) => (
            <OngoingEventCard key={event.id} {...event} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
