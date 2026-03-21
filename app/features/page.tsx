import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Features - Afya Links',
  description: 'Explore features for clinics, pharmacies, and drivers on Afya Links.',
}

export default function Features() {
  const clinicFeatures = [
    'Search medicines from verified pharmacies',
    'Compare real-time prices',
    'Place orders with prescriptions',
    'Track delivery in real-time',
    'Push notifications at each order stage',
    'Order history and invoicing',
    'Preferred pharmacy selection',
    'Delivery code verification'
  ]

  const pharmacyFeatures = [
    'Upload periodic price lists',
    'Auto-expiring pricing (48-hour TTL)',
    'Accept or reject orders',
    'Partial acceptance options',
    'Order code generation & tracking',
    'Auto-generated invoices',
    'Payout request management',
    'Commission transparency'
  ]

  const driverFeatures = [
    'Receive verified delivery assignments',
    'Real-time order details',
    'Delivery route optimization',
    'Safety: order code verification',
    'Earnings tracking',
    'Performance ratings',
    'Flexible scheduling',
    'Direct support channel'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 section-padding">
        <div className="container-custom">
          <h1 className="heading-1 mb-6">Powerful Features for Every Partner</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Tailored functionality designed specifically for clinics, pharmacies, and drivers.
          </p>
        </div>
      </section>

      {/* Clinic Features */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">🏥 For Clinics</h2>
              <p className="text-lg text-gray-600 mb-8">
                Sourcing medicines has never been easier. Compare prices, track orders, and ensure you never run out of stock.
              </p>
              <ul className="space-y-3">
                {clinicFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-success-100 text-success-700 flex items-center justify-center text-sm">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl p-8 h-96"></div>
          </div>
        </div>
      </section>

      {/* Pharmacy Features */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-accent-100 to-primary-100 rounded-xl p-8 h-96 order-2 lg:order-1"></div>
            <div className="order-1 lg:order-2">
              <h2 className="heading-2 mb-6">💊 For Pharmacies</h2>
              <p className="text-lg text-gray-600 mb-8">
                Control your prices, manage supply efficiently, and earn recurring revenue from clinic orders without inventory risk.
              </p>
              <ul className="space-y-3">
                {pharmacyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-success-100 text-success-700 flex items-center justify-center text-sm">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Driver Features */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">🚚 For Drivers</h2>
              <p className="text-lg text-gray-600 mb-8">
                Earn fair income with reliable deliveries. Verified orders, transparent payments, and safe routes.
              </p>
              <ul className="space-y-3">
                {driverFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-success-100 text-success-700 flex items-center justify-center text-sm">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-success-100 to-primary-100 rounded-xl p-8 h-96"></div>
          </div>
        </div>
      </section>
    </div>
  )
}
