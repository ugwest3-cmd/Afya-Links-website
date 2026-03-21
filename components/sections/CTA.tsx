import Image from 'next/image'
import Link from 'next/link'

export default function CTA() {
  const apps = [
    { name: 'Clinic App', icon: 'logo', link: '/get-started' },
    { name: 'Pharmacy App', icon: 'logo', link: '/get-started' },
    { name: 'Delivery App', icon: 'logo', link: '/get-started' },
  ]

  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-600 text-white">
      <div className="container-custom text-center">
        <h2 className="heading-2 mb-4 text-white">Ready to Transform Your Medicine Sourcing?</h2>
        <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
          Join hundreds of clinics and pharmacies already using Afya Links to streamline operations and grow their business.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/get-started" className="px-8 py-3 bg-white text-[#0071E3] font-semibold rounded-xl hover:bg-gray-50 transition-all shadow-lg hover:scale-105">
            Get Started Now
          </Link>
          <Link href="/contact" className="px-8 py-3 bg-white/10 border-2 border-white/50 text-white font-semibold rounded-xl hover:bg-white/20 transition-all">
            Schedule a Demo
          </Link>
        </div>

        {/* App Download */}
        <div id="download" className="mt-12">
          <p className="text-sm text-gray-200 mb-6">Download our apps:</p>
          <div className="flex flex-wrap gap-6 justify-center">
            {apps.map((app, idx) => (
              <Link
                key={idx}
                href="/get-started"
                className="inline-flex items-center gap-4 px-8 py-4 bg-white/10 border border-white/20 rounded-2xl hover:bg-white/20 transition-all group backdrop-blur-sm"
              >
                <div className="p-2 bg-white rounded-xl shadow-sm">
                  <Image src={`/assets/${app.icon}.png`} alt={app.name} width={40} height={40} className="w-10 h-10 object-contain" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest text-white/60 font-bold mb-0.5">Download for Android</p>
                  <p className="text-lg font-bold text-white">{app.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
