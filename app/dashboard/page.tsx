import {
  SectionCards,
  OngoingEvents,
  UpcomingEvents,
  Notifications,
  TicketSellingChart,
  QuickActions,
  EventPerformanceTable,
} from "@/features/dashboard/components"

export default function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col gap-6 p-4 pt-0">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Welcome back, Sophie!</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Here&apos;s what&apos;s happening with your events today
          </p>
        </div>
        <QuickActions />
      </div>

      {/* KPI Cards */}
      <SectionCards />

      {/* Main Content Grid */}
      <div className="">
        {/* Left Column - Events */}
        <div className="flex flex-col gap-6">
          <OngoingEvents />
          <UpcomingEvents />
        </div>
      </div>
    </div>
  )
}
