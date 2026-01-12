import Image from "next/image"
import Link from "next/link"
import { Clock, MoreVertical, Edit, Eye } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu"

interface OngoingEventProps {
  id: string
  title: string
  image: string
  date: string
  time: string
  ticketsSold: number
  totalTickets: number
  revenue: string
}

function OngoingEventCard({ id, title, image, date, time, ticketsSold, totalTickets, revenue }: OngoingEventProps) {
  const soldPercentage = (ticketsSold / totalTickets) * 100

  return (
    <div className="group rounded-2xl border bg-card p-3">
      <div className="relative h-32 w-full overflow-hidden rounded-lg mb-3">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon-sm" variant="secondary" className="h-7 w-7 rounded-full bg-white/90 hover:bg-white">
                <MoreVertical className="h-3.5 w-3.5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="rounded-xl" align="end">
              <DropdownMenuItem className="rounded-lg">
                <Link href={'/dashboard/event/1'}>View Details</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="rounded-lg">
                Edit Event
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Badge className="absolute bottom-2 left-2 bg-green-500 hover:bg-green-600 text-white text-xs px-2 py-0">
          Live
        </Badge>
      </div>

      <Link href={`/event/${id}`} className="block">
        <h4 className="text-sm font-semibold line-clamp-1 group-hover:text-primary transition-colors mb-1">
          {title}
        </h4>
        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
          <Clock className="h-3 w-3" />
          <span>
            {date}, {time}
          </span>
        </div>
      </Link>

      <div className="space-y-2">
        <div className="flex justify-between text-xs">
          <span className="text-muted-foreground">Tickets</span>
          <span className="font-semibold">{ticketsSold}/{totalTickets}</span>
        </div>
        <Progress value={soldPercentage} className="h-1.5" />
        <div className="flex justify-between items-center">
          <span className="text-xs text-muted-foreground">Revenue</span>
          <span className="text-sm font-semibold text-green-600">{revenue}</span>
        </div>
      </div>
    </div>
  )
}

const ongoingEvents: OngoingEventProps[] = [
  {
    id: "1",
    title: "Justin Bieber Concert",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400",
    date: "30 Mar 2022",
    time: "07:30 PM",
    ticketsSold: 850,
    totalTickets: 1000,
    revenue: "$12,750"
  },
  {
    id: "2",
    title: "Tony Quefara Concert",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400",
    date: "30 Mar 2022",
    time: "08:00 PM",
    ticketsSold: 420,
    totalTickets: 500,
    revenue: "$6,300"
  },
  {
    id: "3",
    title: "Charlie Puth Concert",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
    date: "30 Mar 2022",
    time: "08:30 PM",
    ticketsSold: 680,
    totalTickets: 800,
    revenue: "$10,200"
  },
  {
    id: "4",
    title: "Firework Concert Fest",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400",
    date: "30 Mar 2022",
    time: "09:00 PM",
    ticketsSold: 1200,
    totalTickets: 1500,
    revenue: "$18,000"
  },
  {
    id: "5",
    title: "Charlie Puth Concert",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
    date: "30 Mar 2022",
    time: "08:30 PM",
    ticketsSold: 680,
    totalTickets: 800,
    revenue: "$10,200"
  },
  {
    id: "6",
    title: "Firework Concert Fest",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400",
    date: "30 Mar 2022",
    time: "09:00 PM",
    ticketsSold: 1200,
    totalTickets: 1500,
    revenue: "$18,000"
  },
]

export function OngoingEvents() {
  return (
    <Card className="border-0 shadow-none py-0 gap-4">
      <CardHeader className="px-0">
        <CardTitle className="text-base">Ongoing Event</CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <Carousel className="w-full">
          <CarouselContent className="">
            {ongoingEvents.map((event, index) => {
                return (
                  <CarouselItem key={index} className="md:pl-4 md:basis-1/4 lg:basis-1/5">
                    <OngoingEventCard key={event.id} {...event} />
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
