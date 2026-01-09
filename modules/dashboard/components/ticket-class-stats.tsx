interface TicketClassStatProps {
  label: string
  abbreviation: string
  current: number
  total: number
  color: string
}

function TicketClassStat({
  label,
  abbreviation,
  current,
  total,
  color,
}: TicketClassStatProps) {
  const percentage = (current / total) * 100

  return (
    <div className="flex items-center gap-3">
      <div
        className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white"
        style={{ backgroundColor: color }}
      >
        {abbreviation}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <span className="font-semibold text-sm">{label}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">Capacity :</span>
          <span className="text-xs">
            <span className="font-semibold" style={{ color }}>
              {current}
            </span>
            /{total} Tickets
          </span>
        </div>
        <div className="mt-1.5 h-1.5 w-full rounded-full bg-gray-100">
          <div
            className="h-full rounded-full transition-all"
            style={{ width: `${percentage}%`, backgroundColor: color }}
          />
        </div>
      </div>
    </div>
  )
}

const ticketClasses = [
  {
    label: "Economy Class",
    abbreviation: "EC",
    current: 128,
    total: 240,
    color: "#00BBFF",
  },
  {
    label: "Master Class",
    abbreviation: "MC",
    current: 80,
    total: 150,
    color: "#F59E0B",
  },
  {
    label: "Business Class",
    abbreviation: "BC",
    current: 64,
    total: 120,
    color: "#10B981",
  },
]

export function TicketClassStats() {
  return (
    <div className="flex flex-wrap gap-6 lg:gap-10">
      {ticketClasses.map((ticketClass) => (
        <TicketClassStat key={ticketClass.abbreviation} {...ticketClass} />
      ))}
    </div>
  )
}
