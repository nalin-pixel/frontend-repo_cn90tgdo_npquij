import { useState, useEffect } from 'react';
import { Leaf, Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 dark:bg-slate-900/40 border-b border-white/10 dark:border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/20 ring-1 ring-emerald-300/40">
              <Leaf className="h-5 w-5 text-emerald-400" />
            </div>
            <span className="font-semibold tracking-tight text-slate-900 dark:text-white text-lg">CitySense</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700 dark:text-slate-300">
            <a href="#home" className="hover:text-emerald-400 transition-colors">Home</a>
            <a href="#dashboard" className="hover:text-emerald-400 transition-colors">Dashboard</a>
            <a href="#sustainability" className="hover:text-emerald-400 transition-colors">Sustainability</a>
            <a href="#community" className="hover:text-emerald-400 transition-colors">Community</a>
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode((v) => !v)}
              aria-label="Toggle theme"
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-medium text-slate-800 dark:text-slate-200 hover:bg-white/20 transition-colors"
            >
              {darkMode ? <Sun className="h-4 w-4 text-emerald-400" /> : <Moon className="h-4 w-4 text-emerald-400" />}
              <span>{darkMode ? 'Light' : 'Dark'}</span>
            </button>

            <a
              href="#dashboard"
              className="hidden md:inline-flex items-center rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-400/30 hover:shadow-emerald-400/50 transition-shadow"
            >
              Explore Now
            </a>

            <button className="md:hidden inline-flex" onClick={() => setOpen((o) => !o)} aria-label="Menu">
              {open ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="mt-2 flex flex-col gap-2 rounded-xl border border-white/10 bg-slate-900/50 p-3">
              <a href="#home" className="rounded-lg px-3 py-2 hover:bg-white/10 text-slate-300">Home</a>
              <a href="#dashboard" className="rounded-lg px-3 py-2 hover:bg-white/10 text-slate-300">Dashboard</a>
              <a href="#sustainability" className="rounded-lg px-3 py-2 hover:bg-white/10 text-slate-300">Sustainability</a>
              <a href="#community" className="rounded-lg px-3 py-2 hover:bg-white/10 text-slate-300">Community</a>
              <a href="#about" className="rounded-lg px-3 py-2 hover:bg-white/10 text-slate-300">About</a>
              <a href="#dashboard" className="mt-2 inline-flex items-center justify-center rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-400/30">Explore Now</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
