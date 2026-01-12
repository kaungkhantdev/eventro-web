import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { EventPreviewContent } from "./event-preview-content";
import { EventPreviewSidebar } from "./event-preview-sidebar";

interface EventPreviewSheetProps {
  formData: {
    eventName: string;
    eventType: string;
    organizer: string;
    description: string;
    startDate: string;
    endDate: string;
    location: string;
    ticketType: string;
    price: string;
    quantity: string;
    salesEnd: string;
  };
}

export function EventPreviewSheet({ formData }: EventPreviewSheetProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size={'lg'} className="rounded-full w-full">
          Detail Preview
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-4xl overflow-y-auto p-0">
        <div className="p-8">
          <SheetHeader className="p-0">
            <SheetTitle className="text-3xl font-bold font-outfit p-0">
              {formData.eventName || "Your Event Name"}
            </SheetTitle>
            <SheetDescription>
              Event Preview - How your event will appear to attendees
            </SheetDescription>
          </SheetHeader>

          <div className="mt-8 space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <EventPreviewContent formData={formData} />
              <EventPreviewSidebar formData={formData} />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
