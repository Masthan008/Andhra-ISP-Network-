import React from 'react';
import { ShieldCheck, Activity, Users, MapPin } from 'lucide-react';

export function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8">
      <header className="max-w-7xl mx-auto flex items-center justify-between pb-8 border-b border-slate-800">
        <div>
          <h1 className="text-2xl font-bold text-cyan-400">Andhra ISP Network</h1>
          <p className="text-sm text-slate-400">Enterprise Operations & Administration Portal</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-xs font-semibold">
          <Activity className="w-3.5 h-3.5 animate-pulse" />
          <span>Platform Operational</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs uppercase tracking-wider font-medium">Districts Covered</span>
              <MapPin className="w-4 h-4 text-cyan-400" />
            </div>
            <p className="text-3xl font-extrabold text-white">26 / 26</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs uppercase tracking-wider font-medium">Mandals Active</span>
              <Activity className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-3xl font-extrabold text-white">679</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs uppercase tracking-wider font-medium">Verified ISPs</span>
              <Users className="w-4 h-4 text-purple-400" />
            </div>
            <p className="text-3xl font-extrabold text-white">450+</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs uppercase tracking-wider font-medium">System SLA</span>
              <ShieldCheck className="w-4 h-4 text-amber-400" />
            </div>
            <p className="text-3xl font-extrabold text-white">99.99%</p>
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 text-center">
          <h2 className="text-xl font-bold text-white mb-2">Enterprise Administration Foundation</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">
            Phase 21 Monorepo Engineering Foundation initialized. Administration drawers, verification queues, and role-based access control readiness established.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
