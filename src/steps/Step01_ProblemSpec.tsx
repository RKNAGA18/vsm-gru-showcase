import React from 'react';

const specs = [
  { metric: "Latency per frame", target: "< 1 ms", achieved: "0.85 ms", status: "Pass" },
  { metric: "Power Consumption", target: "Low mW range", achieved: "4.2 mW", status: "Pass" },
  { metric: "Core Architecture", target: "GRU / LSTM", achieved: "GRU (16 units)", status: "Pass" },
  { metric: "Quantization", target: "INT8 W / INT16 A", achieved: "INT8 / INT16", status: "Pass" },
  { metric: "Compute Element", target: "Time-multiplexed MAC", achieved: "Single Shared MAC", status: "Pass" },
  { metric: "Averaging", target: "Shift-based EMA", achieved: "Implemented", status: "Pass" },
];

export default function Step01_ProblemSpec() {
  return (
    <div className="space-y-6 text-slate-300">
      <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
        <h3 className="text-xl font-semibold text-cyan-400 mb-4">PS-01: RNN-Based Voice Stability Monitor</h3>
        <p className="leading-relaxed">
          The objective is to design a low-power RTL accelerator that runs a small recurrent layer (GRU) 
          on per-frame voice-quality features. It produces a running average stability score for a telecom 
          edge device, flagging degraded voice quality in real-time without cloud offloading.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-700 bg-slate-800/30">
              <th className="p-4 font-medium text-slate-400">Parameter</th>
              <th className="p-4 font-medium text-slate-400">Target Spec</th>
              <th className="p-4 font-medium text-slate-400">Achieved</th>
              <th className="p-4 font-medium text-slate-400">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            {specs.map((spec, i) => (
              <tr key={i} className="hover:bg-slate-800/20 transition-colors">
                <td className="p-4 text-slate-200 font-medium">{spec.metric}</td>
                <td className="p-4 text-slate-400">{spec.target}</td>
                <td className="p-4 text-cyan-300 font-mono">{spec.achieved}</td>
                <td className="p-4">
                  <span className="bg-emerald-900/50 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold tracking-wide border border-emerald-800">
                    {spec.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}