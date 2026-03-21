'use client'

import { motion } from 'framer-motion'
import { 
  Zap, 
  TrendingUp, 
  Smartphone, 
  ShieldCheck, 
  Coins, 
  ArrowUpRight 
} from 'lucide-react'

export default function Features() {
  const bentoItems = [
    {
      title: "Faster Supply",
      description: "Clinics receive medicines quickly without traveling to wholesalers. Orders are processed and delivered within hours.",
      icon: <Zap className="w-8 h-8 text-[#0071E3]" />,
      className: "md:col-span-2 md:row-span-2 bg-white",
      delay: 0.1
    },
    {
      title: "Reliable Distribution",
      description: "Wholesale pharmacies expand their reach to more clinics through our coordinated delivery network.",
      icon: <TrendingUp className="w-6 h-6 text-[#0071E3]" />,
      className: "bg-white",
      delay: 0.2
    },
    {
      title: "Digital Management",
      description: "Orders are tracked and confirmed digitally with real-time updates.",
      icon: <Smartphone className="w-6 h-6 text-[#0071E3]" />,
      className: "bg-white",
      delay: 0.4
    },
    {
      title: "Verified Partners",
      description: "All clinics, pharmacies, and drivers undergo strict verification for reliability and compliance.",
      icon: <ShieldCheck className="w-6 h-6 text-[#0071E3]" />,
      className: "md:col-span-2 bg-white",
      delay: 0.3
    },
    {
      title: "No Inventory Risk",
      description: "Order only what you need. No holding costs or expiry losses.",
      icon: <Coins className="w-6 h-6 text-[#0071E3]" />,
      className: "bg-white",
      delay: 0.5
    }
  ]

  return (
    <section id="learn-more" className="section-padding bg-[#F5F5F7]">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="heading-2 mb-6 text-[#1D1D1F]">Core Capabilities</h2>
          <p className="text-xl text-[#86868B] max-w-2xl mx-auto font-medium">
            A unified ecosystem designed for healthcare efficiency and reliability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
          {bentoItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: item.delay, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02 }}
              className={`group relative p-8 rounded-[28px] border border-gray-200/50 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-xl hover:bg-white transition-all cursor-pointer ${item.className}`}
            >
              <div className="relative z-10">
                <div className="mb-4 p-3 inline-block bg-[#F5F5F7] group-hover:bg-white rounded-2xl transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#1D1D1F] mb-3">{item.title}</h3>
                <p className="text-[#86868B] font-medium leading-relaxed">{item.description}</p>
              </div>
              
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-6 h-6 text-[#0071E3]" />
              </div>

              {/* Subtle glass effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-blue-50/0 group-hover:to-blue-50/30 transition-all pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
