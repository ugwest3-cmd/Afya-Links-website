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
import { ReactNode } from 'react'

interface MovingIconProps {
  children: ReactNode
  type: 'pulse' | 'float' | 'flicker' | 'rotate'
}

const MovingIcon = ({ children, type }: MovingIconProps) => {
  const animations = {
    pulse: {
      animate: { scale: [1, 1.05, 1], opacity: [1, 0.8, 1] },
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    },
    float: {
      animate: { y: [0, -8, 0] },
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    },
    flicker: {
      animate: { opacity: [1, 0.5, 1, 0.8, 1] },
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    },
    rotate: {
      animate: { rotate: [0, 5, -5, 0] },
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
    }
  }

  return (
    <motion.div {...animations[type]}>
      {children}
    </motion.div>
  )
}

export default function Features() {
  const bentoItems = [
    {
      title: "Faster Supply",
      subtitle: "Ultra-fast sourcing",
      description: "Clinics receive medicines quickly without traveling to wholesalers. Orders are processed and delivered within hours.",
      icon: <Zap className="w-8 h-8 text-[#0071E3]" />,
      anim: 'flicker' as const,
      className: "md:col-span-2 md:row-span-2 bg-white",
      delay: 0.1
    },
    {
      title: "Reliable Distribution",
      subtitle: "Wide network",
      description: "Wholesale pharmacies expand their reach to more clinics through our network.",
      icon: <TrendingUp className="w-6 h-6 text-[#0071E3]" />,
      anim: 'pulse' as const,
      className: "bg-white",
      delay: 0.2
    },
    {
      title: "Digital Management",
      subtitle: "Real-time tracking",
      description: "Orders are tracked and confirmed digitally with updates.",
      icon: <Smartphone className="w-6 h-6 text-[#0071E3]" />,
      anim: 'rotate' as const,
      className: "bg-white",
      delay: 0.4
    },
    {
      title: "Verified Partners",
      subtitle: "Trust & Safety",
      description: "All partners undergo strict verification for reliability.",
      icon: <ShieldCheck className="w-6 h-6 text-[#0071E3]" />,
      anim: 'pulse' as const,
      className: "md:col-span-2 bg-white",
      delay: 0.3
    },
    {
      title: "No Inventory Risk",
      subtitle: "On-demand ordering",
      description: "Order only what you need. No holding costs or expiry losses.",
      icon: <Coins className="w-6 h-6 text-[#0071E3]" />,
      anim: 'float' as const,
      className: "bg-white",
      delay: 0.5
    }
  ]

  return (
    <section id="learn-more" className="relative section-padding bg-[#F5F5F7] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/50 blur-[120px] rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100/30 blur-[120px] rounded-full animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-[#0071E3] uppercase bg-blue-50 rounded-full">
            Ecosystem Core
          </span>
          <h2 className="heading-2 mb-6 text-[#1D1D1F]">Platform Capabilities</h2>
          <p className="text-xl text-[#86868B] max-w-2xl mx-auto font-medium leading-relaxed">
            A unified ecosystem designed for healthcare efficiency, speed, and absolute reliability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[280px]">
          {bentoItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: item.delay, ease: [0.16, 1, 0.3, 1] }}
              className={`group glass-card-premium relative p-8 rounded-[32px] overflow-hidden flex flex-col justify-between cursor-default ${item.className}`}
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="p-4 bg-[#F5F5F7] group-hover:bg-white group-hover:shadow-lg group-hover:shadow-blue-500/10 rounded-2xl transition-all duration-500">
                    <MovingIcon type={item.anim}>
                      {item.icon}
                    </MovingIcon>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#86868B] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {item.subtitle}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-[#1D1D1F] mb-4 group-hover:text-[#0071E3] transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="text-[#86868B] font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
              
              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500">
                <ArrowUpRight className="w-6 h-6 text-[#0071E3]" />
              </div>

              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-transparent to-blue-50/0 group-hover:from-blue-50/40 group-hover:to-transparent transition-all duration-1000 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
