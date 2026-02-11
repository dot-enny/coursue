"use client";

import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroBanner() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-[#6656F2] to-[#5a4bd6] text-white px-7 py-5">
      <div className="relative z-10 max-w-2xl">
        <div className="mb-4 inline-flex items-center tracking-[0.2em] text-xs font-medium backdrop-blur-sm">
          ONLINE COURSE
        </div>
        <h1 className="mb-8 text-3xl font-medium leading-tight tracking-tight sm:text-4xl 2xl:text-5xl">
          Sharpen Your Skills with <br className="hidden sm:block" />
          Professional Online Courses
        </h1>
        <Button
          size="lg"
          className="group h-11 rounded-full bg-[#1E293B] pl-6 pr-2 flex justify-between text-sm font-semibold text-white hover:bg-[#0f172a] transition-colors duration-300 ease-out cursor-pointer"
        >
          Join Now
          <div className="ml-1 flex size-8 items-center justify-center rounded-full bg-white">
            <ChevronRight className="text-black font-bold size-3 stroke-[4px] group-hover:scale-140 duration-300 transition-transform" />
          </div>
        </Button>
      </div>
      <DecorativeSparkle />
    </div>
  );
}

const DecorativeSparkle = () => {
  return (
    <div className="absolute right-0 top-0 h-full w-1/3 pointer-events-none">
      {/* Large Sparkle Top Right */}
      <svg
        className="absolute top-12 right-12 h-16 w-16 text-white/30 animate-pulse duration-[3000ms]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
      </svg>

      {/* Small Sparkle Bottom Right */}
      <svg
        className="absolute bottom-20 right-32 h-8 w-8 text-white/20 animate-pulse duration-[2000ms] delay-700"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
      </svg>

      {/* Tiny Sparkle Center Right */}
      <svg
        className="absolute top-1/2 right-48 h-4 w-4 text-white/40 animate-pulse duration-[4000ms] delay-300"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
      </svg>
    </div>
  )
}
