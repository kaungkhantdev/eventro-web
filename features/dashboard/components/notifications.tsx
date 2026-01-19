"use client"

import { useState } from "react"
import { MoreHorizontal, Filter } from "lucide-react"
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

interface NotificationProps {
  id: string
  user: {
    name: string
    image: string
  }
  action: string
  ticketType: string
  ticketColor: string
  target: string
  time: string
  isRead: boolean
  type: "purchase" | "refund" | "update"
}

function NotificationItem({
  user,
  action,
  ticketType,
  ticketColor,
  target,
  time,
  isRead,
  type,
}: NotificationProps) {
  return (
    <div className={cn(
      "flex gap-3 p-3 rounded-lg transition-colors hover:bg-muted/50",
      !isRead && "bg-primary/5"
    )}>
      <Avatar className="h-10 w-10">
        <AvatarImage src={user.image} alt={user.name} />
        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <p className="text-sm">
            <span className="font-semibold">{user.name}</span>{" "}
            <span className="text-muted-foreground">{action}</span>{" "}
            <span className="font-medium" style={{ color: ticketColor }}>
              {ticketType}
            </span>{" "}
            <span className="text-muted-foreground">{target}</span>
          </p>
          {!isRead && (
            <div className="h-2 w-2 rounded-full bg-primary shrink-0 mt-1.5" />
          )}
        </div>
        <div className="flex items-center gap-2 mt-0.5">
          <p className="text-xs text-muted-foreground">{time}</p>
          <Badge variant="outline" className="text-xs px-1.5 py-0">
            {type}
          </Badge>
        </div>
      </div>
    </div>
  )
}

const notifications: NotificationProps[] = [
  {
    id: "1",
    user: {
      name: "Roberto Ahman Person",
      image: "https://i.pravatar.cc/100?img=33",
    },
    action: "has bought",
    ticketType: "3 economy class",
    ticketColor: "#00BBFF",
    target: "on your event",
    time: "2 minute ago",
    isRead: false,
    type: "purchase",
  },
  {
    id: "2",
    user: {
      name: "Greysia Polii",
      image: "https://i.pravatar.cc/100?img=47",
    },
    action: "has bought",
    ticketType: "2 master class",
    ticketColor: "#F59E0B",
    target: "on your event",
    time: "3 minute ago",
    isRead: false,
    type: "purchase",
  },
  {
    id: "3",
    user: {
      name: "Stephanie Angelina",
      image: "https://i.pravatar.cc/100?img=45",
    },
    action: "has bought",
    ticketType: "2 business class",
    ticketColor: "#10B981",
    target: "on your event",
    time: "3 minute ago",
    isRead: true,
    type: "purchase",
  },
]

export function Notifications() {
  const [filter, setFilter] = useState<"all" | "purchase" | "refund" | "update">("all")

  const filteredNotifications = filter === "all"
    ? notifications
    : notifications.filter(n => n.type === filter)

  const unreadCount = notifications.filter(n => !n.isRead).length

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-base flex items-center gap-2">
          Notification
          {unreadCount > 0 && (
            <Badge variant="default" className="rounded-full h-5 min-w-5 px-1.5">
              {unreadCount}
            </Badge>
          )}
        </CardTitle>
        <CardAction className="flex gap-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon-sm">
                <Filter className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setFilter("all")}>
                All Notifications
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilter("purchase")}>
                Purchases Only
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilter("refund")}>
                Refunds Only
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilter("update")}>
                Updates Only
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" size="icon-sm">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map((notification) => (
              <NotificationItem key={notification.id} {...notification} />
            ))
          ) : (
            <div className="text-center py-8 text-muted-foreground text-sm">
              No {filter !== "all" ? filter : ""} notifications
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
