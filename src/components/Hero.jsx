import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft elegant gradient overlay to harmonize palette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#f9f3f1]/90 via-[#fffaf7]/70 to-[#f7e9e9]/60" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <span className="inline-block rounded-full bg-white/70 backdrop-blur px-4 py-1.5 text-sm text-rose-700 border border-rose-100 shadow-sm">
              Prémiová gynekologická starostlivosť
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-[#2b2b2b] font-display">
              Elegantná a citlivá starostlivosť o ženské zdravie
            </h1>
            <p className="mt-5 text-lg md:text-xl text-neutral-700/90">
              MUDr. Valéria Mýtniková – gynekológia a pôrodníctvo
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#kontakt"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-amber-400 text-white px-6 py-3 shadow-lg shadow-rose-200/40 hover:shadow-rose-300/60 transition-all"
              >
                Objednať sa
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
              <a
                href="tel:+421317807337"
                className="inline-flex items-center gap-2 rounded-full border border-rose-200/70 bg-white/70 backdrop-blur px-6 py-3 text-rose-700 hover:bg-white transition"
              >
                Zavolať do ambulancie
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
