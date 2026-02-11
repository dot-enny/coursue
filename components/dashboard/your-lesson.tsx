"use client"

import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const lessons = [
    {
        id: 1,
        date: "2/16/2004",
        category: "FRONT END",
        categoryColor: "bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400",
        description: "SEO Optimization",
        mentor: {
            name: "Jean Caros",
            avatar: "/images/avatars/mentor-1.png",
            fallback: "TB",
        },
    },
    {
        id: 2,
        date: "2/16/2004",
        category: "UI/UX DESIGN",
        categoryColor: "bg-orange-100 text-orange-600 dark:bg-orange-900/40 dark:text-orange-400",
        description: "Understanding of UI/UX Design",
        mentor: {
            name: "Kierra Gouse",
            avatar: "/images/avatars/mentor-2.png",
            fallback: "KG",
        },
    },
]

export function YourLesson() {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-foreground">Your Lesson</h2>
                <a href="#" className="text-sm font-semibold text-primary hover:underline">
                    See all
                </a>
            </div>

            <div className="rounded-3xl bg-card shadow-xs overflow-hidden">
                <TableView />
            </div>
        </div>
    )
}

const TableView = () => {
    return (
        <div className="overflow-x-auto">
            <div className="min-w-[600px]">
                {/* table header */}
                <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-border/60 text-xs font-semibold text-muted-foreground uppercase tracking-wider text-center">
                    <div className="col-span-3">Mentor</div>
                    <div className="col-span-3">Type</div>
                    <div className="col-span-4">Desc</div>
                    <div className="col-span-1 ml-10">Action</div>
                </div>
                {/* table items */}
                <div>
                    {lessons.map((lesson) => (
                        <TableRow key={lesson.id} lesson={lesson} />
                    ))}
                </div>
            </div>
        </div>
    )
};

const TableRow = ({ lesson }: { lesson: typeof lessons[0] }) => {
    return (
        <div key={lesson.id} className="grid grid-cols-12 gap-4 items-center px-6 py-3 border-b border-border/60 last:border-0 hover:bg-muted/50 transition-colors">
            {/* Mentor */}
            <div className="col-span-4 flex items-center gap-3 pl-">
                <Avatar className="h-10 w-10 border border-border">
                    <AvatarImage src={lesson.mentor.avatar} />
                    <AvatarFallback className="bg-orange-100 text-orange-600 font-bold text-xs">
                        {lesson.mentor.fallback}
                    </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <span className="text-sm font-bold text-foreground">{lesson.mentor.name}</span>
                    <span className="text-xs text-muted-foreground">{lesson.date}</span>
                </div>
            </div>

            {/* Type */}
            <div className="col-span-3 fle">
                <Badge variant="secondary" className={`${lesson.categoryColor} border-none font-semibold shadow-xs`}>
                    {lesson.category}
                </Badge>
            </div>

            {/* Desc */}
            <div className="col-span-4 text-sm font-bold text-foreground truncate">
                {lesson.description}
            </div>

            {/* Action */}
            <div className="col-span-1 flex justify-center">
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full border border-border hover:bg-muted text-primary">
                    <ArrowUpRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}