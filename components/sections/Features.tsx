export default function Features() {
  const features = [
    {
      icon: '⚡',
      title: 'Faster Medicine Supply',
      description: 'Clinics receive medicines quickly without traveling to wholesalers. Orders are processed and delivered within hours.'
    },
    {
      icon: '📈',
      title: 'Reliable Distribution',
      description: 'Wholesale pharmacies expand their reach to more clinics through our coordinated delivery network.'
    },
    {
      icon: '🚚',
      title: 'Efficient Logistics',
      description: 'Drivers are connected to real delivery jobs with transparent payment terms and earning tracking.'
    },
    {
      icon: '📱',
      title: 'Digital Order Management',
      description: 'Orders are tracked and confirmed digitally. Real-time updates from placement to delivery confirmation.'
    },
    {
      icon: '🔒',
      title: 'Verified Partners',
      description: 'All clinics, pharmacies, and drivers undergo strict verification for reliability and compliance.'
    },
    {
      icon: '💰',
      title: 'No Inventory Risk',
      description: 'Order only what you need. No holding costs, no expiry losses, and no inventory management headaches.'
    },
  ]

  return (
    <section id="learn-more" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Key Benefits</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Faster medicine supply, reliable distribution, and efficient digital order management for all partners.
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
