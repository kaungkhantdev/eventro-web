import { TicketCard } from "./ticket-card"
import { mockTickets } from "../data/tickets"
import { Button } from "@/components/ui/button"
import { Ticket } from "lucide-react"

interface TicketsSectionProps {
  showAll?: boolean
}

export function TicketsSection({ showAll = false }: TicketsSectionProps) {
  const displayedTickets = showAll ? mockTickets : mockTickets.slice(0, 3)
  const activeCount = mockTickets.filter((t) => t.status === "active").length
  const usedCount = mockTickets.filter((t) => t.status === "used").length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          
          <div>
            <h3 className="text-lg font-semibold">My Tickets</h3>
            <p className="text-sm text-muted-foreground">
              {activeCount} active · {usedCount} used
            </p>
          </div>
        </div>
        <Button variant="outline" className="rounded-full" size="sm">
          View all tickets
        </Button>
      </div>

      {/* Tickets Grid */}
      {mockTickets.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedTickets.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="p-4 bg-muted rounded-full mb-4">
            <Ticket className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold mb-2">No tickets yet</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Your purchased tickets will appear here
          </p>
          <Button>Browse Events</Button>
        </div>
      )}
    </div>
  )
}
