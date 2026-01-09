import { QrCode, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export interface Ticket {
  id: string
  eventId: string
  eventTitle: string
  eventImage: string
  ticketNumber: string
  status: "active" | "used" | "expired"
  purchaseDate: string
  eventDate: string
  eventTime: string
  eventLocation: string
  quantity: number
  ticketType: string
  price: string
  holderName?: string
  gate?: string
  seat?: string
}

interface TicketCardProps {
  ticket: Ticket
}

export function TicketCard({ ticket }: TicketCardProps) {
  const isInactive = ticket.status === "used" || ticket.status === "expired"

  return (
    <div
      className={`relative flex h-32 w-full overflow-hidden border rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${isInactive ? "opacity-60 grayscale" : ""}`}
    >
      {/* Main Ticket Section - Cyan/Teal gradient */}
      <div className="relative flex flex-1 flex-col justify-between bg-linear-to-br from-cyan-400 via-cyan-500 to-teal-600 p-3">
        {/* Background Event Image */}
        <div className="absolute inset-0">
          <Image
            src={ticket.eventImage}
            alt=""
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-linear-to-br from-cyan-500/70 via-cyan-600/80 to-teal-700/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col justify-between text-white">
          {/* Top - Event Info */}
          <div>
            <h2 className="text-sm font-bold uppercase leading-tight tracking-wide line-clamp-1">
              {ticket.eventTitle}
            </h2>
            <p className="text-[9px] opacity-70 line-clamp-1 mt-0.5">
              {ticket.eventLocation}
            </p>
          </div>

          {/* Bottom - Price & Type */}
          <div className="flex items-end justify-between">
            <span className="text-base font-bold uppercase tracking-wide">
              {ticket.ticketType}
            </span>
            <p className="text-base font-bold">{ticket.price}</p>
          </div>
        </div>
      </div>

      {/* Perforated Edge - Scalloped cutouts on both sides */}
      <div className="relative z-10 flex w-4 flex-col items-center justify-between py-1">
        {/* Left semicircles (cut into main section) */}
        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between py-1">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={`left-${i}`}
              className="h-3 w-3 rounded-full bg-background"
              style={{ marginLeft: "-6px" }}
            />
          ))}
        </div>
        {/* Right semicircles (cut into stub section) */}
        {/* <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-between py-1">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={`right-${i}`}
              className="h-3 w-3 rounded-full bg-background"
              style={{ marginRight: "-6px" }}
            />
          ))}
        </div> */}
        {/* Vertical dashed line */}
        <div className="h-full w-px border-l border-dashed border-gray-300/50" />
      </div>

      {/* Stub Section */}
      <Link
        href={`/profile/tickets/${ticket.id}`}
        className="relative flex flex-col items-start justify-between bg-gradient-to-b from-gray-50 to-white ps-0 p-3 text-gray-800 group hover:from-cyan-50 hover:to-white transition-colors"
      >
        <div className="flex flex-col items-start w-full gap-1">
          <p className="text-sm font-semibold text-gray-500">
            {ticket.ticketNumber}
          </p>
          <div className="w-full border-t border-dashed border-gray-200" />
          <div className="flex gap-2">
            <p className="text-sm text-gray-400">Date : </p>
            <p className="text-sm font-semibold text-gray-700"> {ticket.eventDate}</p>
          </div>
          <div className="flex gap-2">
            <p className="text-sm text-gray-400">Time : </p>
            <p className="text-sm font-semibold text-gray-700"> {ticket.eventTime}</p>
          </div>
        </div>
        <div className="flex items-center gap-0.5 text-sm font-semibold text-cyan-600 group-hover:text-cyan-700">
          <span>View Details</span>
          <ChevronRight className="h-3 w-3" />
        </div>
      </Link>

      {/* Status Indicator */}
      {isInactive && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="rounded-full bg-black/70 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            {ticket.status === "used" ? "Used" : "Expired"}
          </span>
        </div>
      )}
    </div>
  )
}
