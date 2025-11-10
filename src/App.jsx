import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Sustainability from './components/Sustainability';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B1E3E] text-white">
      <Navbar />
      <main>
        <Hero />
        <Dashboard />
        <Sustainability />
        <section id="community" className="bg-slate-950 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-8">
              <h2 className="text-3xl font-bold sm:text-4xl">Community Innovation Hub</h2>
              <p className="mt-2 text-slate-300">Ideas shaping tomorrow: vertical farms, smart lighting, and more.</p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: 'Vertical Farming', desc: 'Hyper-local produce with minimal water.', tag: 'Energy' },
                { title: 'Smart Lighting', desc: 'Adaptive LEDs reduce energy by 40%.', tag: 'Energy' },
                { title: 'Eco Bus Network', desc: 'Electric buses on demand.', tag: 'Mobility' },
                { title: 'Bike Share+', desc: 'Seamless multi-modal journeys.', tag: 'Mobility' },
                { title: 'Circular Waste', desc: 'Sensors + routing for zero overflow.', tag: 'Waste' },
                { title: 'Green Roofs', desc: 'Cooler buildings and cleaner air.', tag: 'Social' },
              ].map((c) => (
                <div key={c.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-transform hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-cyan-400/5 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative z-10">
                    <span className="inline-flex text-xs rounded-full border border-emerald-300/30 px-2 py-0.5 text-emerald-300">{c.tag}</span>
                    <h3 className="mt-3 text-xl font-semibold">{c.title}</h3>
                    <p className="mt-1 text-sm text-slate-300">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
