// app/page.tsx

import StatsGrid from "@/components/home/StatsGrid";
import Hero from "@/components/home/Hero"
import AIBriefing from "@/components/home/AIBriefing"
import RecentActivity from "@/components/home/RecentActivity"
import ProjectsCard from "@/components/home/ProjectsCard"
import TaskList from "@/components/home/TaskList"


export default function Home() {
  return  (
    <main className="min-h-screen bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl p-8">
      <Hero />
      <StatsGrid />
        <div className="flex items-center gap-3">
       <AIBriefing />
      <RecentActivity />
        </div>
      <ProjectsCard />
      <TaskList />
      </div>
    </main>
  );
}