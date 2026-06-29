export default function TaskList() {
  const tasks = [
    "Revisar roteiro do próximo vídeo",
    "Editar Short do YouTube",
    "Publicar artigo no blog",
    "Planejar Sprint 2",
  ];

  return (
    <section className="mb-10 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="text-xl font-semibold">Tarefas de hoje</h2>

      <div className="mt-4 space-y-3">
        {tasks.map((task) => (
          <label
            key={task}
            className="flex items-center gap-3 rounded-lg border border-zinc-800 p-3"
          >
            <input type="checkbox" className="h-4 w-4" />
            <span>{task}</span>
          </label>
        ))}
      </div>
    </section>
  );
}