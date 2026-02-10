"use client"


import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroBanner() {
    return (
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#6656F2] to-[#5a4bd6] px-8 py-10 text-white sm:px-12 md:py-16">
            <div className="relative z-10 max-w-2xl">
                <div className="mb-4 inline-flex items-center rounded-lg bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                    ONLINE COURSE
                </div>
                <h1 className="mb-8 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                    Sharpen Your Skills with <br className="hidden sm:block" />
                    Professional Online Courses
                </h1>
                <Button
                    size="lg"
                    className="group h-12 rounded-full bg-[#1E293B] px-8 text-base font-semibold text-white hover:bg-[#0f172a] hover:scale-105 transition-all duration-300"
                >
                    Join Now
                    <div className="ml-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/20 group-hover:bg-white/30">
                        <ArrowRight className="h-4 w-4" />
                    </div>
                </Button>
            </div>

            {/* Decorative Star/Sparkle Elements */}
            <div className="absolute right-0 top-0 h-full w-1/3 pointer-events-none">
                {/* Large Sparkle Top Right */}
                <svg className="absolute top-12 right-12 h-16 w-16 text-white/30 animate-pulse duration-[3000ms]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>

                {/* Small Sparkle Bottom Right */}
                <svg className="absolute bottom-20 right-32 h-8 w-8 text-white/20 animate-pulse duration-[2000ms] delay-700" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>

                {/* Tiny Sparkle Center Right */}
                <svg className="absolute top-1/2 right-48 h-4 w-4 text-white/40 animate-pulse duration-[4000ms] delay-300" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
            </div>
        </div>
    )
}
