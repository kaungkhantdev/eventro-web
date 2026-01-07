'use client'

import { Music, Code, Briefcase, Palette, Utensils, Heart, Trophy, Camera, Gamepad2, Microscope, Plane, Book } from 'lucide-react'

interface Category {
  id: string
  name: string
  icon: React.ElementType
  count: number
  color: string
}

const categories: Category[] = [
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
    name: 'Health & Wellness',
    icon: Heart,
    count: 876,
    color: 'text-red-500'
  },
  {
    id: '7',
    name: 'Sports & Fitness',
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
    <section className="w-full py-10 px-4 sm:px-6 lg:px-8">
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 sm:gap-4">
          {categories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div
                key={category.id}
                className="group relative bg-card hover:bg-card/80 rounded-2xl p-4 border border-border hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
                style={{
                  animation: `slideUp 0.6s ease-out ${index * 0.05}s both`
                }}
              >
                {/* Icon with Direct Color */}
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className={`w-5 h-5 ${category.color}`} />
                </div>

                {/* Category Name */}
                <h3 className="text-base font-semibold mb-1 group-hover:text-orange-500 transition-colors">
                  {category.name}
                </h3>

                {/* Event Count */}
                <p className="text-sm text-muted-foreground">
                  {category.count.toLocaleString()} events
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
