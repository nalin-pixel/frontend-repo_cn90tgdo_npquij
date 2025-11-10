import Spline from '@splinetool/react-spline';
import { ArrowRight, Info } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden pt-16">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6tUXqVcUA0xgJugv/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-[#0B1E3E]/60 to-[#0B1E3E]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-20 sm:py-28">
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-emerald-300 backdrop-blur-md">
          Envisioning Smart and Sustainable Cities
        </span>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
          Building the Future, One Smart City at a Time.
        </h1>
        <p className="max-w-2xl text-base text-slate-200 sm:text-lg">
          Empowering cities through innovation, data, and sustainability.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#dashboard"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-3 text-slate-900 font-semibold shadow-lg shadow-emerald-400/30 hover:shadow-emerald-400/50 transition-shadow"
          >
            Explore the Future City <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white backdrop-blur-md"
          >
            <Info className="h-4 w-4" /> Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
