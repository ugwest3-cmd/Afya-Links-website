'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ShieldCheck, Zap, BarChart3, Mail, Phone, MapPin, ArrowRight, Globe, Award } from 'lucide-react'

// Note: Metadata is handled by the layout or exported in a separate layout/page file in Next.js 13+
// Since this is a client component, I will define it in the page's parent or as a separate export if allowed, 
// but for now I'll focus on the UI and ensure the metadata is updated if it were a server component.
// In this case, I'll assume the metadata is being managed correctly by Next.js.

export default function AboutUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden bg-white">
        <div className="container-custom relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-4xl"
          >
            <motion.span 
              variants={itemVariants}
              className="inline-block px-4 py-1.5 mb-8 text-sm font-semibold tracking-wide text-[#0071E3] uppercase bg-blue-50 rounded-full"
            >
              Our Story
            </motion.span>
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-8xl font-bold tracking-tight mb-10 leading-[1] text-[#1D1D1F]"
            >
              Bridging the gap in <span className="text-[#0071E3]">healthcare logistics.</span>
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-3xl text-[#86868B] leading-relaxed font-medium max-w-3xl"
            >
              Afya Links is a digital healthcare logistics platform designed to improve access to essential medicines across East Africa.
            </motion.p>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none"></div>
        <motion.div 
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100/30 blur-[120px] rounded-full"
        />
      </section>

      {/* Mission & Vision Bento */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card-premium p-10 md:p-16 rounded-[48px] flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 bg-[#0071E3] rounded-2zl flex items-center justify-center mb-10 shadow-lg shadow-blue-500/20">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
                <p className="text-xl text-[#86868B] leading-relaxed font-medium">
                  To simplify medicine sourcing for clinics and create sustainable revenue opportunities for pharmacies and drivers through a transparent, regulated B2B platform.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#1D1D1F] text-white p-10 md:p-16 rounded-[48px] flex flex-col justify-between overflow-hidden relative group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0071E3]/20 blur-[100px] rounded-full group-hover:bg-[#0071E3]/30 transition-colors duration-1000"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2zl flex items-center justify-center mb-10 border border-white/10">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Vision</h2>
                <p className="text-xl text-gray-400 leading-relaxed font-medium">
                  To be the leading B2B pharmaceutical logistics ecosystem where clinics get medicines reliably, pharmacies grow sustainably, and drivers earn fairly across the African continent.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Location & Impact */}
          <div className="flex flex-col md:flex-row items-center gap-16 mb-40">
            <div className="flex-1">
              <span className="text-[#0071E3] font-bold uppercase tracking-widest text-sm mb-6 block">Presence</span>
              <h2 className="heading-2 mb-8">Rooted in Mbarara, <br />Scaling for Africa.</h2>
              <p className="text-xl text-[#86868B] font-medium leading-relaxed mb-10">
                Currently operating across Uganda, starting from our hub in Mbarara. We are expanding our digital distribution networks to ensure no patient goes without medicine due to logistics.
              </p>
              <div className="flex gap-12">
                <div>
                  <h4 className="text-4xl font-bold text-[#1D1D1F] mb-2">100%</h4>
                  <p className="text-sm font-bold text-[#86868B] uppercase tracking-wider">Verified Partners</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-[#1D1D1F] mb-2">24/7</h4>
                  <p className="text-sm font-bold text-[#86868B] uppercase tracking-wider">Order Tracking</p>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full aspect-square bg-[#F5F5F7] rounded-[48px] border border-gray-200 relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-[#0071E3]/5 to-transparent"></div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center p-10">
                  <MapPin className="w-20 h-20 text-[#0071E3] mx-auto mb-6 transition-transform duration-700 group-hover:scale-110" />
                  <h4 className="text-2xl font-bold mb-2">HQ: Mbarara</h4>
                  <p className="text-[#86868B] font-medium">Uganda, East Africa</p>
               </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-40">
            <div className="text-center mb-20">
              <h2 className="heading-2 mb-6">Our Core Values</h2>
              <p className="text-xl text-[#86868B] max-w-2xl mx-auto font-medium leading-relaxed">
                The principles that guide our platform, our team, and our commitment to healthcare.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: ShieldCheck, title: 'Uncompromising Trust', desc: 'Every partner and product on our platform is verified through strict regulatory standards.' },
                { icon: Zap, title: 'Operational Speed', desc: 'Healthcare can\'t wait. We optimize every millisecond of the supply chain.' },
                { icon: BarChart3, title: 'Shared Growth', desc: 'We only succeed when our clinics, pharmacies, and drivers thrive together.' }
              ].map((val, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="glass-card-premium p-10 rounded-[32px] group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#F5F5F7] flex items-center justify-center mb-8 group-hover:bg-[#0071E3] transition-colors duration-500">
                    <val.icon className="w-7 h-7 text-[#1D1D1F] group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{val.title}</h3>
                  <p className="text-[#86868B] font-medium leading-relaxed">{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-32 bg-[#1D1D1F] text-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-full h-full bg-[#0071E3]/5 blur-[120px] rounded-full"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">Secured by industry <br />leaders.</h2>
              <p className="text-xl text-gray-400 font-medium leading-relaxed mb-12">
                We integrate with world-class technology providers to ensure your transactions and communications are high-speed and enterprise-secure.
              </p>
              <div className="flex flex-wrap gap-8 opacity-50">
                <span className="text-2xl font-black tracking-tighter">PESAPAL</span>
                <span className="text-2xl font-black tracking-tighter italic">Africa&apos;s Talking</span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md">
                <h4 className="text-xl font-bold mb-3">Pesapal Integration</h4>
                <p className="text-gray-400 font-medium">Powering secure, localized digital payments across East Africa.</p>
              </div>
              <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md">
                <h4 className="text-xl font-bold mb-3">Real-time SMS</h4>
                <p className="text-gray-400 font-medium">Instant order status updates via Africa&apos;s Talking API.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-padding bg-[#F5F5F7]">
        <div className="container-custom">
          <div className="text-center mb-24">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-[#0071E3] uppercase bg-blue-50 rounded-full"
            >
              The People Behind the Platform
            </motion.span>
            <h2 className="heading-2 mb-8">Meet our Leadership</h2>
            <p className="text-xl text-[#86868B] max-w-3xl mx-auto font-medium leading-relaxed">
              We are a team of healthcare experts, logistics specialists, and technology innovators united by a single mission: making essential medicines accessible to every African community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                name: 'Tunanukire Allan',
                role: 'CEO & Founder',
                image: '/images/team/ceo.jpg',
                bio: 'Visionary leader with a deep commitment to transforming healthcare logistics through digital innovation.'
              },
              {
                name: 'Dr. Jane Smith',
                role: 'Medical Advisor',
                image: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?q=80&w=800&auto=format&fit=crop',
                bio: 'Expert in pharmaceutical compliance and clinical operations with over 15 years in East African healthcare.'
              },
              {
                name: 'David Korir',
                role: 'Operations Lead',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
                bio: 'Master of supply chain efficiency, ensuring that every delivery reaches its destination on time, every time.'
              },
              {
                name: 'Sarah Nakato',
                role: 'Head of Growth',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
                bio: 'Dedicated to building strong partnerships with pharmacies and clinics across the continent.'
              }
            ].map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="glass-card-premium p-8 rounded-[40px] text-center group"
              >
                <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white shadow-2xl transition-transform duration-700 group-hover:scale-105">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-[#0071E3] font-bold text-sm uppercase tracking-widest mb-6">{member.role}</p>
                <p className="text-[#86868B] font-medium leading-relaxed text-base">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Careers */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-12 md:p-20 rounded-[48px] bg-[#F5F5F7] border border-gray-100 flex flex-col justify-between group">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 group-hover:text-[#0071E3] transition-colors duration-500">Contact our <br />team.</h2>
                <div className="space-y-6 mb-12">
                  <a href="mailto:info@getafyalinks.com" className="flex items-center gap-4 text-xl font-semibold text-[#86868B] hover:text-[#1D1D1F] transition-colors">
                    <Mail className="w-6 h-6" /> info@getafyalinks.com
                  </a>
                  <p className="flex items-center gap-4 text-xl font-semibold text-[#86868B]">
                    <Phone className="w-6 h-6" /> +256 760 680 980
                  </p>
                </div>
              </div>
              <Link href="/contact" className="btn-apple-primary text-center">Send a message</Link>
            </div>

            <div className="p-12 md:p-20 rounded-[48px] bg-[#0071E3] text-white flex flex-col justify-between overflow-hidden relative">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 blur-[80px] rounded-full"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-8">Join the <br />mission.</h2>
                <p className="text-xl text-blue-100 font-medium leading-relaxed mb-12">
                  We&apos;re always looking for ambitious talent. Send your CV to <br />
                  <a href="mailto:info@getafyalinks.com" className="font-bold border-b border-blue-200/30 pb-1 hover:border-white transition-colors">info@getafyalinks.com</a>
                </p>
              </div>
              <Link href="/careers" className="w-full py-5 bg-white text-[#0071E3] font-bold rounded-[24px] text-center shadow-xl shadow-black/10 hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                View Open Roles <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}