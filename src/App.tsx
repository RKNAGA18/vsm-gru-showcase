import { useState } from 'react';
import { steps } from './data/steps';
import './App.css'; // Or './index.css' depending on what you kept

function App() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-950">
      {/* Top Navigation Bar */}
      <header className="bg-slate-900 border-b border-slate-800 p-4 sticky top-0 z-10 flex justify-between items-center shadow-md">
        <div>
          <h1 className="text-2xl font-bold text-cyan-400 tracking-tight">VSM-GRU RTL-to-GDSII</h1>
          <p className="text-sm text-slate-400">Team 18: Powerhouse</p>
        </div>
        <button className="bg-cyan-600 hover:bg-cyan-500 text-slate-50 px-5 py-2 rounded-md text-sm font-semibold transition-colors">
          Download Report
        </button>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar Navigation */}
        <aside className="w-64 bg-slate-900 border-r border-slate-800 p-4 overflow-y-auto hidden md:block">
          <ul className="space-y-2">
            {steps.map((step) => (
              <li key={step.id}>
                <button
                  onClick={() => setActiveStep(step.id)}
                  className={`w-full text-left px-4 py-3 rounded-md transition-all ${
                    activeStep === step.id 
                      ? 'bg-cyan-950 text-cyan-300 border-l-4 border-cyan-400 font-medium' 
                      : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                  }`}
                >
                  <span className="font-mono text-xs opacity-50 mr-3">
                    {step.id.toString().padStart(2, '0')}
                  </span>
                  {step.title}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-slate-100">
              {steps.find(s => s.id === activeStep)?.title}
            </h2>
            
            <div className="p-8 rounded-xl bg-slate-900 border border-slate-800 shadow-2xl min-h-[500px]">
              <p className="text-slate-400 text-lg">
                <span className="text-cyan-400 font-mono">[{steps.find(s => s.id === activeStep)?.component}]</span>
                <br/><br/>
                This is where we will inject the interactive content for step {activeStep}.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;