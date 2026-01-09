// import {
//   TicketClassStats,
//   OngoingEvents,
//   UpcomingEvents,
//   Notifications,
//   TicketSellingChart,
// } from "@/modules/dashboard/components"

export default function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col gap-6 p-4 pt-0">
      {/* Ticket Class Stats */}
      {/* <TicketClassStats /> */}

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        {/* Left Column - Events */}
        {/* <div className="flex flex-col gap-6">
          <OngoingEvents />
          <UpcomingEvents />
        </div> */}

        {/* Right Column - Notifications & Chart */}
        {/* <div className="flex flex-col gap-6">
          <Notifications />
          <TicketSellingChart />
        </div> */}
      </div>
    </div>
  )
}
