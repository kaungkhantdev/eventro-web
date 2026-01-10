"use client"

import * as React from "react"
import {
  Bolt,
  BookOpen,
  Bot,
  CalendarFold,
  ChartPie,
  Frame,
  GalleryVerticalEnd,
  Gauge,
  Home,
  Landmark,
  LogOut,
  Map,
  Megaphone,
  PieChart,
  Settings2,
  SquareTerminal,
  Tickets,
} from "lucide-react"

import { NavMain } from '@/components/layout/nav-main'
import { NavProjects } from '@/components/layout/nav-projects'
import { TeamSwitcher } from '@/components/layout/team-switcher'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'
import { NavReusable } from "./nav-reusable"
import { NavHome } from "./nav-home"

// This is sample data.
const data = {
  home: {
    name: "Home",
    url: "/dashboard",
    icon: Gauge,
  },
  logout: {
    name: "Logout",
    url: "#",
    icon: LogOut,
  },
  setting: {
    name: "Setting",
    url: "#",
    icon: Bolt,
  },
  teams: [
    {
      name: "Eventro",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "Event",
      url: "#",
      icon: CalendarFold,
      isActive: true,
      items: [
        {
          title: "Create New Event",
          url: "/dashboard/event/create",
        },
        {
          title: "List all events",
          url: "/dashboard/event",
        }
      ],
    },
    {
      title: "Tickets",
      url: "#",
      icon: Tickets,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Marking",
      url: "#",
      icon: Megaphone,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
  ],
  analysis: [
    {
      title: "Report",
      url: "#",
      icon: ChartPie,
      items: [
        {
          title: "Create New Event",
          url: "#",
        },
        {
          title: "List all events",
          url: "#",
        }
      ],
    },
  ],
  finance: [
    {
      title: "Bank & Credit",
      url: "#",
      icon: Landmark,
      items: [
        {
          title: "Create New Event",
          url: "#",
        },
        {
          title: "List all events",
          url: "#",
        }
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavHome home={data.home} />
        <NavMain title="Platform" items={data.navMain} />
        <NavMain title="Analysis" items={data.analysis} />
        <NavMain title="Finance" items={data.finance} />
        <NavReusable title="Setting" item={data.setting} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavReusable title="Authentication" item={data.logout} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
