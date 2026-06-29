export default function RecentActivity() {
  const activities = [
    "Vídeo publicado",
    "Workflow executado",
    "Prompt atualizado",
    "Backup realizado",
  ];

  return (
    <section className="mb-10 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="text-xl font-semibold">Atividade recente</h2>

      <div className="mt-4 space-y-2">
        {activities.map((activity) => (
          <p key={activity}>✅ {activity}</p>
        ))}
      </div>
    </section>
  );
}