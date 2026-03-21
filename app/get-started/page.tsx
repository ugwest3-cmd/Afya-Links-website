import type { Metadata } from 'next'
import Image from 'next/image'
import { Download, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Get Started - Afya Links',
  description: 'Download the Afya Links apps and start transforming your pharmaceutical supply chain today.',
}

export default function GetStarted() {
  const apps = [
    {
      id: 'clinic',
      name: 'Clinic App',
      icon: '🏥',
      color: 'bg-blue-600',
      tagline: 'Best for: Private Clinics & Drug Shops',
      desc: 'Sourcing, price comparison, and digital order tracking.',
      downloadUrl: '/downloads/clinic.apk',
      screenshot: '/assets/clinic-preview.jpg'
    },
    {
      id: 'pharmacy',
      name: 'Pharmacy App',
      icon: '💊',
      color: 'bg-primary-600',
      tagline: 'Best for: Wholesales & Distributors',
      desc: 'Inventory management, digital invoicing, and settlement tracking.',
      downloadUrl: '/downloads/pharmacy.apk',
      screenshot: '/assets/pharmacy-preview.jpg'
    },
    {
      id: 'delivery',
      name: 'Driver App',
      icon: '🚚',
      color: 'bg-gray-900',
      tagline: 'Best for: Independent Delivery Drivers',
      desc: 'Verified delivery requests and instant payment settlements.',
      downloadUrl: '/downloads/delivery.apk',
      screenshot: '/assets/clinic-preview.jpg' // Using clinic as fallback or generic
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
        <div className="container-custom text-center max-w-4xl">
          <h1 className="heading-1 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-primary-700 to-gray-900">
            Start Your Journey with Afya Links
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-10">
            Join the digital healthcare ecosystem. Download the relevant app for your role and transform how you source, sell, or deliver medicines.
          </p>
        </div>
      </section>

      {/* App Grid */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-20">
            {apps.map((app, idx) => (
              <div 
                key={app.id} 
                className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
              >
                {/* Content */}
                <div className="flex-1 w-full">
                  <div className={`inline-flex items-center gap-2 px-4 py-1 rounded-full ${app.color} text-white text-xs font-bold uppercase tracking-widest mb-6`}>
                    {app.name}
                  </div>
                  <h2 className="heading-2 mb-4 text-gray-900">{app.tagline}</h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {app.desc}
                  </p>
                  
                  <div className="space-y-4 mb-10">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Direct APK Download (Safe & Verified)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Real-time order synchronization</span>
                    </div>
                  </div>

                  <a 
                    href={app.downloadUrl}
                    download
                    className={`inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gray-900 text-white font-bold hover:bg-black transition-all shadow-xl shadow-gray-200 group w-full sm:w-auto justify-center`}
                  >
                    <Download className="w-5 h-5 transition-transform group-hover:scale-110" />
                    Download {app.name} (APK)
                  </a>
                  
                  <p className="mt-4 text-xs text-gray-400">
                    Version 1.0.2 • Requires Android 7.0+ • ~50MB
                  </p>
                </div>

                {/* Preview */}
                <div className="flex-1 w-full max-w-sm lg:max-w-md">
                  <div className="relative aspect-[9/19] rounded-[3rem] border-[12px] border-gray-900 shadow-2xl overflow-hidden bg-gray-900">
                    <Image 
                      src={app.screenshot} 
                      alt={app.name} 
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-12 items-center">
             <div className="w-20 h-20 rounded-2xl bg-primary-50 flex items-center justify-center shrink-0">
               <ShieldCheck className="w-10 h-10 text-primary-600" />
             </div>
             <div>
               <h3 className="heading-3 mb-4">Secure & Verified Downloads</h3>
               <p className="text-gray-600 leading-relaxed">
                 All APK files listed above are signed and verified by Afya Links Digital Healthcare. We use direct distribution to ensure you get the latest features as soon as they are ready, bypassing store delays.
               </p>
             </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="section-padding bg-white text-center">
        <div className="container-custom">
          <h2 className="heading-3 mb-6">Need help getting set up?</h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Our support team is available to help you with installation and account verification.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a href="mailto:bdplinksapps@gmail.com" className="btn-apple-secondary inline-flex items-center gap-2">
               Email Support
               <ArrowRight className="w-4 h-4" />
             </a>
             <a href="https://wa.me/256760680980" target="_blank" className="btn-apple-secondary !border-green-500 !text-green-600 hover:!bg-green-50 inline-flex items-center gap-2">
               WhatsApp Support
               <Zap className="w-4 h-4 fill-current" />
             </a>
          </div>
        </div>
      </section>
    </div>
  )
}
