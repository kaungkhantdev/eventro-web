import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Step3TicketsPricingProps {
  formData: {
    ticketType: string;
    price: string;
    quantity: string;
    salesEnd: string;
  };
  onInputChange: (field: string, value: string) => void;
}

export function Step3TicketsPricing({
  formData,
  onInputChange,
}: Step3TicketsPricingProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="ticketType">Ticket Type</Label>
        <Input
          id="ticketType"
          placeholder="General Admission, VIP, Early Bird, etc."
          className="w-full h-16"
          value={formData.ticketType}
          onChange={(e) => onInputChange("ticketType", e.target.value)}
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="price">Price</Label>
          <Input
            id="price"
            type="number"
            placeholder="0.00"
            className="w-full h-16"
            value={formData.price}
            onChange={(e) => onInputChange("price", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="quantity">Available Quantity</Label>
          <Input
            id="quantity"
            type="number"
            placeholder="100"
            className="w-full h-16"
            value={formData.quantity}
            onChange={(e) => onInputChange("quantity", e.target.value)}
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="salesEnd">Sales End Date</Label>
        <Input
          id="salesEnd"
          type="datetime-local"
          className="w-full h-16"
          value={formData.salesEnd}
          onChange={(e) => onInputChange("salesEnd", e.target.value)}
        />
      </div>
    </div>
  );
}
