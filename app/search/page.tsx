'use client'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Input } from '@/components/ui/input'
import { EventCard } from '@/modules/event/components/event-card'
import { Search, Sparkle } from 'lucide-react'
import { categories } from "@/modules/event/components/categories-section"
import { mockEvents } from "@/modules/event/components/events-section"

const allCategories = {
    id: '1',
    name: 'All Event',
    icon: Sparkle,
    count: 2450,
    color: 'text-sky-500'
  };

export default function Home() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* search & filter  */}
        <div className='mx-auto md:w-96 relative mb-6'>
          <Input className='h-12 rounded-full border-primary focus-visible:border-primary focus-visible:ring-primary/50' placeholder=' Search everything you need!' />
          <div className='g-gradient-primary hover:opacity-90 transition-all cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 bg-primary rounded-full p-2'>
            <Search className='w-5 h-5 text-white' />
          </div>
        </div>
        

        {/* Section Header */}
        <div className="mb-4 md:flex items-center justify-between">
          <h2 className="mb-3 md:mb-0 text-2xl lg:text-3xl font-semibold font-outfit">
            Events near at{' '}
            <span className="text-gradient-primary">Bangkok</span>
          </h2>

          {/* filter  */}
          <div className="flex items-center gap-4">
            <Select>
              <SelectTrigger className="w-full rounded-full">
                <SelectValue placeholder="Any time" />
              </SelectTrigger>
              <SelectContent className="rounded-2xl">
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-full rounded-full">
                <SelectValue placeholder="Any type" />
              </SelectTrigger>
              <SelectContent className="rounded-2xl">
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* categories */}
        <div className="mb-8 flex items-center justify-between border-border border-b">
          <Carousel className="w-full">
            <CarouselContent className="py-3">
              {[allCategories, ...categories].map((category, index) => {
                  const IconComponent = category.icon
                  return (
                    <CarouselItem key={index} className="md:pl-1 basis-1/3 md:basis-1/6 lg:basis-1/9">
                      <div
                        key={category.id}
                        className="group relative py-1 px-3 hover:border-sky-500/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                        style={{
                          animation: `slideUp 0.6s ease-out ${index * 0.05}s both`
                        }}
                      >
                        {/* Icon with Direct Color */}
                        <div className="mb-2 group-hover:scale-105 transition-transform duration-300">
                          <IconComponent className={`mx-auto w-5 h-5 ${category.color}`} />
                        </div>

                        {/* Category Name */}
                        <h3 className="text-center text-sm font-medium mb-1 group-hover:text-sky-500 transition-colors">
                          {category.name}
                        </h3>
                      </div>
                    </CarouselItem>
                  )
                })}
            </CarouselContent>
            <CarouselPrevious className='-left-2 lg:-left-12' />
            <CarouselNext className='-right-2 lg:-right-12' />
          </Carousel>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {[...mockEvents, ...mockEvents].map((event, index) => (
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
    </section>
  );
}
