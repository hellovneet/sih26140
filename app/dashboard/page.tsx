import AppShell from "@/components/layout/AppShell";
import Topbar from "@/components/layout/Topbar";
import Link from "next/link";

export default function Dashboard() {
  return <AppShell><Topbar title="Learning Dashboard"/>
    <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr]">
      <section className="space-y-5">
        <div className="glass p-6"><p className="text-sm muted">Welcome back 👋</p><h2 className="mt-1 text-3xl font-bold">Continue your quantum journey.</h2><p className="mt-2 muted">Learn through visual explanations, circuits and AI challenges.</p>
          <div className="mt-6"><div className="mb-2 flex justify-between text-sm"><span>Overall progress</span><b>68%</b></div><div className="h-2 rounded-full bg-[#182a40]"><div className="h-2 w-[68%] rounded-full bg-cyan-300"/></div></div>
          <Link href="/learn" className="mt-5 inline-block rounded-xl bg-cyan-300 px-5 py-3 font-semibold text-slate-950">Continue learning</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">{["Qubits & States","Quantum Gates","Superposition","Entanglement"].map((x,i)=>
          <div className="glass p-5" key={x}><span className="text-xs muted">MODULE 0{i+1}</span><h3 className="mt-3 font-semibold">{x}</h3><div className="mt-4 h-1.5 rounded-full bg-[#182a40]"><div className="h-1.5 rounded-full bg-violet-400" style={{width:`${[100,72,48,15][i]}%`}}/></div></div>
        )}</div>
      </section>
      <section className="space-y-5"><div className="glass p-6"><p className="text-sm muted">Performance</p><div className="mt-5 grid grid-cols-2 gap-5"><div><b className="text-3xl">84%</b><p className="text-xs muted">Quiz accuracy</p></div><div><b className="text-3xl">12</b><p className="text-xs muted">Modules done</p></div><div><b className="text-3xl">7🔥</b><p className="text-xs muted">Day streak</p></div><div><b className="text-3xl">1,240</b><p className="text-xs muted">XP earned</p></div></div></div>
      <div className="glass p-6"><p className="text-sm muted">AI recommendation</p><h3 className="mt-2 text-lg font-semibold">Practice Hadamard gates</h3><p className="mt-2 text-sm muted">Revisit superposition before moving to entanglement.</p><Link href="/circuit-lab" className="mt-4 inline-block text-sm font-semibold text-cyan-300">Open Circuit Lab →</Link></div></section>
    </div>
  </AppShell>;
}