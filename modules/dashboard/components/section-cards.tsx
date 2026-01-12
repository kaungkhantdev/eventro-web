import { CircleDollarSign, TrendingUpIcon, Tickets, CalendarFold } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const data = [
  {
    id: 1,
    name: "Total Tickets Sold",
    price: "1,847",
    icon: <Tickets className=" size-5 text-primary" />,
    text: "Trending up this month",
    percentage: "+23.5%",
    perIcon: <TrendingUpIcon className="size-3" />
  },
   {
    id: 2,
    name: "Total Revenue",
    price: "$24,680",
    icon: <CircleDollarSign className=" size-5 text-primary" />,
    text: "Revenue increased",
    percentage: "+18.2%",
    perIcon: <TrendingUpIcon className="size-3" />
  },
   {
    id: 3,
    name: "Active Events",
    price: "12",
    icon: <CalendarFold className=" size-5 text-primary" />,
    text: "4 ongoing now",
    percentage: "+3",
    perIcon: <TrendingUpIcon className="size-3" />
  },
   {
    id: 4,
    name: "Avg Attendance",
    price: "87.5%",
    icon: <TrendingUpIcon className=" size-5 text-primary" />,
    text: "Strong attendance rate",
    percentage: "+5.2%",
    perIcon: <TrendingUpIcon className="size-3" />,
  }
]

export function SectionCards() {
  return (
    <div className="md:grid-cols-2 lg:grid-cols-4 grid grid-cols-1 gap-4">
      {
        data.map((item) => (
          <Card key={item.id} className="border gap-3 shadow-none p-2 rounded-2xl">
            <CardHeader className="relative mb-1 p-2">
              <CardDescription>{item.name}</CardDescription>
              <CardTitle className="@[250px]/card:text-2xl text-xl font-semibold">
                {item.price}
              </CardTitle>
              <div className="absolute right-4 top-0 p-2 border rounded-md border-primary/5">
                {item.icon}
              </div>
            </CardHeader>
            <CardFooter className="flex items-center justify-between gap-1 text-sm p-2">
              <div className="line-clamp-1 flex gap-2 font-medium">
                {item.text}
              </div>
              <div className="">
                <Badge variant="outline" className="flex gap-1 rounded-full text-xs">
                  {item.perIcon}
                  {item.percentage}
                </Badge>
              </div>
            </CardFooter>
          </Card>
        ))
      }
    </div>
  )
}
