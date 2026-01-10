import { EventCard } from "@/modules/event/components/event-card";
import { mockEvents } from "@/modules/event/components/events-section";
import { TicketsSection } from "@/modules/ticket/components/tickets-section";

export default function GeneralContent() {
  return (
    <div className="w-full space-y-8">
        {/* Tickets Section */}
        <div className="mb-10">
            <TicketsSection />
        </div>

        {/* Attended Events Section */}
        <div>
            <div className="pb-4 mb-6 border-gray-100 dark:border-gray-900">
                <h2 className="text-lg font-semibold">Attended Events</h2>
                <p className="text-sm text-muted-foreground">Events you have attended</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
                {[...mockEvents].slice(0, 5).map((event, index) => (
                <EventCard
                    key={index}
                    id={event.id}
                    title={event.title}
                    description={event.description}
                    date={event.date}
                    time={event.time}
                    location={event.location}
                    image={event.image}
                    attendees={event.attendees}
                    category={event.category}
                    featured={event.featured}
                    price={event.price}
                    organizer={event.organizer}
                />
                ))}
            </div>
        </div>
    </div>
  )
}

