import React from 'react'

export default function About() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-rose-100 to-amber-50 p-1 shadow-[0_10px_40px_rgba(230,161,154,0.25)]">
              <div className="h-full w-full rounded-2xl bg-white/70 backdrop-blur flex items-end p-6">
                <div>
                  <div className="text-xs uppercase tracking-widest text-rose-500">Ambulancia</div>
                  <div className="mt-1 text-sm text-neutral-600">Ulica na Štrande 1475/25, 924 01 Galanta</div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#2b2b2b]">MUDr. Valéria Mýtniková</h2>
            <p className="mt-3 text-rose-800/80 font-medium">Gynekológia a pôrodníctvo</p>
            <p className="mt-6 text-neutral-700 leading-relaxed">
              Súkromná prémiová starostlivosť s dôrazom na dôveru, komfort a diskrétnosť. Moderné diagnostické postupy, citlivý prístup a profesionálne vedenie počas všetkých etáp ženského zdravia.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InfoCard label="Telefón" value="+421 31 780 73 37" href="tel:+421317807337" />
              <InfoCard label="E‑mail" value="mytnikova.valeria@stonline.sk" href="mailto:mytnikova.valeria@stonline.sk" />
              <InfoCard label="Adresa" value="Ulica na Štrande 1475/25, Galanta" href="#mapa" />
              <InfoCard label="Ambulancia" value="Súkromná gynekologická ambulancia s.r.o." />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoCard({ label, value, href }) {
  const content = (
    <div className="rounded-2xl border border-rose-100 bg-white/70 backdrop-blur p-5 shadow-sm hover:shadow-md transition">
      <div className="text-xs uppercase tracking-widest text-rose-500">{label}</div>
      <div className="mt-1 text-neutral-800 font-medium">{value}</div>
    </div>
  )
  return href ? (
    <a href={href} className="block">{content}</a>
  ) : content
}
