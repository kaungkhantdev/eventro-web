'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Music, Code, Briefcase, Palette, Utensils, Heart, Trophy, Camera, Gamepad2, Microscope, Plane, Book } from 'lucide-react'

interface Category {
  id: string
  name: string
  icon: React.ElementType
  count: number
  color: string
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Music',
    icon: Music,
    count: 2450,
    color: 'text-pink-500'
  },
  {
    id: '2',
    name: 'Technology',
    icon: Code,
    count: 1820,
    color: 'text-blue-500'
  },
  {
    id: '3',
    name: 'Business',
    icon: Briefcase,
    count: 1540,
    color: 'text-purple-500'
  },
  {
    id: '4',
    name: 'Art & Design',
    icon: Palette,
    count: 980,
    color: 'text-orange-500'
  },
  {
    id: '5',
    name: 'Food & Drink',
    icon: Utensils,
    count: 1230,
    color: 'text-green-500'
  },
  {
    id: '6',
    name: 'Health',
    icon: Heart,
    count: 876,
    color: 'text-red-500'
  },
  {
    id: '7',
    name: 'Sports',
    icon: Trophy,
    count: 1650,
    color: 'text-yellow-500'
  },
  {
    id: '8',
    name: 'Photography',
    icon: Camera,
    count: 720,
    color: 'text-violet-500'
  },
  {
    id: '9',
    name: 'Gaming',
    icon: Gamepad2,
    count: 1340,
    color: 'text-indigo-500'
  },
  {
    id: '10',
    name: 'Science',
    icon: Microscope,
    count: 560,
    color: 'text-teal-500'
  },
  {
    id: '11',
    name: 'Travel',
    icon: Plane,
    count: 940,
    color: 'text-sky-500'
  },
  {
    id: '12',
    name: 'Education',
    icon: Book,
    count: 1120,
    color: 'text-emerald-500'
  }
]

export function CategoriesSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6 font-outfit">
            Browse by{' '}
            <span className="text-gradient-primary">Category</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl">
            Explore events across diverse categories and find exactly what interests you
          </p>
        </div>

        {/* Categories Grid */}
        <Carousel className="w-full">
          <CarouselContent className="py-3">
            {categories.map((category, index) => {
                const IconComponent = category.icon
                return (
                  <CarouselItem key={index} className="md:pl-4 md:basis-1/4 lg:basis-1/6">
                    <div
                      key={category.id}
                      className="group relative bg-card hover:bg-card/80 rounded-2xl p-4 border border-border hover:border-sky-500/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                      style={{
                        animation: `slideUp 0.6s ease-out ${index * 0.05}s both`
                      }}
                    >
                      {/* Icon with Direct Color */}
                      <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className={`w-5 h-5 ${category.color}`} />
                      </div>

                      {/* Category Name */}
                      <h3 className="text-base font-semibold mb-1 group-hover:text-sky-500 transition-colors">
                        {category.name}
                      </h3>

                      {/* Event Count */}
                      <p className="text-sm text-muted-foreground">
                        {category.count.toLocaleString()} events
                      </p>
                    </div>
                  </CarouselItem>
                )
              })}
          </CarouselContent>
          <CarouselPrevious className='-left-2 lg:-left-12' />
          <CarouselNext className='-right-2 lg:-right-12' />
        </Carousel>
      </div>
    </section>
  )
}
