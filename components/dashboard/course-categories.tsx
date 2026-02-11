"use client";

import { Box, Megaphone, Smartphone, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    title: "UI/UX Design",
    progress: "2/8 watched",
    icon: Box,
    color: "text-purple-500",
    bg: "bg-purple-100 dark:bg-purple-900/20",
  },
  {
    title: "Branding",
    progress: "3/8 watched",
    icon: Megaphone,
    color: "text-pink-500",
    bg: "bg-pink-100 dark:bg-pink-900/20",
  },
  {
    title: "Front End",
    progress: "6/12 watched",
    icon: Smartphone,
    color: "text-blue-500",
    bg: "bg-blue-100 dark:bg-blue-900/20",
  },
];

export function CourseCategories() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <div
          key={category.title}
          className="group relative flex items-center gap-3 rounded-2xl dark:border bg-card py-3 px-3 transition-all dark:border-border/50"
        >
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${category.bg} ${category.color}`}
          >
            <category.icon className="h-6 w-6" />
          </div>
          <div className="flex flex-1 flex-col tracking-tighter">
            <span className="text-xs font-medium text-muted-foreground">
              {category.progress}
            </span>
            <h3 className="font-bold text-foreground">{category.title}</h3>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full text-muted-foreground hover:bg-muted"
          >
            <MoreVertical className="h-4 w-4" />
            <span className="sr-only">More options</span>
          </Button>
        </div>
      ))}
    </div>
  );
}
