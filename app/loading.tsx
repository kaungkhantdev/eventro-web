export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-gradient-primary opacity-20 blur-3xl rounded-full animate-pulse-glow" />
        <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-purple-400 to-pink-400 opacity-15 blur-3xl rounded-full animate-pulse-glow-fast" />
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-gradient-to-br from-blue-400 to-cyan-400 opacity-10 blur-3xl rounded-full animate-pulse-glow-medium" />
      </div>

      {/* Loading Content */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Animated Logo/Spinner */}
        <div className="relative">
          {/* Outer spinning ring */}
          <div className="w-20 h-20 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />

          {/* Inner pulsing dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-gradient-primary animate-pulse" />
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold text-gradient-primary">
            Eventro
          </h2>
          <p className="text-sm text-muted-foreground animate-pulse">
            Loading amazing events...
          </p>
        </div>

        {/* Animated dots */}
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 rounded-full bg-primary/60 animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  )
}
