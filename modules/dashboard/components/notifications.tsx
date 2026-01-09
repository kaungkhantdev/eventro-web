import { MoreHorizontal } from "lucide-react"
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

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
}

function NotificationItem({
  user,
  action,
  ticketType,
  ticketColor,
  target,
  time,
}: NotificationProps) {
  return (
    <div className="flex gap-3">
      <Avatar className="h-10 w-10">
        <AvatarImage src={user.image} alt={user.name} />
        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex-1 min-w-0">
        <p className="text-sm">
          <span className="font-semibold">{user.name}</span>{" "}
          <span className="text-muted-foreground">{action}</span>{" "}
          <span className="font-medium" style={{ color: ticketColor }}>
            {ticketType}
          </span>{" "}
          <span className="text-muted-foreground">{target}</span>
        </p>
        <p className="text-xs text-muted-foreground mt-0.5">{time}</p>
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
  },
]

export function Notifications() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-base">Notification</CardTitle>
        <CardAction>
          <Button variant="ghost" size="icon-sm">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-5">
          {notifications.map((notification) => (
            <NotificationItem key={notification.id} {...notification} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
