"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CalendarIcon,
  MapPinIcon,
  SearchIcon,
  LayoutGridIcon,
  ListIcon,
  MoreHorizontal,
  Tickets,
} from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

interface Event {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  location: string;
  date: string;
  time: string;
  ticketsSold: number;
  totalTickets: number;
  price: number;
  status: "active" | "draft" | "past";
}

const mockEvents: Event[] = [
  {
    id: "1",
    title: "Adventure Gear Show",
    description: "Top outdoor brands showcase the latest gear. Discounts, demos, and expert consultations.",
    category: "Outdoor & Adventure",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&q=80",
    location: "Rocky Ridge Hall, Denver, CO",
    date: "June 5, 2029",
    time: "3:00 PM",
    ticketsSold: 75,
    totalTickets: 115,
    price: 40,
    status: "active",
  },
  {
    id: "2",
    title: "Culinary Delights Festival",
    description: "Embark on a culinary adventure! Sample delicious dishes, watch chef demos, and savor diverse cuisine.",
    category: "Food & Culinary",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80",
    location: "The Plaza, San Francisco, CA",
    date: "May 25, 2029",
    time: "11:00 AM",
    ticketsSold: 72,
    totalTickets: 120,
    price: 45,
    status: "active",
  },
  {
    id: "3",
    title: "Echo Beats Festival",
    description: "Dance the night away to top DJs and live electronic music. An unforgettable festival experience",
    category: "Music",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&q=80",
    location: "Sunset Park, Los Angeles, CA",
    date: "May 20, 2029",
    time: "6:00 PM",
    ticketsSold: 39,
    totalTickets: 55,
    price: 60,
    status: "active",
  },
  {
    id: "4",
    title: "Runway Revolution 2029",
    description: "Celebrate emerging talent at Runway Revolution 2029. Discover the next generation of fashion icons.",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&q=80",
    location: "Vogue Hall, New York, NY",
    date: "May 1, 2029",
    time: "8:00 PM",
    ticketsSold: 0,
    totalTickets: 0,
    price: 30,
    status: "active",
  },
  {
    id: "5",
    title: "Artistry Unveiled Expo",
    description: "Explore diverse art and design forms. Connect with global artists and discover creative inspiration",
    category: "Art & Design",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&q=80",
    location: "Modern Art Gallery, Chicago, IL",
    date: "May 15, 2029",
    time: "10:00 AM",
    ticketsSold: 17,
    totalTickets: 20,
    price: 20,
    status: "active",
  },
  {
    id: "6",
    title: "Tech Future Expo",
    description: "Explore the latest tech innovations here. Discover trends and solutions shaping tomorrow",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80",
    location: "Silicon Valley, San Jose, CA",
    date: "Jun 1, 2029",
    time: "10:00 AM",
    ticketsSold: 47,
    totalTickets: 85,
    price: 80,
    status: "active",
  },
];

export default function EventsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");
  const [statusFilter, setStatusFilter] = useState("active");
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const activeEvents = mockEvents.filter((e) => e.status === "active");
  const draftEvents = mockEvents.filter((e) => e.status === "draft");
  const pastEvents = mockEvents.filter((e) => e.status === "past");

  const filteredEvents = mockEvents.filter((event) => {
    const matchesStatus = statusFilter === "all" || event.status === statusFilter;
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || event.category === categoryFilter;
    return matchesStatus && matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedEvents = filteredEvents.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="flex flex-1 flex-col gap-6 p-4 pt-0">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Events</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage and track all your events
          </p>
        </div>
      </div>
      {/* Header with Tabs */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <Button
            variant={statusFilter === "active" ? "default" : "outline"}
            onClick={() => setStatusFilter("active")}
            className="rounded-full"
            size={'sm'}
          >
            Active ({activeEvents.length})
          </Button>
          <Button
            variant={statusFilter === "draft" ? "default" : "outline"}
            onClick={() => setStatusFilter("draft")}
            className="rounded-full"
            size={'sm'}
          >
            Draft ({draftEvents.length})
          </Button>
          <Button
            variant={statusFilter === "past" ? "default" : "outline"}
            onClick={() => setStatusFilter("past")}
            className="rounded-full"
            size={'sm'}
          >
            Past ({pastEvents.length})
          </Button>
        </div>
        <div className="flex items-center gap-4">
          {/* Search and Filters */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="relative flex-1 min-w-[200px]">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search event, location, etc"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-full"
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[180px] rounded-full">
                <SelectValue placeholder="All Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Category</SelectItem>
                <SelectItem value="Music">Music</SelectItem>
                <SelectItem value="Technology">Technology</SelectItem>
                <SelectItem value="Food & Culinary">Food & Culinary</SelectItem>
                <SelectItem value="Fashion">Fashion</SelectItem>
                <SelectItem value="Art & Design">Art & Design</SelectItem>
                <SelectItem value="Outdoor & Adventure">Outdoor & Adventure</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="month">
              <SelectTrigger className="w-[150px] rounded-full">
                <SelectValue placeholder="This Month" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="icon"
              className="rounded-full"
              onClick={() => setViewMode("grid")}
            >
              <LayoutGridIcon className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("list")}
              className="rounded-full"
            >
              <ListIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>


      {/* Events Grid/List */}
      {viewMode === "list" ? (
        <div className="space-y-3">
          {paginatedEvents.map((event) => {
            const percentage = event.totalTickets > 0
              ? (event.ticketsSold / event.totalTickets) * 100
              : 0;

            return (
              <div
                key={event.id}
                className="bg-card rounded-2xl border p-2 flex items-center gap-4 hover:bg-muted/50 transition-colors"
              >
                {/* Event Image */}
                <div className="relative w-30 h-30 lg:h-20 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="lg:flex items-center gap-4 flex-1">
                  {/* Event Info */}
                  <div className="mb-2 lg:mb-0 flex-1 min-w-0">
                    <div className="mb-1">
                      <h3 className="font-semibold text-sm line-clamp-1">{event.title}</h3>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPinIcon className="h-3 w-3" />
                        <span className="truncate max-w-50">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="h-3 w-3" />
                        <span>{event.date}</span>
                      </div>
                    </div>
                    <div>
                      <Badge variant="secondary" className="text-xs px-2 py-0">
                        {event.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Ticket Stats */}
                  <div className="flex items-center gap-6 shrink-0">
                    <div className="text-center min-w-40">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <div className="flex items-center gap-2">
                          <Tickets className="w-4" />
                          <span className="text-muted-foreground">
                            {event.ticketsSold} / {event.totalTickets}
                          </span>
                        </div>
                        <span className="font-medium">{percentage.toFixed(0)}%</span>
                      </div>
                      <Progress value={percentage} className="h-1.5" />
                    </div>

                    <div className="text-right min-w-15">
                      <p className="text-xs text-muted-foreground">Price</p>
                      <p className="text-sm font-semibold text-primary">${event.price}</p>
                    </div>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon-sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="rounded-xl" align="end">
                        <DropdownMenuItem className="rounded-lg">
                          <Link href={'/dashboard/event/1'}>View Details</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="rounded-lg">
                          Edit Event
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive rounded-lg">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
          {paginatedEvents.map((event) => {
            const percentage = event.totalTickets > 0
              ? (event.ticketsSold / event.totalTickets) * 100
              : 0;

            return (
              <div
                key={event.id}
                className="bg-card rounded-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Event Image */}
                <div className="relative w-full h-40">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover rounded-xl"
                  />
                  <div className="absolute top-3 right-3">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="secondary" size="icon-sm" className="rounded-full bg-white/90 hover:bg-white">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="rounded-xl" align="end">
                        <DropdownMenuItem className="rounded-lg">
                          <Link href={'/dashboard/event/1'}>View Details</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="rounded-lg">
                          Edit Event
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive rounded-lg">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>

                {/* Event Content */}
                <div className="pt-2">
                  <h3 className="font-semibold text-sm mb-1 line-clamp-1">{event.title}</h3>
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPinIcon className="h-3 w-3 shrink-0" />
                      <span className="truncate">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <CalendarIcon className="h-3 w-3 shrink-0" />
                      <span>{event.date} - {event.time}</span>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs mb-2">
                    {event.category}
                  </Badge>
                  {/* Stats */}
                  <div className="pt-3 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <Tickets className="w-4" />
                        <span className="text-muted-foreground">
                          {event.ticketsSold} / {event.totalTickets}
                        </span>
                      </div>
                      <span className="font-medium">{percentage.toFixed(0)}%</span>
                    </div>
                    <Progress value={percentage} className="h-1.5" />

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs text-muted-foreground">Price</span>
                      <span className="text-sm font-semibold text-primary">${event.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}