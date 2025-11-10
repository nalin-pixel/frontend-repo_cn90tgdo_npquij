import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#061427] text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h5 className="text-white font-semibold">About</h5>
          <p className="mt-3 text-sm">CitySense is a vision for smart, sustainable, and human-centered cities. We transform data into action for cleaner air, better mobility, and resilient communities.</p>
        </div>
        <div>
          <h5 className="text-white font-semibold">Resources</h5>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#dashboard" className="hover:text-emerald-300">Dashboard</a></li>
            <li><a href="#sustainability" className="hover:text-emerald-300">Sustainability</a></li>
            <li><a href="#community" className="hover:text-emerald-300">Community</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-semibold">Contact</h5>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Email: hello@citysense.io</li>
            <li>HQ: 2025 Greenway, Future City</li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-semibold">Socials</h5>
          <div className="mt-3 flex gap-3">
            <a href="#" aria-label="Twitter" className="rounded-full border border-white/10 p-2 hover:bg-white/10"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="LinkedIn" className="rounded-full border border-white/10 p-2 hover:bg-white/10"><Linkedin className="h-4 w-4" /></a>
            <a href="#" aria-label="Facebook" className="rounded-full border border-white/10 p-2 hover:bg-white/10"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="rounded-full border border-white/10 p-2 hover:bg-white/10"><Instagram className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-slate-400">© 2025 CitySense – Designing the Future.</div>
    </footer>
  );
}
