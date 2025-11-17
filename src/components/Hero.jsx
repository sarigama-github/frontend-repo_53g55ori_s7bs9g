import React from 'react'
import { motion } from 'framer-motion'
import { Stethoscope, ShieldCheck, ClipboardList } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden">
      {/* Elegant medical background without heart motif */}
      <div className="absolute inset-0">
        {/* Soft base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f9f3f1] via-[#fffaf7] to-[#f7ece6]" />
        {/* Ambient blush/champagne glows */}
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-rose-200/40 blur-3xl" />
        <div className="absolute -bottom-28 -right-20 h-[28rem] w-[28rem] rounded-full bg-amber-200/40 blur-3xl" />
        {/* Subtle pattern grid */}
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #9f7f7f 1px, transparent 0)',
          backgroundSize: '28px 28px'
        }} />
        {/* Soft vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/40" />
      </div>

      {/* Content */}
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

      {/* Floating medical badges for professional vibe */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="absolute left-6 top-16 hidden md:flex items-center gap-3 rounded-2xl border border-rose-100 bg-white/70 backdrop-blur px-4 py-2.5 text-sm text-neutral-700 shadow-sm"
        >
          <span className="p-2 rounded-xl bg-rose-50 text-rose-600"><Stethoscope size={18} /></span>
          Gynekológia & pôrodníctvo
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="absolute right-10 top-28 hidden md:flex items-center gap-3 rounded-2xl border border-amber-100 bg-white/70 backdrop-blur px-4 py-2.5 text-sm text-neutral-700 shadow-sm"
        >
          <span className="p-2 rounded-xl bg-amber-50 text-amber-600"><ShieldCheck size={18} /></span>
          Citlivý prístup a súkromie
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute right-1/4 bottom-16 hidden md:flex items-center gap-3 rounded-2xl border border-rose-100 bg-white/70 backdrop-blur px-4 py-2.5 text-sm text-neutral-700 shadow-sm"
        >
          <span className="p-2 rounded-xl bg-rose-50 text-rose-600"><ClipboardList size={18} /></span>
          Preventívne prehliadky & poradňa
        </motion.div>
      </div>
    </section>
  )
}
