"use client";

import { useState } from "react";

export default function QuantumCircuit() {
  const [hadamard, setHadamard] = useState(false);

  return (
    <div className="glass p-6">
      <div className="flex items-center justify-between">
        <div><h2 className="text-xl font-bold">Quantum Circuit Builder</h2><p className="text-sm muted">Interactive gate placement demo</p></div>
        <button onClick={() => setHadamard(false)} className="rounded-xl border border-[#1d3552] px-3 py-2 text-sm">Reset</button>
      </div>
      <div className="mt-8 overflow-x-auto rounded-2xl bg-[#081525] p-8">
        <div className="min-w-[560px] space-y-10">
          <div className="flex items-center gap-4">
            <span className="w-8">q₀</span><div className="h-px flex-1 bg-[#38506d]"/>
            <button onClick={() => setHadamard(true)} className={`h-12 w-12 rounded-xl border font-bold ${hadamard ? "bg-cyan-300 text-slate-950" : "border-[#38506d]"}`}>H</button>
            <div className="h-px flex-1 bg-[#38506d]"/><span>{hadamard ? "(|0⟩ + |1⟩)/√2" : "|0⟩"}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-8">q₁</span><div className="h-px flex-1 bg-[#38506d]"/>
            <div className="h-12 w-12"/><div className="h-px flex-1 bg-[#38506d]"/><span>|0⟩</span>
          </div>
        </div>
      </div>
      <p className="mt-4 text-sm muted">{hadamard ? "Simulation: 50% |0⟩ • 50% |1⟩" : "Click H to create superposition."}</p>
    </div>
  );
}