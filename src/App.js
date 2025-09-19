import React from 'react';
import { Phone, Building2 } from 'lucide-react';

export default function GressettSteelSite() {
  return (
    <div className=\"min-h-screen bg-[#F8F7F3] text-zinc-900\">
      <header className=\"sticky top-0 z-50 backdrop-blur bg-[#F8F7F3]/80 border-b border-zinc-200\">
        <div className=\"max-w-6xl mx-auto px-4 py-3 flex items-center justify-between\">
          <div className=\"flex items-center gap-3\">
            <div className=\"h-9 w-9 rounded-xl bg-[#C6A15B] flex items-center justify-center shadow-sm\">
              <Building2 className=\"h-5 w-5 text-white\" />
            </div>
            <div className=\"leading-tight\">
              <p className=\"font-extrabold tracking-tight text-lg\">Gressett Steel Structures</p>
              <p className=\"text-xs text-zinc-600 -mt-0.5\">Designed for life, built to last.</p>
            </div>
          </div>
          <a href=\"tel:2546270316\" className=\"inline-flex items-center gap-2 rounded-2xl px-3 py-2 text-sm font-semibold bg-[#C6A15B] text-white shadow hover:opacity-95 transition\">
            <Phone className=\"h-4 w-4\" /> (254) 627-0316
          </a>
        </div>
      </header>
      <main className=\"max-w-6xl mx-auto px-4 py-16\">
        <h1 className=\"text-4xl font-black tracking-tight\">Steel buildings, standing-seam roofs, and concrete — done right.</h1>
        <p className=\"mt-4 text-lg text-zinc-700\">Central Texas craftsmanship with fair pricing and tight timelines. From barns and shops to porches and barndominium shells — we build it to last.</p>
        <a href='tel:2546270316' className=\"mt-6 inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-base font-semibold bg-[#C6A15B] text-white shadow hover:opacity-95 transition\">
          <Phone className=\"h-5 w-5\" /> Call now
        </a>
      </main>
    </div>
  );
}