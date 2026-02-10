"use client"

import * as React from "react"
import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
    {
        range: "1-10 Aug",
        activity: 50,
    },
    {
        range: "11-20 Aug",
        activity: 30, // Lower
    },
    {
        range: "21-30 Aug",
        activity: 65, // Higher
    },
]

export function ActivityChart() {
    return (
        <div className="rounded-3xl border border-border bg-card p-6 shadow-xs">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-bold text-foreground">Activity</h2>
                <div className="flex gap-2">
                    {/* Week/Month toggle could go here */}
                </div>
            </div>

            <div className="h-[200px] w-full">
                <ChartContainer
                    config={{
                        activity: {
                            label: "Activity",
                            color: "hsl(var(--primary))",
                        },
                    }}
                    className="h-full w-full"
                >
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data} barSize={32}>
                            <XAxis
                                dataKey="range"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10, fontWeight: 600 }}
                                dy={10}
                            />
                            <YAxis hide domain={[0, 100]} />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel />}
                            />
                            <Bar
                                dataKey="activity"
                                fill="var(--color-activity)"
                                radius={[8, 8, 8, 8]}
                                className="fill-primary"
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </div>
        </div>
    )
}
