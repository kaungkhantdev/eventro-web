import Image from 'next/image'
import Link from 'next/link'

interface EventCardProps {
  id: string
  title: string
  description?: string
  date: string
  time: string
  location?: string
  image: string
  attendees?: number
  category: string
  featured?: boolean
  price: string
  organizer: string
  onClick?: (id: string) => void
}

export function EventCard({
  id,
  title,
  date,
  time,
  image,
  price,
  organizer,
}: EventCardProps) {
  return (
    <Link
      className="group relative rounded-3xl transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-card"
      href={`/event/${id}`}
    >
      {/* Event Image */}
      <div className="relative h-40">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-2xl"
        />

        {/* Price Badge */}
        <div className="absolute top-4 left-4 z-10 bg-white text-gray-900 text-sm font-semibold py-1 px-3 rounded-full shadow-md">
          {price}
        </div>
      </div>

      {/* Event Details */}
      <div className="pt-3">
        {/* Date & Time */}
        <p className="text-sm text-muted-foreground mb-2">
          {date} • {time}
        </p>

        {/* Event Title */}
        <h3 className="text-xl font-bold mb-1 font-outfit group-hover:text-sky-500 transition-colors">
          {title}
        </h3>

        {/* Organizer */}
        <p className="text-sm text-muted-foreground">by {organizer}</p>
      </div>
    </Link>
  )
}
