"use client"

import * as React from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const mentors = [
    {
        name: "Kierra Gouse",
        role: "Mentor",
        avatar: "/images/mentor-2.jpg",
        fallback: "KG",
        isFollowed: true,
    },
    {
        name: "Jean Caros",
        role: "Mentor",
        avatar: "/images/mentor-1.jpg",
        fallback: "JC",
        isFollowed: false,
    },
    {
        name: "Livia Bator",
        role: "Mentor",
        avatar: "/images/mentor-3.jpg",
        fallback: "LB",
        isFollowed: true,
    },
]

export function YourMentor() {
    return (
        <div className="rounded-3xl border border-border bg-card p-6 shadow-xs">
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-bold text-foreground">Your Mentor</h2>
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-border bg-background hover:bg-muted">
                    <Plus className="h-4 w-4" />
                </Button>
            </div>

            <div className="space-y-4">
                {mentors.map((mentor) => (
                    <div key={mentor.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10 border border-border">
                                <AvatarImage src={mentor.avatar} />
                                <AvatarFallback>{mentor.fallback}</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <span className="text-xs font-bold text-foreground">{mentor.name}</span>
                                <span className="text-[10px] text-muted-foreground">{mentor.role}</span>
                            </div>
                        </div>
                        <Button
                            variant={mentor.isFollowed ? "ghost" : "outline"}
                            size="sm"
                            className={`h-7 rounded-full px-3 text-xs font-semibold ${mentor.isFollowed ? "text-primary hover:text-primary hover:bg-primary/10" : "border-border hover:bg-muted"}`}
                        >
                            {mentor.isFollowed ? "Followed" : "Follow"}
                        </Button>
                    </div>
                ))}
            </div>

            <Button variant="link" className="mt-2 h-auto w-full p-0 text-xs font-bold text-primary hover:no-underline">
                See All
            </Button>
        </div>
    )
}
