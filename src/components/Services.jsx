import React from 'react'

const services = [
  'Preventívne gynekologické prehliadky',
  'Tehotenská poradňa',
  'Ultrazvukové vyšetrenia',
  'Diagnostika gynekologických ťažkostí',
  'Poradenstvo & predpis antikoncepcie',
  'Cytologické vyšetrenia a skríning',
]

export default function Services() {
  return (
    <section id="sluzby" className="relative py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <h3 className="text-2xl md:text-3xl font-semibold text-[#2b2b2b]">Služby ambulancie</h3>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div key={s} className="rounded-2xl border border-rose-100/80 bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-lg transition group">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-rose-400 to-amber-300 shadow-[0_0_0_4px_rgba(244,208,197,0.35)]" />
                <p className="text-neutral-800 group-hover:text-neutral-900 transition">{s}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
