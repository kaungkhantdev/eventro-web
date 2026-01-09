"use client"

import { Home, LogOut, type LucideIcon } from 'lucide-react';

import {
  Collapsible,
} from '@/components/ui/collapsible'
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { usePathname } from 'next/navigation';

export function NavHome({
  home,
}: {
  home: {
    name: string
    url: string
    icon: LucideIcon
  }
}) {
  const pathname = usePathname();
  return (
    <SidebarGroup>
      <SidebarMenu>
        <Collapsible
            asChild
            defaultOpen={false}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <SidebarMenuButton asChild
                className="data-[is-active=true]:bg-primary data-[is-active=true]:text-white"
                data-is-active={pathname === home.url}
              >
                <a href={home.url}>
                  <home.icon />
                  <span>{home.name}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </Collapsible>
      </SidebarMenu>
    </SidebarGroup>
  )
}
