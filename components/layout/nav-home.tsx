"use client"

import { type LucideIcon } from 'lucide-react';

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
import Link from 'next/link';

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
                <Link href={home.url}>
                  <home.icon />
                  <span>{home.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </Collapsible>
      </SidebarMenu>
    </SidebarGroup>
  )
}
