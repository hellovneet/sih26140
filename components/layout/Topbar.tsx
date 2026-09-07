export default function Topbar({ title }: { title: string }) {
  return (
    <header className="mb-6 flex items-center justify-between border-b border-[#1d3552] py-5">
      <div><p className="text-sm muted">Quantum Learning Platform</p><h1 className="text-2xl font-bold">{title}</h1></div>
      <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-cyan-300 to-violet-400 font-bold text-slate-950">VS</div>
    </header>
  );
}