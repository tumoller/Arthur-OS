// app/page.tsx

import StatsGrid from "@/components/home/StatsGrid";
import Hero from "@/components/home/Hero"
import AIBriefing from "@/components/home/AIBriefing"
import RecentActivity from "@/components/home/RecentActivity"
import ProjectsCard from "@/components/home/ProjectsCard"
import TaskList from "@/components/home/TaskList"


export default function Home() {
  return  (
    <main>
      <Hero />
      <StatsGrid />
      <AIBriefing />
      <RecentActivity />
      <ProjectsCard />
      <TaskList />
    </main>
  );
}