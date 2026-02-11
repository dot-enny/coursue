"use client"

import { ChevronLeft, ChevronRight, Heart, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const courses = [
    {
        title: "Beginner's Guide to Becoming a Professional Front-End Developer",
        category: "FRONT END",
        categoryColor: "bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400",
        image: "/images/courses/course-1.jpg",
        mentor: {
            name: "Jean Caros",
            role: "Mentor",
            avatar: "/images/avatars/mentor-1.png",
            fallback: "JC",
        },
        isFavorite: false,
        progress: 65,
    },
    {
        title: "Optimizing User Experience with the Best UI/UX Design",
        category: "UI/UX DESIGN",
        categoryColor: "bg-orange-100 text-orange-600 dark:bg-orange-900/40 dark:text-orange-400",
        image: "/images/courses/course-2.jpg",
        mentor: {
            name: "Kierra Gouse",
            role: "Mentor",
            avatar: "/images/avatars/mentor-2.png",
            fallback: "KG",
        },
        isFavorite: true,
        progress: 45,
    },
    {
        title: "Reviving and Refreshing your Company Image",
        category: "BRANDING",
        categoryColor: "bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400",
        image: "/images/courses/course-3.jpg",
        mentor: {
            name: "Livia Bator",
            role: "Mentor",
            avatar: "/images/avatars/mentor-3.png",
            fallback: "LB",
        },
        isFavorite: false,
        progress: 25,
    },
]

export function ContinueWatching() {
    return (
        <div className="space-y-4 shadow-xs">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-foreground tracking-tighter">Continue Watching</h2>
                <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-border bg-background hover:bg-muted">
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-border bg-background hover:bg-muted">
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            <div className="relative w-full min-w-0 max-w-full rounded-3xl bg-sidebar pt-5 pb-1">
                <div className="flex w-full gap-6 overflow-x-auto pb-4 snap-x hide-scrollbar px-5">
                    {courses.map((course) => (
                        <div key={course.title} className="group min-w-[280px] sm:min-w-[320px] flex-1 snap-center shrink-0">
                            {/* Image Container */}
                            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-muted mb-4">
                                {course.image && (
                                    <Image
                                        src={course.image}
                                        alt={course.title}
                                        width={500}
                                        height={500}
                                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                )}
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

                            {/* Content */}
                            <div className="space-y-3">
                                <Badge variant="secondary" className={`${course.categoryColor} border-none font-semibold shadow-xs hover:bg-opacity-80`}>
                                    {course.category}
                                </Badge>

                                {/* Title */}
                                <h3 className="text-base font-bold leading-snug line-clamp-2 text-foreground text-pretty">
                                    {course.title}
                                </h3>

                                {/* Progress Bar */}
                                <div className="h-1.5 w-full rounded-full bg-secondary/50">
                                    <div
                                        className="h-full rounded-full bg-primary"
                                        style={{ width: `${course.progress}%` }}
                                    />
                                </div>

                                {/* Mentor */}
                                <div className="flex items-center justify-between pt-1">
                                    <div className="flex items-center gap-2">
                                        <Avatar className="h-8 w-8 border border-border">
                                            <AvatarImage src={course.mentor.avatar} />
                                            <AvatarFallback>{course.mentor.fallback}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold text-foreground">{course.mentor.name}</span>
                                            <span className="text-[10px] text-muted-foreground">{course.mentor.role}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
