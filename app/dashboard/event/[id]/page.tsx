"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  EventHeader,
  EventStatsCards,
  EventDetails,
  QuickStatsSidebar,
  AttendeesTable,
  AnalyticsDashboard,
} from "@/modules/event/components";
import { TicketsList } from "@/modules/ticket/components/tickets-list";

// Mock event data - replace with actual API call
const mockEvent = {
  id: "1",
  title: "Tech Innovation Summit 2025",
  description:
    "Join us for the most anticipated tech event of the year! Connect with industry leaders, explore cutting-edge innovations, and network with fellow tech enthusiasts. This summit features keynote speakers from top tech companies, hands-on workshops, and exciting product launches.",
  image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  organizer: "Tech Events Inc.",
  category: "Technology",
  startDate: "2025-03-15",
  startTime: "09:00 AM",
  endDate: "2025-03-17",
  endTime: "06:00 PM",
  location: "San Francisco Convention Center",
  address: "747 Howard St, San Francisco, CA 94103",
  status: "Published",
  totalCapacity: 1000,
  ticketsSold: 734,
  revenue: 147680,
  views: 12543,
};

const mockTickets = [
  {
    id: "1",
    type: "Early Bird",
    price: 150,
    quantity: 300,
    sold: 300,
    status: "Sold Out",
    salesEndDate: "2025-02-01",
  },
  {
    id: "2",
    type: "General Admission",
    price: 200,
    quantity: 500,
    sold: 384,
    status: "On Sale",
    salesEndDate: "2025-03-10",
  },
  {
    id: "3",
    type: "VIP Access",
    price: 350,
    quantity: 200,
    sold: 50,
    status: "On Sale",
    salesEndDate: "2025-03-10",
  },
];

const mockAttendees = [
  { name: "John Doe", email: "john@example.com", ticketType: "VIP Access", purchaseDate: "Jan 15, 2025" },
  { name: "Jane Smith", email: "jane@example.com", ticketType: "General Admission", purchaseDate: "Jan 18, 2025" },
  { name: "Mike Johnson", email: "mike@example.com", ticketType: "General Admission", purchaseDate: "Jan 20, 2025" },
  { name: "Sarah Williams", email: "sarah@example.com", ticketType: "VIP Access", purchaseDate: "Jan 22, 2025" },
];

export default function EventDetailPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex flex-1 flex-col gap-6 p-4 pt-0">
      <EventHeader event={mockEvent} />

      <EventStatsCards event={mockEvent} />

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-4 lg:w-[600px] rounded-full">
          <TabsTrigger className="rounded-full" value="overview">
            Overview
          </TabsTrigger>
          <TabsTrigger className="rounded-full" value="tickets">
            Tickets
          </TabsTrigger>
          <TabsTrigger className="rounded-full" value="attendees">
            Attendees
          </TabsTrigger>
          <TabsTrigger className="rounded-full" value="analytics">
            Analytics
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <EventDetails event={mockEvent} />
            </div>
            <QuickStatsSidebar event={mockEvent} />
          </div>
        </TabsContent>

        <TabsContent value="tickets" className="space-y-4">
          <TicketsList tickets={mockTickets} />
        </TabsContent>

        <TabsContent value="attendees" className="space-y-4">
          <AttendeesTable attendees={mockAttendees} totalCount={mockEvent.ticketsSold} />
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <AnalyticsDashboard />
        </TabsContent>
      </Tabs>
    </div>
  );
}
