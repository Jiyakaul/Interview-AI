"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, LayoutDashboard, Settings, Plus } from "lucide-react"
import { useState } from "react"

import { NewSessionDialog } from "@/components/new-session-dialog"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

export function Navigation() {
  const pathname = usePathname()
  const [dialogOpen, setDialogOpen] = useState(false)

  const routes = [
    {
      href: "/",
      label: "Home",
      icon: Home,
      active: pathname === "/",
    },
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
      active: pathname === "/dashboard",
    },
    {
      href: "/settings",
      label: "Settings",
      icon: Settings,
      active: pathname === "/settings",
    },
  ]

  return (
    <Sidebar>
      <SidebarHeader>
        <h2 className="text-lg font-semibold px-4">Interview.ai</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {routes.map((route) => (
            <SidebarMenuItem key={route.href}>
              <SidebarMenuButton
                asChild
                isActive={route.active}
                tooltip={route.label}
              >
                <Link href={route.href}>
                  <route.icon className="h-4 w-4" />
                  <span>{route.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="New Interview"
              onClick={() => setDialogOpen(true)}
            >
              <Plus className="h-4 w-4" />
              <span>New Interview</span>
            </SidebarMenuButton>
            <NewSessionDialog open={dialogOpen} onOpenChange={setDialogOpen} />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}


