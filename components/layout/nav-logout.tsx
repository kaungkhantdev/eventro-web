"use client"

import { LogOut } from 'lucide-react';

import {
  Collapsible,
} from '@/components/ui/collapsible'
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

export function NavLogout() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Authentication</SidebarGroupLabel>
      <SidebarMenu>
        <Collapsible
            asChild
            defaultOpen={false}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="logout">
                  <LogOut />
                  <span>Logout</span>
                  {/* <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" /> */}
                </SidebarMenuButton>
            </SidebarMenuItem>
          </Collapsible>
      </SidebarMenu>
    </SidebarGroup>
  )
}
