import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ticket } from "../types";
import { TicketType } from "./ticket-type";

interface TicketsListProps {
  tickets: Ticket[];
  onAddTicket?: () => void;
  onEditTicket?: (ticketId: string) => void;
  onViewSales?: (ticketId: string) => void;
}

export function TicketsList({
  tickets,
  onAddTicket,
  onEditTicket,
  onViewSales,
}: TicketsListProps) {
  return (
    <Card className="rounded-3xl shadow-none">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Ticket Types</CardTitle>
          <Button className="rounded-full bg-gradient-primary" onClick={onAddTicket}>
            Add Ticket Type
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid lg:grid-cols-2 gap-4">
          {tickets.map((ticket) => (
            <div key={ticket.id}>
              <TicketType
                ticket={ticket}
                onEdit={onEditTicket}
                onViewSales={onViewSales}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
