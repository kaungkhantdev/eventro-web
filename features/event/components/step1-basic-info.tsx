import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Step1BasicInfoProps {
  formData: {
    eventName: string;
    eventType: string;
    organizer: string;
    startDate: string;
    endDate: string;
    location: string;
  };
  onInputChange: (field: string, value: string) => void;
}

export function Step1BasicInfo({ formData, onInputChange }: Step1BasicInfoProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="eventName">Event Name</Label>
        <Input
          id="eventName"
          placeholder="Enter event name"
          className="w-full h-14"
          value={formData.eventName}
          onChange={(e) => onInputChange("eventName", e.target.value)}
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="eventType">Event Type</Label>
          <Input
            id="eventType"
            placeholder="Conference, Concert, Workshop, etc."
            className="w-full h-14"
            value={formData.eventType}
            onChange={(e) => onInputChange("eventType", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="organizer">Organizer Name</Label>
          <Input
            id="organizer"
            placeholder="Enter organizer name"
            className="w-full h-14"
            value={formData.organizer}
            onChange={(e) => onInputChange("organizer", e.target.value)}
          />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="startDate">Start Date & Time</Label>
          <Input
            id="startDate"
            type="datetime-local"
            className="w-full h-14"
            value={formData.startDate}
            onChange={(e) => onInputChange("startDate", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="endDate">End Date & Time</Label>
          <Input
            id="endDate"
            type="datetime-local"
            className="w-full h-14"
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
          className="w-full h-14"
          value={formData.location}
          onChange={(e) => onInputChange("location", e.target.value)}
        />
      </div>
    </div>
  );
}
