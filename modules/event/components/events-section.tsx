'use client'

import { Calendar, MapPin, Users, ArrowRight, Clock, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

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
}

const mockEvents: Event[] = [
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
    price: '$299'
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
    price: '$149'
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
    price: '$199'
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
    price: '$89'
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
    price: 'Free'
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
    price: '$45'
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
    price: '$299'
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
    price: '$149'
  },
]

export function EventsSection() {
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
          {mockEvents.map((event, index) => (
            <div
              key={event.id}
              className="group relative rounded-3xl transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-card"
            >
              {/* Event Image */}
              <div className="relative h-40">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-2xl"
                />

                {/* Price Badge */}
                <div className="absolute top-4 left-4 z-10 bg-white text-gray-900 text-sm font-semibold py-1 px-3 rounded-full shadow-md">
                  {event.price}
                </div>
              </div>

              {/* Event Details */}
              <div className="pt-3">
                {/* Date & Time */}
                <p className="text-sm text-muted-foreground mb-2">
                  {event.date} • {event.time}
                </p>

                {/* Event Title */}
                <h3 className="text-xl font-bold mb-1 font-outfit group-hover:text-sky-500 transition-colors">
                  {event.title}
                </h3>

                {/* Organizer/Category */}
                <p className="text-sm text-muted-foreground">
                  by {event.category === 'Technology' ? 'Tech Community' : event.category === 'Music' ? 'Music Promoters' : event.category === 'Business' ? 'Business Network' : event.category === 'Food' ? 'Culinary Guild' : event.category === 'Art' ? 'Art Collective' : 'Boring Club'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
