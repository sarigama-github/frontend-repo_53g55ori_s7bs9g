import React from 'react'

const hours = [
  { day: 'Pondelok', slots: ['09:30–13:00', '13:30–18:30'] },
  { day: 'Utorok', slots: ['07:30–13:00', '13:30–15:30'] },
  { day: 'Streda', slots: ['09:30–13:00', '13:30–18:30'] },
  { day: 'Štvrtok', slots: ['07:30–13:00', '13:30–15:30'] },
  { day: 'Piatok', slots: ['07:30–13:00'] },
]

export default function Hours() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <h3 className="text-2xl md:text-3xl font-semibold text-[#2b2b2b]">Ordinačné hodiny</h3>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {hours.map(({ day, slots }) => (
            <div key={day} className="rounded-2xl border border-rose-100 bg-white/70 backdrop-blur p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="font-medium text-neutral-900">{day}</div>
                <div className="text-xs uppercase tracking-widest text-rose-500">Otvorené</div>
              </div>
              <div className="mt-3 space-y-1.5">
                {slots.map((s) => (
                  <div key={s} className="text-neutral-700">{s}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
