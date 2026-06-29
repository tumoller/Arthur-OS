export default function TaskList() {
const projects = [
  "Arthur OS",
  "Arthur Financeira",
  "Canal YouTube",
  "Content Engine",
];

  return (
    <section className="mb-10 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="text-xl font-semibold">Card de Projetos</h2>

      <div className="mt-4 space-y-2">
        {projects.map((project) => (
          <p key={project}>✅ {project}</p>
        ))}
      </div>
    </section>
  );
}