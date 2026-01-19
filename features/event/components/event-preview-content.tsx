import Image from "next/image";
import { MapPin, Tag } from "lucide-react";

interface EventPreviewContentProps {
  formData: {
    eventName: string;
    description: string;
    eventType: string;
    location: string;
  };
}

export function EventPreviewContent({ formData }: EventPreviewContentProps) {
  return (
    <div className="space-y-6 col-span-2">
      {/* Hero Image */}
      <div className="relative aspect-[4/2] rounded-3xl overflow-hidden bg-muted">
        <Image
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=80"
          alt={formData.eventName || "Event preview"}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Details Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold font-outfit">Details</h2>

        <div className="prose prose-sm max-w-none text-muted-foreground whitespace-pre-line">
          {formData.description ||
            "No description provided yet. Add a compelling description to tell attendees what your event is all about."}
        </div>

        {/* Event Info Tags */}
        <div className="flex flex-wrap gap-2">
          {formData.eventType && (
            <span className="px-3 py-1 bg-muted text-sm rounded-full flex items-center gap-1">
              <Tag className="size-3" />
              {formData.eventType}
            </span>
          )}
        </div>
      </div>

      {/* Location Section */}
      {formData.location && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold font-outfit">Location</h2>
          <div className="flex items-end justify-between">
            <div>
              <h3 className="font-bold text-lg">{formData.location}</h3>
              <p className="text-sm text-muted-foreground">Event venue</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4" />
              <span>View on map</span>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden border bg-muted h-60 flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <MapPin className="size-8 mx-auto mb-2" />
              <p className="text-sm">Map preview will appear here</p>
            </div>
          </div>
        </div>
      )}

      {/* Photo Grid Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold font-outfit">Photos</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="relative aspect-square rounded-2xl overflow-hidden bg-muted"
            >
              <Image
                src={`https://images.unsplash.com/photo-${
                  i === 1
                    ? "1511795409834-ef04bbd61622"
                    : i === 2
                      ? "1540575467063-178a50c2df87"
                      : i === 3
                        ? "1492684223066-81342ee5ff30"
                        : "1510076857177-7470076d4098"
                }?w=600&q=80`}
                alt={`Event photo ${i}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
