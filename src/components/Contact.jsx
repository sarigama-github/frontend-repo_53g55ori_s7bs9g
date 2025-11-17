import React from 'react'

export default function Contact() {
  return (
    <section id="kontakt" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#2b2b2b]">Kontakt</h3>
            <div className="mt-6 space-y-4">
              <ContactItem label="Telefón" value="+421 31 780 73 37" href="tel:+421317807337" />
              <ContactItem label="E‑mail" value="mytnikova.valeria@stonline.sk" href="mailto:mytnikova.valeria@stonline.sk" />
              <ContactItem label="Adresa" value="Ulica na Štrande 1475/25, 924 01 Galanta" />
              <ContactItem label="Ambulancia" value="MUDr. Mýtniková Valéria – Súkromná gynekologická ambulancia s.r.o." />
            </div>
          </div>
          <div id="mapa" className="md:col-span-7">
            <div className="rounded-2xl border border-rose-100 overflow-hidden shadow-[0_10px_40px_rgba(230,161,154,0.25)] bg-white/70 backdrop-blur">
              <iframe
                title="Mapa"
                src="https://www.google.com/maps?q=Ulica%20na%20%C5%A0trande%201475/25%2C%20924%2001%20Galanta&output=embed"
                className="w-full h-[380px]"
                style={{ filter: 'grayscale(15%) saturate(90%) contrast(95%)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactItem({ label, value, href }) {
  const content = (
    <div className="rounded-xl border border-rose-100 bg-white/70 backdrop-blur p-5 shadow-sm hover:shadow-md transition">
      <div className="text-xs uppercase tracking-widest text-rose-500">{label}</div>
      <div className="mt-1 text-neutral-800 font-medium">{value}</div>
    </div>
  )
  return href ? (
    <a href={href} className="block">{content}</a>
  ) : content
}
