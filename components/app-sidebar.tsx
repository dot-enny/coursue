"use client"

import * as React from "react"
import {
    LayoutDashboard,
    Inbox,
    BookOpen,
    CalendarCheck,
    Users,
    Settings,
    LogOut,
    Sparkles,
} from "lucide-react"

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
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Mock data for friends
const friends = [
    {
        name: "Bagas Mahpie",
        role: "Friend",
        avatar: "https://sdk.bitmoji.com/render/panel/10211854-99378385-a7b3-4610-8593-68f773636cc6-d06969c3-1629-4448-9da4-76679269558c-v1.png?transparent=1&palette=1",
        fallback: "BM",
    },
    {
        name: "Sir Dandy",
        role: "Old Friend",
        avatar: "https://sdk.bitmoji.com/render/panel/20054366-99378385-ce12-401d-8472-3511116f316d-3f11340b-4663-4481-9875-5da23c3b06a4-v1.png?transparent=1&palette=1",
        fallback: "SD",
    },
    {
        name: "Jhon Tosan",
        role: "Friend",
        avatar: "https://sdk.bitmoji.com/render/panel/76973322-99378385-618d-4cb0-8113-1678583483b8-65147986-ebbf-4c75-b3e3-774e40243be4-v1.png?transparent=1&palette=1",
        fallback: "JT",
    },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" className="border-r-0 bg-sidebar" {...props}>
            <SidebarHeader className="py-6 px-6">
                <div className="flex items-center gap-2 font-bold text-xl text-foreground">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Sparkles className="h-4 w-4 fill-current" />
                    </div>
                    Coursue
                </div>
            </SidebarHeader>
            <SidebarContent className="px-4">
                <SidebarGroup>
                    <SidebarGroupLabel className="uppercase text-[10px] font-bold text-muted-foreground/70 mb-2 px-2 tracking-wider">
                        Overview
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="space-y-1">
                            <SidebarMenuItem>
                                <SidebarMenuButton isActive className="font-bold text-foreground hover:bg-transparent hover:text-foreground data-[active=true]:bg-transparent data-[active=true]:text-foreground [&>svg]:!fill-primary [&>svg]:!text-primary">
                                    <LayoutDashboard />
                                    <span>Dashboard</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton className="font-bold text-foreground/70 hover:bg-transparent hover:text-foreground [&>svg]:text-muted-foreground hover:[&>svg]:text-primary hover:[&>svg]:fill-primary">
                                    <Inbox />
                                    <span>Inbox</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton className="font-bold text-foreground/70 hover:bg-transparent hover:text-foreground [&>svg]:text-muted-foreground hover:[&>svg]:text-primary hover:[&>svg]:fill-primary">
                                    <BookOpen />
                                    <span>Lesson</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton className="font-bold text-foreground/70 hover:bg-transparent hover:text-foreground [&>svg]:text-muted-foreground hover:[&>svg]:text-primary hover:[&>svg]:fill-primary">
                                    <CalendarCheck />
                                    <span>Task</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton className="font-bold text-foreground/70 hover:bg-transparent hover:text-foreground [&>svg]:text-muted-foreground hover:[&>svg]:text-primary hover:[&>svg]:fill-primary">
                                    <Users />
                                    <span>Group</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup className="mt-4">
                    <SidebarGroupLabel className="uppercase text-[10px] font-bold text-muted-foreground/70 mb-2 px-2 tracking-wider">
                        Friends
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="space-y-4">
                            {friends.map((friend) => (
                                <SidebarMenuItem key={friend.name}>
                                    <div className="flex items-center gap-3 px-2">
                                        <Avatar className="h-9 w-9 bg-muted">
                                            <AvatarImage src={friend.avatar} alt={friend.name} />
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
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup className="mt-auto pb-6">
                    <SidebarGroupLabel className="uppercase text-[10px] font-bold text-muted-foreground/70 mb-2 px-2 tracking-wider">
                        Settings
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="space-y-1">
                            <SidebarMenuItem>
                                <SidebarMenuButton className="font-bold text-foreground/70 hover:bg-transparent hover:text-foreground [&>svg]:text-muted-foreground hover:[&>svg]:text-primary">
                                    <Settings />
                                    <span>Setting</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton className="font-bold text-destructive hover:bg-transparent hover:text-destructive hover:opacity-80">
                                    <LogOut />
                                    <span>Logout</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="p-4 md:hidden">
                {/* Trigger for mobile is handled by top header, this is for consistency if needed */}
            </SidebarFooter>
            {/* Use SidebarTrigger for desktop collapse button if Rail is not enough, but user asked for "visible by default". 
                 The standard SidebarRail is the hover area. To make a concrete button, we can use SidebarTrigger inside the sidebar or a custom one.
                 Let's try putting a SidebarTrigger at the bottom of the sidebar for clear visibility.
             */}
            <div className="hidden md:flex justify-end p-4">
                <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
            </div>
        </Sidebar>
    )
}
