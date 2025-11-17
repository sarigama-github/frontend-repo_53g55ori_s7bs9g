import React from 'react'

export default function Parking() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <h3 className="text-2xl md:text-3xl font-semibold text-[#2b2b2b]">Parkovanie</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
          <Item title="Regulované zóny" desc="Ambulancia sa nachádza v regulovaných parkovacích zónach Galanty." />
          <Item title="Vyznačené miesta" desc="Použite len vyznačené parkovacie miesta na ulici Na Štrande." />
          <Item title="Dopravné značenie" desc="Sledujte platené zóny a časové obmedzenia." />
        </div>
      </div>
    </section>
  )
}

function Item({ title, desc }) {
  return (
    <div className="rounded-2xl border border-rose-100 bg-white/70 backdrop-blur p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="h-9 w-9 rounded-full bg-gradient-to-tr from-rose-300 to-amber-200 flex items-center justify-center text-rose-800">ℹ️</span>
        <div>
          <div className="font-medium text-neutral-900">{title}</div>
          <div className="text-neutral-700 mt-1">{desc}</div>
        </div>
      </div>
    </div>
  )
}
