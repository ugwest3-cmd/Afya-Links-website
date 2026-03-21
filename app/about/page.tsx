import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Afya Links - B2B Medicine Sourcing Platform',
  description: 'Learn about Afya Links mission to transform B2B medicine sourcing in Africa through transparency, efficiency, and trust.',
}

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">About Afya Links</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We&apos;re reimagining B2B medicine sourcing in Africa by connecting verified clinics, pharmacies, and drivers through a transparent, efficient, and trustworthy platform.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="heading-3 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To simplify medicine sourcing for clinics and create sustainable revenue opportunities for pharmacies and drivers through a transparent, regulated B2B platform.
              </p>
            </div>
            <div>
              <h2 className="heading-3 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                A leading B2B pharmaceutical logistics ecosystem where clinics get medicines reliably, pharmacies grow sustainably, and drivers earn fairly.
              </p>
            </div>
          </div>

          {/* Values */}
          <div>
            <h2 className="heading-2 mb-8 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { emoji: '🤝', title: 'Trust', desc: 'Verification, compliance, and transparency in every transaction.' },
                { emoji: '⚡', title: 'Efficiency', desc: 'Fast order processing, real-time tracking, and quick settlements.' },
                { emoji: '📈', title: 'Impact', desc: 'Enabling sustainable growth for all partners in the ecosystem.' }
              ].map((val, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-gray-50 border border-gray-200">
                  <div className="text-4xl mb-4">{val.emoji}</div>
                  <h3 className="heading-3 mb-2">{val.title}</h3>
                  <p className="text-gray-600">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-2 mb-12 text-center">How We Operate</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="heading-3 mb-2">No Inventory Holding</h3>
                <p className="text-gray-600">We don&apos;t hold stock. We connect buyers and sellers directly, acting as a transaction orchestrator.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="heading-3 mb-2">Verified Partners Only</h3>
                <p className="text-gray-600">All clinics, pharmacies, and drivers undergo strict verification. We maintain compliance with regulatory standards.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="heading-3 mb-2">Transparent Pricing</h3>
                <p className="text-gray-600">Clinics see real-time prices from multiple pharmacies. No hidden fees. Fair margins for all parties.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
              <div>
                <h3 className="heading-3 mb-2">Real-Time Tracking</h3>
                <p className="text-gray-600">Every order is tracked from creation to delivery confirmation via order codes and driver assignment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
