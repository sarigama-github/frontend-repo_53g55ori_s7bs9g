import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Hours from './components/Hours'
import Parking from './components/Parking'
import Announcements from './components/Announcements'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#fffaf7,rgba(255,245,245,0.9))] text-neutral-900">
      <Navbar />
      <Hero />
      <main className="relative">
        <About />
        <Services />
        <Hours />
        <Parking />
        <Announcements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/60 border-b border-rose-100">
      <div className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-rose-300 to-amber-200 shadow" />
          <div className="font-semibold">MUDr. Valéria Mýtniková</div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#" className="text-neutral-700 hover:text-neutral-900">Domov</a>
          <a href="#sluzby" className="text-neutral-700 hover:text-neutral-900">Služby</a>
          <a href="#kontakt" className="text-neutral-700 hover:text-neutral-900">Kontakt</a>
        </nav>
        <a href="#kontakt" className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-amber-400 text-white px-4 py-2 shadow">
          Objednať sa
        </a>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="mt-10 border-t border-rose-100 bg-white/60">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-10 text-sm text-neutral-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>© {new Date().getFullYear()} MUDr. Valéria Mýtniková. Všetky práva vyhradené.</div>
        <div className="flex items-center gap-3">
          <a href="tel:+421317807337" className="hover:text-neutral-900">+421 31 780 73 37</a>
          <span className="opacity-40">•</span>
          <a href="mailto:mytnikova.valeria@stonline.sk" className="hover:text-neutral-900">mytnikova.valeria@stonline.sk</a>
        </div>
      </div>
    </footer>
  )
}
