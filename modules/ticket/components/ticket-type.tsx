import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Ticket } from "../types";
import { TicketCard } from "./ticket-card";
import { mockTickets } from "../data/tickets";

interface TicketTypeProps {
  ticket: Ticket;
  onEdit?: (ticketId: string) => void;
  onViewSales?: (ticketId: string) => void;
}

export function TicketType({ ticket, onEdit, onViewSales }: TicketTypeProps) {
  const soldPercentage = (ticket.sold / ticket.quantity) * 100;

  return (
    <div className="border rounded-2xl p-4 hover:border-primary/50 transition-colors">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex-1">
          <TicketCard ticket={mockTickets[1]}/>
          <div className="flex items-center justify-between gap-2 my-2">
            <div>
              <h3 className="font-semibold text-lg">{ticket.type}</h3>
              <Badge
                variant={ticket.status === "Sold Out" ? "secondary" : "default"}
                className="rounded-full"
              >
                {ticket.status}
              </Badge>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full"
                onClick={() => onEdit?.(ticket.id)}
              >
                Edit
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full"
                onClick={() => onViewSales?.(ticket.id)}
              >
                View Sales
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span>
              Price: <strong className="text-foreground">${ticket.price}</strong>
            </span>
            <span>
              Sold:{" "}
              <strong className="text-foreground">
                {ticket.sold} / {ticket.quantity}
              </strong>
            </span>
            <span>
              Sales End:{" "}
              <strong className="text-foreground">
                {new Date(ticket.salesEndDate).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </strong>
            </span>
          </div>
          <Progress value={soldPercentage} className="mt-3" />
        </div>
      </div>
    </div>
  );
}
