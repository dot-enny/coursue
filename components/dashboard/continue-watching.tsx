"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight, Heart, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const courses = [
    {
        title: "Mastering Front-End with ReactJS",
        category: "FRONT END",
        categoryColor: "bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400",
        image: "/images/course-1.jpg",
        mentor: {
            name: "Jean Caros",
            role: "Mentor",
            avatar: "/images/mentor-1.jpg",
            fallback: "JC",
        },
        isFavorite: false,
    },
    {
        title: "Principles of UI/UX Design 2023",
        category: "UI/UX DESIGN",
        categoryColor: "bg-orange-100 text-orange-600 dark:bg-orange-900/40 dark:text-orange-400",
        image: "/images/course-2.jpg",
        mentor: {
            name: "Kierra Gouse",
            role: "Mentor",
            avatar: "/images/mentor-2.jpg",
            fallback: "KG",
        },
        isFavorite: true,
    },
    {
        title: "Branding Design for Beginners",
        category: "BRANDING",
        categoryColor: "bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400",
        image: "/images/course-3.jpg",
        mentor: {
            name: "Livia Bator",
            role: "Mentor",
            avatar: "/images/mentor-3.jpg",
            fallback: "LB",
        },
        isFavorite: false,
    },
]

export function ContinueWatching() {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-foreground">Continue Watching</h2>
                <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-border bg-background hover:bg-muted">
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-border bg-background hover:bg-muted">
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {courses.map((course) => (
                    <Card key={course.title} className="group overflow-hidden rounded-2xl border-none shadow-sm transition-all hover:shadow-md">
                        <div className="relative aspect-video w-full bg-muted">
                            <div className="absolute top-3 left-3 z-10">
                                <Badge variant="secondary" className={`${course.categoryColor} border-none font-semibold shadow-xs`}>
                                    {course.category}
                                </Badge>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute top-2 right-2 z-10 h-8 w-8 rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/40"
                            >
                                <Heart className={`h-4 w-4 ${course.isFavorite ? "fill-red-500 text-red-500" : "fill-none"}`} />
                            </Button>
                            {/* Placeholder for image - will be replaced by real image */}
                            <div className="h-full w-full bg-linear-to-br from-muted to-muted/50 transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <CardContent className="p-4">
                            <h3 className="mb-4 text-base font-bold leading-snug line-clamp-2">
                                {course.title}
                            </h3>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Avatar className="h-8 w-8 border border-border">
                                        <AvatarImage src={course.mentor.avatar} />
                                        <AvatarFallback>{course.mentor.fallback}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold text-foreground">{course.mentor.name}</span>
                                        <span className="text-[10px] bg-clip-text text-muted-foreground">{course.mentor.role}</span>
                                    </div>
                                </div>
                                {/* View Course Button / Icon can go here */}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
