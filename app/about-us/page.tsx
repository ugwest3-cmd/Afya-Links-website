import type { Metadata } from 'next'
import Link from 'next/link'
import { ShieldCheck, Zap, BarChart3, Mail, Phone, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Afya Links - B2B Medicine Sourcing Platform',
  description: 'Learn about Afya Links mission to transform B2B medicine sourcing in Africa through transparency, efficiency, and trust.',
}

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6 text-gray-900">About Afya Links</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Afya Links is a digital healthcare logistics platform designed to improve access to essential medicines. 
              We connect clinics, drug shops, wholesale pharmacies, and delivery drivers for efficient medicine sourcing and delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <h2 className="heading-3 mb-4 text-primary-600">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To simplify medicine sourcing for clinics and create sustainable revenue opportunities for pharmacies and drivers through a transparent, regulated B2B platform.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <h2 className="heading-3 mb-4 text-accent-600">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the leading B2B pharmaceutical logistics ecosystem where clinics get medicines reliably, pharmacies grow sustainably, and drivers earn fairly across the region.
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="heading-2 mb-4">Our Location</h2>
            <p className="text-lg text-gray-600">
              Afya Links operates in <strong>Uganda, Mbarara</strong> and aims to expand medicine distribution networks across the East African region.
            </p>
          </div>

          {/* Core Values */}
          <div>
            <h2 className="heading-2 mb-12 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: ShieldCheck, title: 'Trust', desc: 'Verification, compliance, and transparency in every transaction.' },
                { icon: Zap, title: 'Efficiency', desc: 'Fast order processing, real-time tracking, and quick settlements.' },
                { icon: BarChart3, title: 'Impact', desc: 'Enabling sustainable growth for all partners in the ecosystem.' }
              ].map((val, idx) => (
                <div key={idx} className="p-8 rounded-xl bg-gray-50 border border-gray-100 text-center hover:shadow-md transition group">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center transition-transform group-hover:scale-110">
                      <val.icon className="w-8 h-8 text-primary-600" />
                    </div>
                  </div>
                  <h3 className="heading-3 mb-4">{val.title}</h3>
                  <p className="text-gray-600">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Payments */}
      <section className="section-padding bg-gray-900 text-gray-300">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="heading-2 mb-6 text-white">Technology & Payments</h2>
            <p className="text-lg leading-relaxed">
              Afya Links uses secure payment infrastructure to process digital transactions between clinics and pharmacies. 
              Our platform is built on trusted African payment and communication providers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-6 items-start">
              <div className="bg-primary-600/20 p-4 rounded-lg">
                <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Pesapal</h3>
                <p>We leverage Pesapal for secure online payment processing, ensuring that transactions between healthcare providers are smooth, protected, and localized for East Africa.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-accent-600/20 p-4 rounded-lg">
                <svg className="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Africa&apos;s Talking</h3>
                <p>We use Africa&apos;s Talking for SMS notifications and communication services, keeping all participants informed throughout the delivery lifecycle.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Compliance */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-primary-50 rounded-3xl p-8 md:p-12 border border-primary-100">
            <h2 className="heading-2 mb-8 text-center text-primary-900">Safety & Compliance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed font-medium">Afya Links is designed to support the healthcare supply chain by connecting licensed clinics and pharmaceutical suppliers.</p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-3">
                    <span className="text-primary-600 font-bold">✓</span>
                    Facilitate medicine ordering between providers
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary-600 font-bold">✓</span>
                    Improve distribution efficiency
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary-600 font-bold">✓</span>
                    Maintain transparent order tracking
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <p className="text-gray-600 italic">
                  &quot;Afya Links does not manufacture medicines and does not alter pharmaceutical products. All participants are responsible for complying with applicable healthcare regulations.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gray-50 border-t border-gray-200" id="contact">
        <div className="container-custom">
          <h2 className="heading-2 mb-12 text-center">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 text-center group">
              <div className="flex justify-center mb-4">
                 <div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm">
                   <Mail className="w-6 h-6 text-primary-600" />
                 </div>
              </div>
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-gray-600">info@afyalinks.com</p>
            </div>
            <div className="p-6 text-center group">
              <div className="flex justify-center mb-4">
                 <div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm">
                   <Phone className="w-6 h-6 text-primary-600" />
                 </div>
              </div>
              <h3 className="font-bold mb-2">Phone</h3>
              <p className="text-gray-600">+256 760 680 980</p>
            </div>
            <div className="p-6 text-center group">
              <div className="flex justify-center mb-4">
                 <div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm">
                   <MapPin className="w-6 h-6 text-primary-600" />
                 </div>
              </div>
              <h3 className="font-bold mb-2">Location</h3>
              <p className="text-gray-600">Uganda, Mbarara</p>
            </div>
          </div>
          <div className="mt-12 text-center">
             <Link href="/register" className="btn-primary">Join Afya Links Today</Link>
          </div>
        </div>
      </section>
    </div>
  )
}