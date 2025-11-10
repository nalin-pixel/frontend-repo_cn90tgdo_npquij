import { Droplets, Leaf, Sun, Wind } from 'lucide-react';

function MiniProgress({ label, value }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-9 w-9">
        <svg viewBox="0 0 36 36" className="h-9 w-9 -rotate-90">
          <path d="M18 2a16 16 0 1 1 0 32 16 16 0 1 1 0-32" className="fill-none stroke-white/10" strokeWidth="4" />
          <path
            d="M18 2a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
            className="fill-none stroke-emerald-400 drop-shadow-[0_0_6px_#34d399]"
            strokeWidth="4"
            strokeDasharray={`${value}, 100`}
          />
        </svg>
      </div>
      <div>
        <p className="text-sm text-slate-300">{label}</p>
        <p className="text-white font-semibold">{value}%</p>
      </div>
    </div>
  );
}

export default function Sustainability() {
  return (
    <section id="sustainability" className="relative bg-slate-900 py-16 sm:py-24">
      <div className="absolute inset-0 opacity-40 [background:radial-gradient(125%_125%_at_50%_10%,#0B1E3E_40%,#020617_100%)]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-emerald-300">Sustainability at the Core</span>
          <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Designed for people and the planet</h3>
          <p className="mt-3 text-slate-300">
            CitySense aligns energy, mobility, and environment. Compare a traditional city with a sustainable one and see the impact of clean energy, green space, water stewardship, and air quality improvements.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-5">
            <MiniProgress label="Air Quality" value={86} />
            <MiniProgress label="Energy" value={72} />
            <MiniProgress label="Water" value={68} />
            <MiniProgress label="Green Space" value={58} />
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-slate-200">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs"><Sun className="h-4 w-4 text-amber-300" /> Solar</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs"><Wind className="h-4 w-4 text-cyan-300" /> Wind</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs"><Leaf className="h-4 w-4 text-emerald-300" /> Parks</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs"><Droplets className="h-4 w-4 text-blue-300" /> Water</span>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-emerald-300">Traditional City</h4>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  <li>High emissions</li>
                  <li>Car-centric transport</li>
                  <li>Low renewable usage</li>
                  <li>Limited green areas</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-emerald-300">Sustainable City</h4>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  <li>30% fewer emissions</li>
                  <li>EVs + shared mobility</li>
                  <li>Solar + wind integration</li>
                  <li>Parks and blueways</li>
                </ul>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-emerald-400/10 via-cyan-400/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
