import StatsGrid from "@/components/home/StatsGrid";
import Hero from "@/components/home/Hero";
import AIBriefing from "@/components/home/AIBriefing";
import RecentActivity from "@/components/home/RecentActivity";
import ProjectsCard from "@/components/home/ProjectsCard";
import TaskList from "@/components/home/TaskList";

export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-red-500">Tailwind está funcionando e só isso.</h1>
      <Hero />
      <StatsGrid />

      <div className="flex items-center gap-3">
        <AIBriefing />
        <RecentActivity />
      </div>

      <ProjectsCard />
      <TaskList />
    </div>
  );
}