'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, Search, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-gradient-primary opacity-20 blur-3xl rounded-full animate-pulse-glow" />
        <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-purple-400 to-pink-400 opacity-15 blur-3xl rounded-full animate-pulse-glow-fast" />
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-gradient-to-br from-blue-400 to-cyan-400 opacity-10 blur-3xl rounded-full animate-pulse-glow-medium" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gradient-primary mb-4 animate-pulse">
            404
          </h1>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <div className="h-px w-12 bg-gradient-primary" />
            <span className="text-sm uppercase tracking-wider">Page Not Found</span>
            <div className="h-px w-12 bg-gradient-primary" />
          </div>
        </div>

        {/* Message */}
        <div className="space-y-4 mb-10">
          <h2 className="text-3xl font-bold text-foreground">
            Oops! This Event Doesn&apos;t Exist
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
            The page you&apos;re looking for seems to have wandered off.
            Let&apos;s get you back to discovering amazing events!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <Button className="bg-gradient-primary text-white hover:opacity-90 transition-opacity rounded-full px-8 h-12 gap-2 shadow-lg shadow-primary/30">
              <Home className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>

          <Link href="/search">
            <Button variant="outline" className="border-primary/50 hover:bg-primary/10 rounded-full px-8 h-12 gap-2">
              <Search className="w-4 h-4" />
              Search Events
            </Button>
          </Link>
        </div>

        {/* Additional Help */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Go back to previous page
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-10 -left-10 w-20 h-20 border-2 border-primary/20 rounded-full animate-pulse" />
        <div className="absolute -bottom-10 -right-10 w-32 h-32 border-2 border-primary/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  )
}
