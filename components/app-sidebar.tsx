"use client";

import * as React from "react";
import {
  LayoutDashboard,
  Inbox,
  BookOpen,
  CalendarCheck,
  Users,
  Settings,
  LogOut,
  Sparkles,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Mock data for friends
const friends = [
  {
    name: "Bagas Mahpie",
    role: "Friend",
    avatar:
      "/images/avatars/friend-1.png",
    fallback: "BM",
  },
  {
    name: "Sir Dandy",
    role: "Old Friend",
    avatar:
      "/images/avatars/friend-2.png",
    fallback: "SD",
  },
  {
    name: "Jhon Tosan",
    role: "Friend",
    avatar:
      "/images/avatars/friend-3.png",
    fallback: "JT",
  },
];

type Friend = (typeof friends)[0];

// Sidebar sections config (data-driven)
const sidebarSections = [
  {
    key: "overview",
    label: "Overview",
    itemSpacing: "space-y-1",
    items: [
      {
        key: "dashboard",
        label: "Dashboard",
        icon: LayoutDashboard,
        isActive: true,
      },
      { key: "inbox", label: "Inbox", icon: Inbox },
      { key: "lesson", label: "Lesson", icon: BookOpen },
      { key: "task", label: "Task", icon: CalendarCheck },
      { key: "group", label: "Group", icon: Users },
    ],
  },
  {
    key: "friends",
    label: "Friends",
    itemSpacing: "space-y-4",
    variant: "friends",
    items: friends,
  },
  {
    key: "settings",
    label: "Settings",
    itemSpacing: "space-y-1",
    items: [
      { key: "setting", label: "Setting", icon: Settings },
      { key: "logout", label: "Logout", icon: LogOut, destructive: true },
    ],
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="icon"
      className="border-r-transparent bg-sidebar"
      {...props}
    >
      <SidebarHeader className="py-6 px-6 group-data-[collapsible=icon]:p-2 group-data-[collapsible=icon]:justify-center">
        <div className="flex items-center gap-2 font-bold text-xl text-foreground group-data-[collapsible=icon]:justify-center">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Sparkles className="h-4 w-4 fill-current" />
          </div>
          <span className="group-data-[collapsible=icon]:hidden">Coursue</span>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-4 group-data-[collapsible=icon]:px-0">
        {sidebarSections.map((section, idx) => {
          const groupClassName =
            section.key === "settings"
              ? "mt-auto pb-6"
              : idx > 0
                ? "mt-4"
                : undefined;

          const visibilityClass = section.variant === "friends" ? "group-data-[collapsible=icon]:hidden" : "";

          return (
            <SidebarGroup key={section.key} className={`${groupClassName} ${visibilityClass}`}>
              <SidebarGroupLabel className="uppercase text-[10px] font-bold text-muted-foreground/70 mb-1 px-2 tracking-wider group-data-[collapsible=icon]:hidden">
                {section.label}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu className={section.itemSpacing}>
                  {section.variant === "friends"
                    ? section.items.map((friend: Friend) => (
                      <SidebarMenuItem
                        key={friend.name}
                        className="cursor-pointer"
                      >
                        <div className="flex items-center gap-3 px-2">
                          <Avatar className="h-9 w-9 bg-muted">
                            <AvatarImage
                              src={friend.avatar}
                              alt={friend.name}
                            />
                            <AvatarFallback>{friend.fallback}</AvatarFallback>
                          </Avatar>
                          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
                            <span className="text-sm font-bold text-foreground">
                              {friend.name}
                            </span>
                            <span className="text-xs font-medium text-muted-foreground">
                              {friend.role}
                            </span>
                          </div>
                        </div>
                      </SidebarMenuItem>
                    ))
                    : section.items.map((item: any) => {
                      const Icon = item.icon;
                      const baseBtnClasses =
                        "font-bold hover:bg-transparent text-foreground [&>svg]:text-muted-foreground hover:[&>svg]:text-primary hover:[&>svg]:fill-primary cursor-pointer";
                      const activeBtnClasses =
                        "font-extrabold hover:bg-transparent text-foreground data-[active=true]:bg-transparent [&>svg]:fill-primary! [&>svg]:text-primary! cursor-pointer";
                      const destructiveBtnClasses =
                        "font-bold text-destructive hover:bg-transparent hover:text-destructive hover:opacity-80 cursor-pointer";

                      const btnClass = item.destructive
                        ? destructiveBtnClasses
                        : item.isActive
                          ? activeBtnClasses
                          : baseBtnClasses;

                      return (
                        <SidebarMenuItem key={item.key}>
                          <SidebarMenuButton
                            {...(item.isActive ? { isActive: true } : {})}
                            className={btnClass}
                            tooltip={{
                              children: item.label,
                              hidden: false,
                            }}
                          >
                            {Icon ? <Icon /> : null}
                            <span>{item.label}</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      );
                    })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          );
        })}
      </SidebarContent>

      <div className="hidden max-sm:hidden md:flex justify-end px-4 pb-4 lg:hidden group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0">
        <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
      </div>
    </Sidebar>
  );
}
