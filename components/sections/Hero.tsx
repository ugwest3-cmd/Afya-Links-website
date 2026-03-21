'use client'

// AfyaLinks Premium Hero - Redesigned with Framer Motion

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F5F5F7] section-padding min-h-[90vh] flex items-center">
      <div className="container-custom relative z-10">
        <div className="max-w-[900px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block px-4 py-1.5 mb-8 text-sm font-medium tracking-wide text-[#86868B] uppercase bg-white/50 backdrop-blur-md rounded-full border border-gray-200/50">
              Healthcare, reimagined
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="heading-1 mb-10 text-[#1D1D1F]"
          >
            Digital logistics <br className="hidden md:block" />
            <span className="text-[#0071E3]">for medicine supply.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-[#86868B] mb-12 max-w-[700px] mx-auto leading-relaxed font-medium"
          >
            Afya Links connects clinics to trusted wholesale pharmacies for fast, reliable, and verified medicine delivery across the region.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link href="/get-started" className="btn-apple-primary flex items-center gap-2 group shadow-xl shadow-blue-500/20">
              Start Sourcing
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/about-us" className="text-[#0071E3] font-semibold text-lg hover:underline underline-offset-4 decoration-2">
              Learn how it works →
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-100/50 blur-[120px] rounded-full opacity-60" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-100/30 blur-[120px] rounded-full opacity-60" />
      </div>
    </section>
  )
}
