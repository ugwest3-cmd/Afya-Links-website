'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { MapPin, Clock, ArrowLeft, Send, CheckCircle2, ChevronRight } from 'lucide-react'

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

export default function CareerDetailPage() {
  const { id } = useParams()
  const router = useRouter()
  const [career, setCareer] = useState<Career | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCareer() {
      try {
        const res = await fetch(`https://afya-links-production.up.railway.app/api/careers/${id}`)
        const data = await res.json()
        if (data.success) {
          setCareer(data.career)
        }
      } catch (error) {
        console.error('Error fetching career:', error)
      } finally {
        setLoading(false)
      }
    }

    if (id) fetchCareer()
  }, [id])

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-40 gap-4 min-h-screen">
        <div className="w-10 h-10 border-4 border-[#0071E3] border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  if (!career) {
    return (
      <div className="container-custom pt-40 pb-20 text-center min-h-screen">
        <h1 className="text-4xl font-bold mb-6">Position not found</h1>
        <p className="text-[#86868B] mb-8">The job listing you&apos;re looking for might have been closed or removed.</p>
        <button onClick={() => router.back()} className="btn-apple-primary">
          Go Back
        </button>
      </div>
    )
  }

  return (
    <main className="pt-32 pb-24 bg-white text-[#1D1D1F]">
      <div className="container-custom">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 mb-12 animate-fade-in">
            <Link href="/careers" className="text-sm font-medium text-[#86868B] hover:text-[#0071E3] transition-colors">Careers</Link>
            <ChevronRight className="w-4 h-4 text-[#86868B]" />
            <span className="text-sm font-bold text-[#1D1D1F] truncate max-w-[200px]">{career.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left Column: Details */}
            <div className="lg:col-span-2 space-y-12">
              <header>
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-[#0071E3]/10 text-[#0071E3] text-xs font-bold uppercase tracking-wider">
                    {career.type}
                  </span>
                  <div className="flex items-center gap-1.5 text-sm font-bold text-[#86868B]">
                    <MapPin className="w-4 h-4" /> {career.location}
                  </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
                  {career.title}
                </h1>
                <div className="w-20 h-1.5 bg-[#0071E3] rounded-full"></div>
              </header>

              <section className="prose prose-lg max-w-none text-[#424245]">
                <h3 className="text-2xl font-bold text-[#1D1D1F] mb-6">About the role</h3>
                <div className="whitespace-pre-wrap leading-relaxed">
                  {career.description}
                </div>
              </section>

              {career.requirements && career.requirements.length > 0 && (
                <section>
                  <h3 className="text-2xl font-bold text-[#1D1D1F] mb-8">Requirements</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {career.requirements.map((req, i) => (
                      <div key={i} className="flex gap-4 p-6 rounded-2xl bg-[#F5F5F7]/50 border border-gray-100 group hover:border-[#0071E3]/20 transition-colors">
                        <CheckCircle2 className="w-6 h-6 text-[#0071E3] flex-shrink-0" />
                        <span className="font-medium text-[#424245]">{req}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Right Column: CTA Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                <div className="bg-[#1D1D1F] text-white rounded-[2rem] p-10 overflow-hidden relative group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#0071E3]/20 blur-[60px] rounded-full group-hover:bg-[#0071E3]/40 transition-colors duration-500"></div>
                  
                  <h3 className="text-2xl font-bold mb-4 relative z-10">Interested?</h3>
                  <p className="text-gray-400 font-medium mb-10 relative z-10">We&apos;d love to hear from you. Applications are reviewed on a rolling basis.</p>
                  
                  <a 
                    href={`mailto:info@getafyalinks.com?subject=Application for ${career.title}`}
                    className="w-full h-16 bg-[#0071E3] hover:bg-[#0077ED] active:scale-[0.98] text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-all relative z-10 shadow-xl shadow-blue-500/10"
                  >
                    Apply for this position <Send className="w-5 h-5" />
                  </a>
                  
                  <div className="mt-8 pt-8 border-t border-white/5 space-y-4">
                    <Benefit icon={Clock} text="Reviewed within 48h" />
                    <Benefit icon={ArrowLeft} text="Flexible interview process" />
                  </div>
                </div>

                <div className="bg-[#F5F5F7] rounded-[2rem] p-8 border border-gray-100">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-[#86868B] mb-6">Next Steps</h4>
                  <p className="text-[#424245] font-medium text-sm leading-relaxed">
                    Once you apply, our recruitment team will review your application. If there&apos;s a match, we&apos;ll reach out for a 30-minute introductory call.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </main>
  )
}

function Benefit({ icon: Icon, text }: { icon: any, text: string }) {
  return (
    <div className="flex items-center gap-3 text-sm font-medium text-gray-300">
      <Icon className="w-4 h-4 text-[#0071E3]" />
      {text}
    </div>
  )
}
