import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Step1BasicInfoProps {
  formData: {
    eventName: string;
    eventType: string;
    organizer: string;
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
          className="w-full h-16"
          value={formData.eventName}
          onChange={(e) => onInputChange("eventName", e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="eventType">Event Type</Label>
        <Input
          id="eventType"
          placeholder="Conference, Concert, Workshop, etc."
          className="w-full h-16"
          value={formData.eventType}
          onChange={(e) => onInputChange("eventType", e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="organizer">Organizer Name</Label>
        <Input
          id="organizer"
          placeholder="Enter organizer name"
          className="w-full h-16"
          value={formData.organizer}
          onChange={(e) => onInputChange("organizer", e.target.value)}
        />
      </div>
    </div>
  );
}
