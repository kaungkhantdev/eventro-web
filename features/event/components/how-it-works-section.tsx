'use client'

import { Compass, Calendar, Ticket, Sparkle } from 'lucide-react'

interface Step {
  id: string
  number: string
  title: string
  description: string
  icon: React.ReactNode
  gradient: string
}

const steps: Step[] = [
  {
    id: '1',
    number: '01',
    title: 'Discover Events',
    description: 'Browse through thousands of events across various categories and find the perfect match for your interests.',
    icon: <Compass className="w-8 h-8 text-orange-500" />,
    gradient: 'from-orange-500 to-amber-500'
  },
  {
    id: '2',
    number: '02',
    title: 'Choose & Book',
    description: 'Select your event, pick your preferred date and time, and secure your spot with our seamless booking system.',
    icon: <Calendar className="w-8 h-8 text-pink-500" />,
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    id: '3',
    number: '03',
    title: 'Get Your Ticket',
    description: 'Receive instant confirmation and your digital ticket via email. Access everything from your dashboard.',
    icon: <Ticket className="w-8 h-8 text-purple-500" />,
    gradient: 'from-purple-500 to-indigo-500'
  },
  {
    id: '4',
    number: '04',
    title: 'Enjoy the Experience',
    description: 'Show up, have fun, and create amazing memories. Share your experience and connect with other attendees.',
    icon: <Sparkle className="w-8 h-8 text-blue-500" />,
    gradient: 'from-blue-500 to-cyan-500'
  }
]

export function HowItWorksSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-primary opacity-10 blur-3xl rounded-full animate-pulse-glow" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6 font-outfit">
            How{' '}
            <span className="text-gradient-primary">Eventro</span>
            {' '}Works
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Getting started is simple. Follow these four easy steps to discover and attend amazing events.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="relative group"
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Connection Line (hidden on mobile, shown on lg+) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[calc(50%+3rem)] w-[calc(100%-3rem)] h-0.5 bg-gradient-to-r from-sky-500/50 to-transparent" />
              )}

              {/* Card */}
              <div className="relative bg-card hover:bg-card/80 rounded-3xl p-4 border border-border hover:border-sky-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-sm shadow-lg font-space-mono">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-3 font-outfit group-hover:text-sky-500 transition-colors">
                  {step.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Decorative gradient overlay */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
