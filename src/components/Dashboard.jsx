import { BatteryCharging, Bus, Leaf, Recycle } from 'lucide-react';
import { useMemo } from 'react';

function StatCard({ icon: Icon, title, value, progress, accent }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur-md transition-transform hover:-translate-y-1">
      <div className={`absolute inset-0 opacity-40 bg-gradient-to-br ${accent}`} />
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
            <Icon className="h-5 w-5 text-emerald-300" />
          </div>
          <div>
            <p className="text-slate-300 text-sm">{title}</p>
            <p className="text-2xl font-semibold text-white">{value}%</p>
          </div>
        </div>
      </div>
      <div className="relative mt-4 h-2 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-emerald-400 shadow-[0_0_20px_#34d399] transition-all duration-500 group-hover:scale-x-105 origin-left"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-2 text-xs text-slate-400">Real-time performance index</p>
    </div>
  );
}

export default function Dashboard() {
  const stats = useMemo(
    () => [
      { icon: Leaf, title: 'Air Quality', value: 86, progress: 86, accent: 'from-emerald-400/10 to-emerald-500/10' },
      { icon: BatteryCharging, title: 'Renewable Energy', value: 72, progress: 72, accent: 'from-teal-400/10 to-cyan-500/10' },
      { icon: Bus, title: 'Smart Transport', value: 64, progress: 64, accent: 'from-sky-400/10 to-blue-500/10' },
      { icon: Recycle, title: 'Waste Management', value: 78, progress: 78, accent: 'from-lime-400/10 to-green-500/10' },
    ],
    []
  );

  return (
    <section id="dashboard" className="relative bg-gradient-to-b from-[#0B1E3E] to-slate-900 py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Smart City Dashboard</h2>
            <p className="mt-2 text-slate-300">A quick snapshot of key sustainability indicators.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex rounded-full border border-emerald-400/30 px-4 py-2 text-sm text-emerald-300 hover:bg-emerald-400/10">
            Live Data Feed
          </a>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <StatCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
