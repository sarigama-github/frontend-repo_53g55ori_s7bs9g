import React from 'react'

export default function Announcements() {
  const items = [
    // Example structure for future dynamic items
    // { date: '15. 8. 2025', text: 'Dovolenka 1 deň' }
  ]

  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#2b2b2b]">Oznamy</h3>
          <span className="text-sm text-neutral-500">Ad hoc správy a aktuality</span>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.length === 0 ? (
            <div className="rounded-2xl border border-rose-100 bg-white/60 backdrop-blur p-6 shadow-sm text-neutral-600">
              Aktuálne žiadne oznamy.
            </div>
          ) : (
            items.map((it, idx) => (
              <div key={idx} className="rounded-2xl border border-rose-100 bg-white/70 backdrop-blur p-6 shadow-sm">
                <div className="text-xs uppercase tracking-widest text-rose-500">{it.date}</div>
                <div className="mt-1 text-neutral-800">{it.text}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
