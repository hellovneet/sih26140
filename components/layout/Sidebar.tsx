"use client";

import Link from "next/link";
import { Atom, BarChart3, BookOpen, BrainCircuit, LayoutDashboard, MessageCircle, Settings } from "lucide-react";

const links = [
  ["/dashboard", "Dashboard", LayoutDashboard],
  ["/learn", "Learn", BookOpen],
  ["/circuit-lab", "Circuit Lab", Atom],
  ["/ai-tutor", "AI Tutor", MessageCircle],
  ["/quiz", "AI Quiz", BrainCircuit],
  ["/analytics", "Analytics", BarChart3]
] as const;

export default function Sidebar() {
  return (
    <aside className="hidden md:flex min-h-screen w-64 shrink-0 flex-col border-r border-[#1d3552] bg-[#081525] p-5">
      <div className="mb-9 flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-300 font-black text-slate-950">Q</div>
        <div><b>QuantumLab</b><div className="text-xs muted">SIH26140</div></div>
      </div>
      <nav className="space-y-2">
        {links.map(([href, label, Icon]) => (
          <Link key={href} href={href} className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm hover:bg-[#102238]">
            <Icon size={18} />{label}
          </Link>
        ))}
      </nav>
      <div className="mt-auto">
        <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm hover:bg-[#102238]">
          <Settings size={18}/>Settings
        </button>
      </div>
    </aside>
  );
}