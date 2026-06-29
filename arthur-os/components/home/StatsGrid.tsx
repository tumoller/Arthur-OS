import StatCard from "./StatCard";

export default function StatsGrid() {
  return (
    <section className="mb-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
      <StatCard title="Conteúdos" value="128" />
      <StatCard title="Agentes" value="5" />
      <StatCard title="Automações" value="31" />
      <StatCard title="Projetos" value="8" />
    </section>
  );
}