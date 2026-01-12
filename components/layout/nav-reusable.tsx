"use client"

import { type LucideIcon } from 'lucide-react';

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
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function NavReusable({
  title,
  item,
}: {
  title: string,
  item: {
    name: string
    url: string
    icon: LucideIcon
  }
}) {
  const pathname = usePathname();
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{title}</SidebarGroupLabel>
      <SidebarMenu>
        <Collapsible
            asChild
            defaultOpen={false}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <SidebarMenuButton asChild
                className="data-[is-active=true]:bg-primary data-[is-active=true]:text-white"
                data-is-active={pathname === item.url}
              >
                <Link href={item.url}>
                  <item.icon />
                  <span>{item.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </Collapsible>
      </SidebarMenu>
    </SidebarGroup>
  )
}
