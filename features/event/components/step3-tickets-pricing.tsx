"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EventTicket } from "@/features/event/types";
import { Trash2, Plus } from "lucide-react";
import { useState } from "react";

interface Step3TicketsPricingProps {
  tickets: EventTicket[];
  onTicketsChange: (tickets: EventTicket[]) => void;
}

interface TicketFormErrors {
  ticketType?: string;
  price?: string;
  quantity?: string;
  salesEnd?: string;
}

const initialTicketState = {
  ticketType: "",
  price: "",
  quantity: "",
  salesEnd: "",
};

export function Step3TicketsPricing({
  tickets,
  onTicketsChange,
}: Step3TicketsPricingProps) {
  const [ticketForm, setTicketForm] = useState(initialTicketState);
  const [errors, setErrors] = useState<TicketFormErrors>({});

  const validateTicket = (): boolean => {
    const newErrors: TicketFormErrors = {};

    if (!ticketForm.ticketType.trim()) {
      newErrors.ticketType = "Ticket type is required";
    }

    if (!ticketForm.quantity.trim()) {
      newErrors.quantity = "Quantity is required";
    } else if (parseInt(ticketForm.quantity) <= 0) {
      newErrors.quantity = "Quantity must be greater than 0";
    }

    if (ticketForm.price && parseFloat(ticketForm.price) < 0) {
      newErrors.price = "Price cannot be negative";
    }

    if (!ticketForm.salesEnd) {
      newErrors.salesEnd = "Sales end date is required";
    } else if (new Date(ticketForm.salesEnd) < new Date()) {
      newErrors.salesEnd = "Sales end date must be in the future";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddTicket = () => {
    if (!validateTicket()) return;

    const newTicket: EventTicket = {
      id: crypto.randomUUID(),
      ticketType: ticketForm.ticketType.trim(),
      price: ticketForm.price || "0",
      quantity: ticketForm.quantity,
      salesEnd: ticketForm.salesEnd,
    };

    onTicketsChange([...tickets, newTicket]);
    setTicketForm(initialTicketState);
    setErrors({});
  };

  const handleRemoveTicket = (id: string) => {
    onTicketsChange(tickets.filter((t) => t.id !== id));
  };

  const handleInputChange = (field: keyof typeof ticketForm, value: string) => {
    setTicketForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="space-y-6">
      {/* Existing Tickets List */}
      {tickets.length > 0 && (
        <div className="space-y-3">
          <Label className="text-base font-semibold">Added Tickets</Label>
          <div className="space-y-2">
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                className="flex items-center justify-between p-4 border rounded-xl bg-muted/30"
              >
                <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">Type: </span>
                    <span className="font-medium">{ticket.ticketType}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Price: </span>
                    <span className="font-medium">
                      {ticket.price === "0" ? "Free" : `$${ticket.price}`}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Qty: </span>
                    <span className="font-medium">{ticket.quantity}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Ends: </span>
                    <span className="font-medium">
                      {new Date(ticket.salesEnd).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="text-destructive hover:text-destructive hover:bg-destructive/10"
                  onClick={() => handleRemoveTicket(ticket.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Add New Ticket Form */}
      <div className="space-y-4 p-4 border rounded-xl border-dashed">
        <Label className="text-base font-semibold">Add New Ticket</Label>

        <div className="space-y-2">
          <Label htmlFor="ticketType">Ticket Type *</Label>
          <Input
            id="ticketType"
            placeholder="General Admission, VIP, Early Bird, etc."
            className={`w-full h-14 ${errors.ticketType ? "border-destructive" : ""}`}
            value={ticketForm.ticketType}
            onChange={(e) => handleInputChange("ticketType", e.target.value)}
          />
          {errors.ticketType && (
            <p className="text-sm text-destructive">{errors.ticketType}</p>
          )}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="price">Price (leave empty for free)</Label>
            <Input
              id="price"
              type="number"
              min="0"
              step="0.01"
              placeholder="0.00"
              className={`w-full h-14 ${errors.price ? "border-destructive" : ""}`}
              value={ticketForm.price}
              onChange={(e) => handleInputChange("price", e.target.value)}
            />
            {errors.price && (
              <p className="text-sm text-destructive">{errors.price}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="quantity">Available Quantity *</Label>
            <Input
              id="quantity"
              type="number"
              min="1"
              placeholder="100"
              className={`w-full h-14 ${errors.quantity ? "border-destructive" : ""}`}
              value={ticketForm.quantity}
              onChange={(e) => handleInputChange("quantity", e.target.value)}
            />
            {errors.quantity && (
              <p className="text-sm text-destructive">{errors.quantity}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="salesEnd">Sales End Date *</Label>
          <Input
            id="salesEnd"
            type="datetime-local"
            className={`w-full h-14 ${errors.salesEnd ? "border-destructive" : ""}`}
            value={ticketForm.salesEnd}
            onChange={(e) => handleInputChange("salesEnd", e.target.value)}
          />
          {errors.salesEnd && (
            <p className="text-sm text-destructive">{errors.salesEnd}</p>
          )}
        </div>

        <div className="text-end">
          <Button
            type="button"
            variant="outline"
            className="btn-lg-outline w-full"
            onClick={handleAddTicket}
          >
            <Plus className="size-4 mr-1" />
            Add Ticket
          </Button>
        </div>
      </div>

      {tickets.length === 0 && (
        <p className="text-sm text-muted-foreground text-center py-4">
          No tickets added yet. Add at least one ticket to continue.
        </p>
      )}
    </div>
  );
}
