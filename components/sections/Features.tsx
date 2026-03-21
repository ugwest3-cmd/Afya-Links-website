export default function Features() {
  const features = [
    {
      icon: '🏥',
      title: 'For Clinics',
      description: 'Access multiple verified pharmacies, compare prices, track orders in real-time, and ensure medicine availability without holding inventory.'
    },
    {
      icon: '💊',
      title: 'For Pharmacies',
      description: 'Receive structured orders from verified clinics, manage prices, control supply, and grow revenue through transparent commission structure.'
    },
    {
      icon: '🚚',
      title: 'For Drivers',
      description: 'Get assigned verified deliveries with clear payment terms, track earnings, and build a reliable income as part of our network.'
    },
    {
      icon: '🔒',
      title: 'Verified Partners',
      description: 'All clinics, pharmacies, and drivers undergo strict verification. Compliance layer ensures regulatory standards are met.'
    },
    {
      icon: '📊',
      title: 'Transparency',
      description: 'Real-time order tracking, price visibility, invoice generation, and detailed reporting for all stakeholders.'
    },
    {
      icon: '⚡',
      title: 'Fast Integration',
      description: 'Easy registration process, straightforward API, and dedicated support to get you onboard in hours, not weeks.'
    },
  ]

  return (
    <section id="learn-more" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Why Choose Afya Links?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built specifically for the African pharmacy ecosystem. Trusted by clinics and pharmacies across the region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
