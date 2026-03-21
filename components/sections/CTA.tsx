import Image from 'next/image'
import Link from 'next/link'

export default function CTA() {
  const apps = [
    { name: 'Clinic App', icon: 'clinic-app', link: 'https://play.google.com/store/apps/details?id=com.afyalinks.clinic' },
    { name: 'Pharmacy App', icon: 'pharmacy-app', link: 'https://play.google.com/store/apps/details?id=com.afyalinks.pharmacy' },
    { name: 'Delivery App', icon: 'delivery-app', link: 'https://play.google.com/store/apps/details?id=com.afyalinks.driver' },
  ]

  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-600 text-white">
      <div className="container-custom text-center">
        <h2 className="heading-2 mb-4 text-white">Ready to Transform Your Medicine Sourcing?</h2>
        <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
          Join hundreds of clinics and pharmacies already using Afya Links to streamline operations and grow their business.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/register" className="px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
            Get Started Free
          </Link>
          <Link href="/contact" className="px-8 py-3 bg-white/20 border border-white text-white font-semibold rounded-lg hover:bg-white/30 transition-colors">
            Schedule a Demo
          </Link>
        </div>

        {/* App Download */}
        <div id="download" className="mt-12">
          <p className="text-sm text-gray-200 mb-6">Download our apps:</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {apps.map((app, idx) => (
              <a
                key={idx}
                href={app.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-col items-center gap-3 px-6 py-4 bg-white/10 border border-white/30 rounded-lg hover:bg-white/20 transition"
              >
                <Image src={`/assets/${app.icon}.png`} alt={app.name} width={48} height={48} className="w-12 h-12 rounded" />
                <span className="text-sm font-semibold">{app.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
