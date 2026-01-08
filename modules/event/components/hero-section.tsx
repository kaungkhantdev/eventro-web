'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Sparkles } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-16">
      {/* Animated Background */}
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-gradient-primary opacity-20 blur-3xl rounded-full animate-pulse-glow" />
      <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-purple-400 to-pink-400 opacity-15 blur-3xl rounded-full animate-pulse-glow-fast" />
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-gradient-to-br from-blue-400 to-cyan-400 opacity-10 blur-3xl rounded-full animate-pulse-glow-medium" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-primary/10 border border-sky-500/20 mb-8 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-sky-500" />
                <span className="text-sm font-medium text-sky-600 dark:text-sky-400">
                  #1 Event Platform in 2026
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h1
              className="text-5xl lg:text-6xl font-bold mb-6 font-outfit leading-tight text-gradient-primary"
            >
              Discover & Book
              <br />
              Amazing Events
            </h1>

            {/* Subheading */}
            <p
              className="text-lg text-muted-foreground max-w-3xl mb-10 leading-relaxed"
              style={{ animation: 'slideUp 0.6s ease-out 0.2s both' }}
            >
              From tech conferences to music festivals, find the perfect event that matches your passion.
              Connect with like-minded people and create unforgettable memories.
            </p>

            <div className=' mx-auto md:w-96 relative'>
              <Input className='h-12 rounded-full border-primary focus-visible:border-primary focus-visible:ring-primary/50' placeholder=' Search everything you need!' />
              <div className='cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 bg-primary rounded-full p-2'>
                <Search className='w-5 h-5 text-white' />
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}
