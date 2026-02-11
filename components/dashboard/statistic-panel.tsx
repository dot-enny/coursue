"use client"

import * as React from "react"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function StatisticPanel() {
    return (
        <div className="flex flex-col items-center">
            <div className="mb-6 flex w-full items-center justify-between">
                <h2 className="text-xl font-bold text-foreground">Statistic</h2>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-muted-foreground hover:bg-muted">
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </div>

            <div className="relative mb-6 flex h-48 w-48 items-center justify-center">
                {/* SVG Circular Progress */}
                <svg className="h-full w-full rotate-[-90deg]" viewBox="0 0 100 100">
                    {/* Background Ring */}
                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="8"
                        className="text-muted/30"
                    />
                    {/* Progress Ring - 32% (approx 90/282 stroke-dasharray) */}
                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray="283"
                        strokeDashoffset="193" // 283 - (283 * 0.32) = 192.44
                        className="text-primary transition-all duration-1000 ease-out"
                    />
                </svg>

                {/* Center Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative h-32 w-32 rounded-full border-4 border-background shadow-sm overflow-hidden">
                        <Avatar className="h-full w-full">
                            {/* User Avatar - using placeholder since local asset might not exist yet */}
                            <AvatarImage src="/images/user-avatar.jpg" className="object-cover" />
                            <AvatarFallback className="text-4xl bg-purple-100 text-purple-600">JR</AvatarFallback>
                        </Avatar>
                    </div>
                </div>

                {/* Floating Percentage Badge */}
                <div className="absolute bottom-2 right-2 rounded-full bg-foreground px-3 py-1 text-sm font-bold text-background shadow-lg">
                    32%
                </div>
            </div>

            <div className="text-center">
                <h3 className="mb-1 text-lg font-bold text-foreground">Good Morning Jason 🔥</h3>
                <p className="text-sm text-muted-foreground">
                    Continue your learning to achieve your target!
                </p>
            </div>
        </div>
    )
}
