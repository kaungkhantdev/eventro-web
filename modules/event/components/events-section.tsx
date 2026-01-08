'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { EventCard } from './event-card'

interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  image: string
  attendees: number
  category: string
  featured: boolean
  price: string
  organizer: string
}

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Tech Conference 2026',
    description: 'Join the biggest tech conference of the year featuring industry leaders and innovative workshops.',
    date: 'Jan 25, 2026',
    time: '9:00 AM',
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    attendees: 1250,
    category: 'Technology',
    featured: true,
    price: '$299',
    organizer: 'Tech Community'
  },
  {
    id: '2',
    title: 'Summer Music Festival',
    description: 'Experience live performances from top artists in an unforgettable outdoor setting.',
    date: 'Feb 15, 2026',
    time: '2:00 PM',
    location: 'Los Angeles, CA',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80',
    attendees: 5000,
    category: 'Music',
    featured: true,
    price: '$149',
    organizer: 'Music Promoters'
  },
  {
    id: '3',
    title: 'Digital Marketing Summit',
    description: 'Learn cutting-edge strategies from marketing experts and network with professionals.',
    date: 'Mar 10, 2026',
    time: '10:00 AM',
    location: 'New York, NY',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80',
    attendees: 800,
    category: 'Business',
    featured: false,
    price: '$199',
    organizer: 'Business Network'
  },
  {
    id: '4',
    title: 'Food & Wine Experience',
    description: 'Taste exquisite dishes and wines from world-renowned chefs and sommeliers.',
    date: 'Apr 5, 2026',
    time: '6:00 PM',
    location: 'Chicago, IL',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
    attendees: 350,
    category: 'Food',
    featured: false,
    price: '$89',
    organizer: 'Culinary Guild'
  },
  {
    id: '5',
    title: 'Startup Pitch Night',
    description: 'Watch promising startups pitch to investors and compete for funding opportunities.',
    date: 'May 20, 2026',
    time: '7:00 PM',
    location: 'Austin, TX',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80',
    attendees: 500,
    category: 'Business',
    featured: true,
    price: 'Free',
    organizer: 'Business Network'
  },
  {
    id: '6',
    title: 'Art & Design Expo',
    description: 'Explore contemporary art exhibitions and connect with creative minds from around the world.',
    date: 'Jun 12, 2026',
    time: '11:00 AM',
    location: 'Miami, FL',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
    attendees: 1200,
    category: 'Art',
    featured: false,
    price: '$45',
    organizer: 'Art Collective'
  },
  {
    id: '7',
    title: 'Tech Conference 2026',
    description: 'Join the biggest tech conference of the year featuring industry leaders and innovative workshops.',
    date: 'Jan 25, 2026',
    time: '9:00 AM',
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    attendees: 1250,
    category: 'Technology',
    featured: true,
    price: '$299',
    organizer: 'Tech Community'
  },
  {
    id: '8',
    title: 'Summer Music Festival',
    description: 'Experience live performances from top artists in an unforgettable outdoor setting.',
    date: 'Feb 15, 2026',
    time: '2:00 PM',
    location: 'Los Angeles, CA',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80',
    attendees: 5000,
    category: 'Music',
    featured: true,
    price: '$149',
    organizer: 'Music Promoters'
  },
]

export function EventsSection() {
  const router = useRouter()

  const handleEventClick = (id: string) => {
    router.push(`/event/${id}`)
  }

  return (
    <section className="w-full pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 flex items-center justify-between">
          <h2 className="text-2xl lg:text-3xl font-semibold font-outfit">
            Events near at{' '}
            <span className="text-gradient-primary">Bangkok</span>
          </h2>
          <Button variant={'link'}>Sell all events</Button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {mockEvents.map((event) => (
            <EventCard
              key={event.id}
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
              onClick={handleEventClick}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
