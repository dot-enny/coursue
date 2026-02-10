import { HeroBanner } from "@/components/dashboard/hero-banner";
import { CourseCategories } from "@/components/dashboard/course-categories";
import { ContinueWatching } from "@/components/dashboard/continue-watching";
import { YourLesson } from "@/components/dashboard/your-lesson";
import { StatisticPanel } from "@/components/dashboard/statistic-panel";
import { ActivityChart } from "@/components/dashboard/activity-chart";
import { YourMentor } from "@/components/dashboard/your-mentor";

export default function Home() {
  return (
    <div className="flex h-full flex-col gap-8 lg:flex-row">
      {/* Main Content Column */}
      <div className="flex flex-1 flex-col gap-8 min-w-0">
        <HeroBanner />
        <CourseCategories />
        <ContinueWatching />
        <YourLesson />
      </div>

      {/* Right Sidebar Panel Column */}
      <div className="flex w-full flex-col gap-6 lg:w-80 shrink-0">
        <StatisticPanel />
        <ActivityChart />
        <YourMentor />
      </div>
    </div>
  );
}
