import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Step2EventDetailsProps {
  formData: {
    description: string;
    startDate: string;
    endDate: string;
    location: string;
  };
  onInputChange: (field: string, value: string) => void;
}

export function Step2EventDetails({
  formData,
  onInputChange,
}: Step2EventDetailsProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="description">Event Description</Label>
        <textarea
          id="description"
          placeholder="Describe your event"
          className="min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
          value={formData.description}
          onChange={(e) => onInputChange("description", e.target.value)}
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="startDate">Start Date & Time</Label>
          <Input
            id="startDate"
            type="datetime-local"
            className="w-full h-16"
            value={formData.startDate}
            onChange={(e) => onInputChange("startDate", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="endDate">End Date & Time</Label>
          <Input
            id="endDate"
            type="datetime-local"
            className="w-full h-16"
            value={formData.endDate}
            onChange={(e) => onInputChange("endDate", e.target.value)}
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          placeholder="Enter event location or virtual link"
          className="w-full h-16"
          value={formData.location}
          onChange={(e) => onInputChange("location", e.target.value)}
        />
      </div>
    </div>
  );
}
