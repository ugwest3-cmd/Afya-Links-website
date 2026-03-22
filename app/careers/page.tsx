'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { MapPin, ArrowRight, Briefcase, Users, Zap, Globe } from 'lucide-react'

interface Career {
  id: string
  title: string
  location: string
  type: string
  description: string
  requirements: string[]
  is_active: boolean
  created_at: string
}

export default function CareersPage() {
  const [careers, setCareers] = useState<Career[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCareers() {
      try {
        const res = await fetch('https://afya-links-production.up.railway.app/api/careers')
        const data = await res.json()
        if (data.success) {
          setCareers(data.careers || [])
        }
      } catch (error) {
        console.error('Error fetching careers:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCareers()
  }, [])

  return (
    <div className="min-h-screen bg-white text-[#1D1D1F]">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-[#F5F5F7]">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 mb-8 animate-fade-in shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#0071E3] animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#1D1D1F]">We&apos;re Hiring</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
                Shape the future of <span className="text-[#0071E3]">digital health</span> in Africa.
              </h1>
              <p className="text-[#86868B] text-xl md:text-2xl font-medium leading-relaxed mb-12 max-w-2xl mx-auto">
                Join a world-class team building the infrastructure for the next generation of pharmaceutical distribution.
              </p>
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-24 border-b border-gray-100">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <CultureItem 
                icon={Zap}
                title="Innovation First"
                description="We're solving complex logistics problems with elegant, digital-first solutions."
              />
              <CultureItem 
                icon={Users}
                title="User Centered"
                description="Every line of code we write is aimed at making healthcare more accessible."
              />
              <CultureItem 
                icon={Globe}
                title="Global Vision"
                description="Building local solutions with global standards of excellence and security."
              />
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="py-24" id="openings">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Open Positions</h2>
                <p className="text-[#86868B] font-medium">Find your next challenge at Afya Links.</p>
              </div>
              <div className="px-6 py-3 bg-[#F5F5F7] rounded-2xl border border-gray-200">
                <span className="text-sm font-bold text-[#1D1D1F]">{careers.length} Roles available</span>
              </div>
            </div>

            {loading ? (
              <div className="flex flex-col items-center justify-center py-20 gap-4">
                <div className="w-10 h-10 border-4 border-[#0071E3] border-t-transparent rounded-full animate-spin"></div>
                <p className="text-[#86868B] font-medium">Loading opportunities...</p>
              </div>
            ) : careers.length === 0 ? (
              <div className="bg-[#F5F5F7] rounded-3xl p-20 text-center border border-dashed border-gray-300">
                <Briefcase className="w-12 h-12 text-[#86868B] mx-auto mb-6 opacity-20" />
                <h3 className="text-xl font-bold mb-2">No open roles right now</h3>
                <p className="text-[#86868B] font-medium mb-8">We&apos;re always looking for talent. Send your CV to careers@afyalinks.com</p>
                <Link href="/contact" className="text-[#0071E3] font-bold inline-flex items-center gap-1 hover:underline">
                  Contact HR <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6">
                {careers.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Perks Section */}
        <section className="py-24 bg-[#1D1D1F] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0071E3]/10 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mb-16">
              <h2 className="text-4xl font-bold tracking-tight mb-6">Why join Afya Links?</h2>
              <p className="text-gray-400 text-lg">Beyond the mission, we provide the environment for you to do your best work.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <PerkItem title="Remote Work" desc="Flexible work arrangements for a healthy life-work balance." />
              <PerkItem title="Competitive Pay" desc="Best-in-class salaries and performance-based bonuses." />
              <PerkItem title="Grow Fast" desc="Unlimited learning opportunities in a rapidly scaling startup." />
              <PerkItem title="Impact" desc="See your work directly improve healthcare access for millions." />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

function CultureItem({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <div className="group">
      <div className="w-12 h-12 rounded-2xl bg-[#F5F5F7] flex items-center justify-center mb-6 group-hover:bg-[#0071E3]/5 transition-colors">
        <Icon className="w-6 h-6 text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors" />
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-[#86868B] font-medium leading-relaxed">{description}</p>
    </div>
  )
}

function JobCard({ job }: { job: Career }) {
  return (
    <Link 
      href={`/careers/${job.id}`}
      className="group block bg-white border border-gray-200 rounded-3xl p-8 hover:border-[#0071E3] hover:shadow-2xl hover:shadow-[#0071E3]/5 transition-all duration-500"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-[#F5F5F7] text-[10px] font-bold uppercase tracking-wider text-[#86868B] group-hover:bg-[#0071E3]/10 group-hover:text-[#0071E3] transition-colors">
              {job.type}
            </span>
            <span className="flex items-center gap-1 text-[11px] font-bold text-[#86868B]">
              <MapPin className="w-3 h-3" /> {job.location}
            </span>
          </div>
          <h3 className="text-2xl font-bold leading-tight group-hover:text-[#0071E3] transition-colors mb-2">
            {job.title}
          </h3>
          <p className="text-[#86868B] font-medium line-clamp-2 max-w-2xl">
            {job.description}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-[#0071E3] group-hover:border-[#0071E3] transition-all duration-500">
            <ArrowRight className="w-5 h-5 text-[#1D1D1F] group-hover:text-white transition-colors rotate-[-45deg] group-hover:rotate-0 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </Link>
  )
}

function PerkItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
      <h4 className="text-lg font-bold mb-3">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed font-medium">{desc}</p>
    </div>
  )
}
