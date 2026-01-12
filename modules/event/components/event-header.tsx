import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Share2, Edit } from "lucide-react";
import { Event } from "../types";

interface EventHeaderProps {
  event: Event;
  onEdit?: () => void;
  onShare?: () => void;
}

export function EventHeader({ event, onEdit, onShare }: EventHeaderProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="secondary" className="rounded-full">
              {event.category}
            </Badge>
            <Badge
              variant={event.status === "Published" ? "default" : "outline"}
              className="rounded-full"
            >
              {event.status}
            </Badge>
          </div>
          <h1 className="text-2xl font-semibold">{event.title}</h1>
          <p className="text-muted-foreground mt-1">by {event.organizer}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="lg" className="rounded-full gap-2" onClick={onShare}>
            <Share2 className="h-4 w-4" />
            Share
          </Button>
          <Button size="lg" className="rounded-full bg-gradient-primary gap-2" onClick={onEdit}>
            <Edit className="h-4 w-4" />
            Edit Event
          </Button>
        </div>
      </div>
    </div>
  );
}
