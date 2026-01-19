import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Step2EventDetailsProps {
  formData: {
    description: string;
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
        <Textarea className="min-h-96" placeholder="Type your message here." value={formData.description} onChange={(e) => onInputChange("description", e.target.value)} />
      </div>
    </div>
  );
}
