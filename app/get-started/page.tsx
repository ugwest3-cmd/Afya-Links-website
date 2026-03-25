import type { Metadata } from 'next'
import Image from 'next/image'
import { Download, ArrowRight, ShieldCheck, ClipboardCheck, UserCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Get Started - Afya Links',
  description: 'Download the Afya Links apps and start transforming your pharmaceutical supply chain today.',
}

export default function GetStarted() {
  const apps = [
    {
      id: 'clinic',
      name: 'Clinic App',
      icon: <Image src="/assets/clinic-icon.png" alt="Clinic App" width={48} height={48} />,
      themeColor: 'blue',
      bgColor: 'bg-blue-500',
      tagline: 'For Private Clinics & Drug Shops',
      desc: 'Source medicines, compare prices, and track orders in real-time.',
      downloadUrl: '/downloads/clinic_app-release.apk',
      screenshot: '/assets/clinic-preview.jpg',
      steps: [
        'Download the Clinic App',
        'Enter phone number + OTP',
        'Upload business license',
        'Wait for admin verification',
        'Start ordering!'
      ]
    },
    {
      id: 'pharmacy',
      name: 'Pharmacy App',
      icon: <Image src="/assets/pharmacy-icon.png" alt="Pharmacy App" width={48} height={48} />,
      themeColor: 'primary',
      bgColor: 'bg-primary-600',
      tagline: 'For Wholesales & Distributors',
      desc: 'Manage inventory, handle digital invoicing, and track settlements.',
      downloadUrl: '/downloads/pharmacy_app-release.apk',
      screenshot: '/assets/pharmacy-preview.jpg',
      steps: [
        'Download the Pharmacy App',
        'Enter business details',
        'Upload pharmacy license',
        'Upload business registration',
        'Wait for verification',
        'Upload price list CSV',
        'Start receiving orders!'
      ]
    },
    {
      id: 'delivery',
      name: 'Driver App',
      icon: <Image src="/assets/delivery-icon.png" alt="Driver App" width={48} height={48} />,
      themeColor: 'gray',
      bgColor: 'bg-gray-900',
      tagline: 'For Independent Delivery Drivers',
      desc: 'Get verified delivery requests and receive instant payments.',
      downloadUrl: '/downloads/delivery_app-release.apk',
      screenshot: '/assets/delivery-preview.jpg',
      steps: [
        'Download the Driver App',
        'Create account with phone number',
        'Provide vehicle information',
        'Accept terms & conditions',
        'Verification approval',
        'Start accepting deliveries!'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container-custom relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm font-bold text-gray-600 uppercase tracking-widest">Direct Distribution</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#1D1D1F] tracking-tight mb-8 leading-[1.1]">
            One platform.<br />
            <span className="text-[#0071E3]">Three specialized apps.</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#86868B] leading-relaxed mb-12 max-w-2xl mx-auto font-medium">
            Everything you need to digitize your pharmaceutical supply chain, available for direct download.
          </p>
        </div>
        
        {/* Abstract background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10">
          <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] bg-blue-100/40 blur-[100px] rounded-full" />
          <div className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] bg-primary-100/30 blur-[100px] rounded-full" />
        </div>
      </section>

      {/* App Grid */}
      <section className="pb-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-32">
            {apps.map((app, idx) => (
              <div 
                key={app.id} 
                className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 lg:gap-24 items-start`}
              >
                {/* Content */}
                <div className="flex-1 w-full bg-white rounded-[40px] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
                  <div className={`w-16 h-16 rounded-2xl ${app.bgColor} text-white flex items-center justify-center mb-8 shadow-lg`}>
                    {app.icon}
                  </div>
                  <h2 className="text-4xl font-black text-[#1D1D1F] mb-4">{app.name}</h2>
                  <p className="text-lg font-bold text-[#0071E3] mb-6 uppercase tracking-wider">{app.tagline}</p>
                  <p className="text-lg text-[#86868B] mb-10 leading-relaxed font-medium">
                    {app.desc}
                  </p>
                  
                  {/* Registration Steps */}
                  <div className="mb-12">
                    <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-6 flex items-center gap-2">
                       <ClipboardCheck className="w-5 h-5 text-[#0071E3]" />
                       Registration Steps
                    </h3>
                    <div className="space-y-4">
                      {app.steps.map((step, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-4">
                          <div className={`w-6 h-6 rounded-full ${app.bgColor} text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5`}>
                            {sIdx + 1}
                          </div>
                          <span className="text-gray-700 font-medium leading-tight">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href={app.downloadUrl}
                      download
                      className={`flex items-center gap-4 px-8 py-4 rounded-2xl bg-[#1D1D1F] text-white hover:bg-black transition-all group shadow-2xl shadow-gray-900/20`}
                    >
                      <div className="bg-white/10 rounded-lg p-2 group-hover:bg-white/20 transition-colors">
                        <Download className="w-6 h-6" />
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] uppercase font-black tracking-[0.2em] text-white/50 leading-none mb-1">Download APK</p>
                        <p className="text-xl font-bold leading-none">{app.name}</p>
                      </div>
                    </a>
                  </div>
                  
                  <div className="mt-8 flex items-center gap-6 text-xs text-gray-400 font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-green-500" />
                      Verified Secure
                    </span>
                    <span>v1.0.2</span>
                    <span>Android 7.0+</span>
                  </div>
                </div>

                {/* Preview Frame */}
                <div className="flex-1 w-full max-w-sm lg:max-w-md mx-auto lg:mx-0 pt-10 lg:pt-20">
                  <div className="relative aspect-[9/19] rounded-[3.5rem] border-[12px] border-[#1D1D1F] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden bg-white">
                    {/* Inner frame elements */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-[#1D1D1F] rounded-b-[20px] z-20"></div>
                    
                    <Image 
                      src={app.screenshot} 
                      alt={app.name} 
                      fill
                      className="object-contain p-4 transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  {/* Subtle ground shadow */}
                  <div className="w-[80%] h-4 bg-black/10 blur-xl rounded-full mx-auto mt-10"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Verification Section */}
      <section className="section-padding bg-[#1D1D1F] text-white overflow-hidden relative">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="w-20 h-20 rounded-[24px] bg-[#0071E3] flex items-center justify-center mb-8 shadow-2xl shadow-blue-500/40">
                <ShieldCheck className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                Secure distribution.<br />
                <span className="text-gray-500">No store delays.</span>
              </h2>
              <div className="space-y-6">
                {[
                  { title: 'Verified Identity', desc: 'Every APK is cryptographically signed and verified by Afya Links.' },
                  { title: 'Instant Updates', desc: 'Get the latest features and security patches immediately.' },
                  { title: 'Privacy First', desc: 'No tracking, no ads. Just professional healthcare tools.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
               <div className="absolute inset-0 bg-[#0071E3] blur-[150px] opacity-20 rounded-full" />
               <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[40px] p-12 relative overflow-hidden">
                  <h3 className="text-2xl font-bold mb-6">Partner Requirements</h3>
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-4">
                      <UserCheck className="w-6 h-6 text-[#0071E3]" />
                      <span className="font-medium">Valid Healthcare or Business License</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-4">
                      <UserCheck className="w-6 h-6 text-green-500" />
                      <span className="font-medium">Verified Phone Number (National ID)</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-4">
                      <UserCheck className="w-6 h-6 text-primary-500" />
                      <span className="font-medium">Approved Physical Business Location</span>
                    </div>
                  </div>
                  <div className="mt-10 p-6 rounded-3xl bg-blue-600 shadow-xl shadow-blue-600/20">
                    <p className="text-lg font-bold mb-2">Need bulk setup?</p>
                    <p className="text-blue-100 text-sm mb-6">Contact our deployment team for multi-branch configurations.</p>
                    <a href="/contact" className="inline-flex items-center gap-2 text-white font-bold hover:gap-4 transition-all">
                      Contact Partner Support
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="section-padding bg-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl font-black mb-6">Need help getting set up?</h2>
          <p className="text-xl text-[#86868B] mb-12 max-w-2xl mx-auto font-medium">
            Our specialized support team is available 24/7 to help you with installation and account verification.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <a href="mailto:info@afyalinks.com" className="btn-apple-secondary inline-flex items-center gap-3 !px-10">
               Email Support
               <ArrowRight className="w-5 h-5" />
             </a>
             <a href="https://wa.me/256760680980" target="_blank" className="btn-apple-secondary !border-green-500 !text-green-600 hover:!bg-green-50 inline-flex items-center gap-3 !px-10">
               WhatsApp Support
               <Zap className="w-5 h-5 fill-current" />
             </a>
          </div>
        </div>
      </section>
    </div>
  )
}
