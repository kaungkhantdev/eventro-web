import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, MapPin, Clock, Bookmark, Share2 } from "lucide-react";

interface EventPreviewSidebarProps {
  formData: {
    eventName: string;
    organizer: string;
    startDate: string;
    endDate: string;
    location: string;
    salesEnd: string;
    price: string;
  };
}

export function EventPreviewSidebar({ formData }: EventPreviewSidebarProps) {
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
          {formData.salesEnd && (
            <div className="flex items-start gap-3">
              <Clock className="size-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="font-semibold">Sales end</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(formData.salesEnd).toLocaleString("en-US", {
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
                  {formData.price ? `$${formData.price}` : "FREE"}
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
