"use client"

import { Search, Mail, Bell } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ThemeToggle } from "@/components/theme-toggle"

export function TopHeader() {
    return (
        <header className="flex h-16 shrink-0 items-center justify-between gap-4 border-b-0 px-6 py-10 w-full">
            <div className="flex items-center gap-4 flex-1">
                <SidebarTrigger className="md:hidden" />
                <div className="relative w-full max-w-[calc(100%-1.8rem)]">
                    <Search className="absolute left-3 top-1/2 size-3.5 stroke-[4px] -translate-y-1/2 text-muted-foreground" />
                    <Input
                        placeholder="Search your course...."
                        className="w-full rounded-full bg-white pl-10 focus-visible:ring-1 focus-visible:ring-primary/20 py-5 shadow-none"
                    />
                </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
                <ThemeToggle />

                <Button variant="outline" size="icon" className="rounded-full bg-background shadow-xs hover:bg-muted relative cursor-pointer">
                    <Mail className="h-[1.2rem] w-[1.2rem] stroke-foreground" />
                    <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 border-2 border-background"></span>
                </Button>

                <Button variant="outline" size="icon" className="rounded-full bg-background shadow-xs hover:bg-muted relative cursor-pointer">
                    <Bell className="h-[1.2rem] w-[1.2rem] fill-black" />
                    <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 border-2 border-background"></span>
                </Button>

                <div className="h-9 w-px bg-gray-400 mx-1"></div>

                <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border border-border">
                        <AvatarImage src="/images/avatars/user-avatar.png" alt="Jason Ranti" className="object-cover" />
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
