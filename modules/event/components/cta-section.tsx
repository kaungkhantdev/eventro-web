'use client'

import { Button } from '@/components/ui/button'
import { Sparkles } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 text-pink-500">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 5L22 18L20 15L18 18L20 5Z" fill="currentColor"/>
          <path d="M20 35L18 22L20 25L22 22L20 35Z" fill="currentColor"/>
          <path d="M5 20L18 22L15 20L18 18L5 20Z" fill="currentColor"/>
          <path d="M35 20L22 18L25 20L22 22L35 20Z" fill="currentColor"/>
        </svg>
      </div>

      <div className="absolute top-20 left-32 flex gap-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-3 h-3 rotate-45 bg-gradient-to-br from-blue-400 to-purple-400 opacity-60"></div>
        ))}
      </div>

      <div className="absolute top-10 right-20">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 0L17 13L15 10L13 13L15 0Z" fill="currentColor" className="text-gray-800 dark:text-gray-200"/>
          <path d="M15 30L13 17L15 20L17 17L15 30Z" fill="currentColor" className="text-gray-800 dark:text-gray-200"/>
        </svg>
      </div>

      <div className="absolute bottom-32 right-32 flex gap-2">
        {[1, 2].map((i) => (
          <div key={i} className="w-2 h-10 bg-gray-800 dark:bg-gray-200 rotate-12"></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Get Started Label */}
        <div className="mb-6">
          <span className="text-pink-500 font-bold text-xl inline-block transform -rotate-3">
            Get started!
          </span>
        </div>

        {/* Main Heading */}
        <div className="relative inline-block mb-6">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white font-outfit">
            Join Event
          </h2>
          <Sparkles className="absolute -top-3 -right-8 w-8 h-8 text-pink-500" />
        </div>

        {/* Description */}
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
          People use Meetup to meet new people, learn new things, find support, get out of their comfort zones, and pursue their passions, together.
        </p>

        {/* CTA Button */}
        <Button className="px-6 h-15 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 bg-gradient-primary text-white hover:opacity-90 shadow-lg shadow-primary/30">
          Sign up for free
        </Button>

        {/* Decorative Doodle under button */}
        <div className="mt-8 flex justify-center">
          <svg width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 15Q15 5 25 15T45 15Q50 10 55 15" stroke="currentColor" strokeWidth="2" fill="none" className="text-gray-400"/>
          </svg>
        </div>
      </div>
    </section>
  )
}
