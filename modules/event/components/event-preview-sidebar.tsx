import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, MapPin, Clock, Bookmark, Share2, Ticket } from "lucide-react";
import { EventTicket } from "@/modules/event/types";

interface EventPreviewSidebarProps {
  formData: {
    eventName: string;
    organizer: string;
    startDate: string;
    endDate: string;
    location: string;
  };
  tickets: EventTicket[];
}

export function EventPreviewSidebar({ formData, tickets }: EventPreviewSidebarProps) {
  // Get earliest sales end date from tickets
  const getEarliestSalesEnd = () => {
    if (tickets.length === 0) return null;
    const dates = tickets.map((t) => new Date(t.salesEnd).getTime());
    const earliest = Math.min(...dates);
    return new Date(earliest);
  };

  // Get price display (lowest price or range)
  const getPriceDisplay = () => {
    if (tickets.length === 0) return "FREE";
    const prices = tickets.map((t) => parseFloat(t.price) || 0);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    if (minPrice === 0 && maxPrice === 0) return "FREE";
    if (minPrice === maxPrice) return minPrice === 0 ? "FREE" : `$${minPrice}`;
    return minPrice === 0 ? `Free - $${maxPrice}` : `$${minPrice} - $${maxPrice}`;
  };

  const earliestSalesEnd = getEarliestSalesEnd();

  return (
    <div className="space-y-6 col-span-2 lg:col-span-1">
      <div className="space-y-6 lg:sticky lg:top-8">
        {/* Host Info */}
        <div className="flex items-center gap-3">
          <Avatar className="size-10">
            <AvatarImage src="https://github.com/shadcn.png" alt="Organizer" />
            <AvatarFallback>
              {formData.organizer?.charAt(0) || "O"}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm text-muted-foreground">Hosted by</p>
            <p className="font-semibold">
              {formData.organizer || "Organizer Name"}
            </p>
          </div>
        </div>

        {/* Event Info Card */}
        <div className="border rounded-2xl p-6 space-y-4">
          {/* Date & Time */}
          <div className="flex items-start gap-3">
            <Calendar className="size-5 text-muted-foreground mt-0.5" />
            <div>
              <p className="font-semibold">
                {formData.startDate
                  ? new Date(formData.startDate).toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "short",
                      day: "numeric",
                    })
                  : "Date not set"}
              </p>
              <p className="text-sm text-muted-foreground">
                {formData.startDate
                  ? new Date(formData.startDate).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : "Time not set"}
                {formData.endDate && (
                  <>
                    {" "}
                    to{" "}
                    {new Date(formData.endDate).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-3">
            <MapPin className="size-5 text-muted-foreground mt-0.5" />
            <div>
              <p className="font-semibold">
                {formData.location || "Location not set"}
              </p>
              <p className="text-sm text-muted-foreground">Event venue</p>
            </div>
          </div>

          {/* Sales End Date */}
          {earliestSalesEnd && (
            <div className="flex items-start gap-3">
              <Clock className="size-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="font-semibold">Sales end</p>
                <p className="text-sm text-muted-foreground">
                  {earliestSalesEnd.toLocaleString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Tickets Info */}
        {tickets.length > 0 && (
          <div className="border rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-2">
              <Ticket className="size-5 text-muted-foreground" />
              <p className="font-semibold">Available Tickets</p>
            </div>
            <div className="space-y-2">
              {tickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="flex items-center justify-between py-2 border-b last:border-0"
                >
                  <div>
                    <p className="font-medium text-sm">{ticket.ticketType}</p>
                    <p className="text-xs text-muted-foreground">
                      {ticket.quantity} available
                    </p>
                  </div>
                  <p className="font-semibold">
                    {ticket.price === "0" ? "Free" : `$${ticket.price}`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Attend Card */}
        <div className="border rounded-2xl p-6 space-y-4">
          <div className="grid gap-6">
            {/* Event Info */}
            <div>
              <p className="font-semibold text-lg">
                {formData.eventName || "Your Event Name"}
              </p>
              <p className="text-sm text-muted-foreground">
                {formData.startDate
                  ? new Date(formData.startDate).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  : "Date"}{" "}
                ·{" "}
                {formData.startDate
                  ? new Date(formData.startDate)
                      .toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                      .split(" ")[0]
                  : "Time"}
              </p>
            </div>

            {/* Price & Actions */}
            <div className="flex items-center justify-between gap-3">
              <div>
                <span className="text-lg font-bold">
                  {getPriceDisplay()}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  aria-label="Bookmark event"
                >
                  <Bookmark className="size-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  aria-label="Share event"
                >
                  <Share2 className="size-5" />
                </Button>
              </div>
            </div>

            {/* Attend Button */}
            <div>
              <Button className="px-6 h-14 rounded-full w-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 bg-gradient-primary text-white hover:opacity-90 shadow-lg shadow-primary/30">
                Attend
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
