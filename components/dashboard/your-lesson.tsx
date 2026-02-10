"use client"

import * as React from "react"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const lessons = [
    {
        id: 1,
        courseName: "Promotional Design",
        courseIcon: "https://sdk.bitmoji.com/render/panel/10211854-99378385-a7b3-4610-8593-68f773636cc6-d06969c3-1629-4448-9da4-76679269558c-v1.png", // Just a placeholder for now
        totalLessons: 30,
        completedLessons: 24,
        mentor: {
            name: "Tria Baone",
            avatar: "/images/mentor-4.jpg",
            fallback: "TB",
        },
        status: "in-progress",
    },
    {
        id: 2,
        courseName: "Social Media Boost",
        courseIcon: "https://sdk.bitmoji.com/render/panel/76973322-99378385-618d-4cb0-8113-1678583483b8-65147986-ebbf-4c75-b3e3-774e40243be4-v1.png",
        totalLessons: 50,
        completedLessons: 48,
        mentor: {
            name: "Kierra Gouse",
            avatar: "/images/mentor-2.jpg",
            fallback: "KG",
        },
        status: "in-progress",
    },
]

export function YourLesson() {
    return (
        <div className="rounded-3xl border border-border bg-card p-6 shadow-xs">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-bold text-foreground">Your Lesson</h2>
                <a href="#" className="text-sm font-semibold text-primary hover:underline">
                    See all
                </a>
            </div>

            <div className="space-y-4">
                {lessons.map((lesson) => (
                    <div
                        key={lesson.id}
                        className="flex items-center justify-between gap-4 rounded-2xl border border-transparent bg-background p-4 shadow-xs transition-all hover:border-border hover:shadow-md"
                    >
                        {/* Left: Mentor and Course Info */}
                        <div className="flex items-center gap-4 flex-1">
                            <div className="relative h-12 w-12 shrink-0">
                                {/* Combined Avatar UI - simplified for now */}
                                <Avatar className="h-12 w-12 border-2 border-background shadow-xs">
                                    <AvatarImage src={lesson.mentor.avatar} />
                                    <AvatarFallback>{lesson.mentor.fallback}</AvatarFallback>
                                </Avatar>
                                <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white ring-2 ring-background">
                                    {/* Icon or Status */}
                                    <Play className="h-2 w-2 fill-current" />
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <h3 className="text-sm font-bold text-foreground">{lesson.courseName}</h3>
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                    <span className="font-semibold text-foreground/80">{lesson.mentor.name}</span>
                                    <span>•</span>
                                    <span>{lesson.completedLessons} / {lesson.totalLessons} Lessons</span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Action */}
                        <Button variant="outline" size="sm" className="hidden rounded-full border-border bg-transparent font-semibold shadow-xs hover:bg-muted sm:flex">
                            View
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    )
}
