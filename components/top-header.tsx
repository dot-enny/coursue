"use client"

import * as React from "react"
import { Search, Mail, Bell } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ThemeToggle } from "@/components/theme-toggle"

export function TopHeader() {
    return (
        <header className="flex h-16 shrink-0 items-center justify-between gap-4 border-b-0 px-6 py-4">
            <div className="flex items-center gap-4 flex-1">
                <SidebarTrigger className="md:hidden" />
                <div className="relative w-full max-w-xl">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        placeholder="Search your course...."
                        className="w-full rounded-full border-none bg-background pl-10 shadow-sm focus-visible:ring-1 focus-visible:ring-primary/20"
                    />
                </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
                <ThemeToggle />

                <Button variant="outline" size="icon" className="rounded-full border-none bg-background shadow-xs hover:bg-muted relative">
                    <Mail className="h-[1.2rem] w-[1.2rem]" />
                    <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 border-2 border-background"></span>
                </Button>

                <Button variant="outline" size="icon" className="rounded-full border-none bg-background shadow-xs hover:bg-muted relative">
                    <Bell className="h-[1.2rem] w-[1.2rem]" />
                    <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 border-2 border-background"></span>
                </Button>

                <div className="h-8 w-px bg-border mx-1"></div>

                <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border border-border">
                        <AvatarImage src="/images/user-avatar.jpg" alt="Jason Ranti" />
                        <AvatarFallback>JR</AvatarFallback>
                    </Avatar>
                    <span className="hidden text-sm font-semibold sm:inline-block">
                        Jason Ranti
                    </span>
                </div>
            </div>
        </header>
    )
}
