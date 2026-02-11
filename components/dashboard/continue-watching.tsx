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
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
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
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
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
        image: "https://images.unsplash.com/photo-1626785774573-4b7993125641?q=80&w=2070&auto=format&fit=crop",
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

            <div className="relative w-full min-w-0 max-w-full">
                <div className="flex w-full gap-6 overflow-x-auto pb-4 snap-x hide-scrollbar">
                    {courses.map((course) => (
                        <Card key={course.title} className="group min-w-[280px] sm:min-w-[320px] flex-1 overflow-hidden rounded-2xl border-none shadow-sm transition-all hover:shadow-md snap-center bg-card shrink-0">
                            <div className="relative aspect-video w-full bg-muted">
                                {course.image && (
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                )}
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
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none" />
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
                                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-muted-foreground hover:bg-muted hover:text-foreground">
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
