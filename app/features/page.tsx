import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Features - Afya Links',
  description: 'Explore features for clinics, pharmacies, and drivers on Afya Links.',
}

export default function Features() {
  const clinicFeatures = [
    { title: 'Prevent Stock-Outs', desc: 'Restock medicines quickly when supplies run low' },
    { title: 'Save Time', desc: 'No need to travel to suppliers to place orders' },
    { title: 'Faster Deliveries', desc: 'Drivers deliver medicines directly to your clinic' },
    { title: 'Order Tracking', desc: 'View your dashboard and track orders in real-time' },
    { title: 'Browse & Order', desc: 'Select from multiple verified pharmacies and place orders' },
    { title: 'Secure Payments', desc: 'Pay for orders and confirm deliveries safely' },
    { title: 'Real-time Notifications', desc: 'Get updates at each stage of your order' },
    { title: 'Order History', desc: 'Access all invoices and receipts in one place' }
  ]

  const pharmacyFeatures = [
    { title: 'More Customers', desc: 'Access clinics and drug shops across different areas' },
    { title: 'Digital Orders', desc: 'Receive clear, organized orders directly through app' },
    { title: 'Organized Deliveries', desc: 'Drivers collect and deliver medicines to clinics' },
    { title: 'Increased Sales', desc: 'Grow daily order volume without adding sales staff' },
    { title: 'Order Notifications', desc: 'Get instant alerts when new orders arrive' },
    { title: 'Earnings Dashboard', desc: 'View and track your earnings and payouts' },
    { title: 'Upload Price Lists', desc: 'Manage and update your product pricing easily' },
    { title: 'Digital Invoices', desc: 'Auto-generated invoices for all transactions' }
  ]

  const driverFeatures = [
    { title: 'Receive Requests', desc: 'Get delivery requests from verified orders' },
    { title: 'Earn Delivery Fees', desc: 'Fair payment for each delivery completed' },
    { title: 'Flexible Opportunities', desc: 'Choose when and which deliveries to accept' },
    { title: 'Clear Instructions', desc: 'Know exactly where to pick up and drop off' },
    { title: 'Track Earnings', desc: 'View all payments and earnings in one place' },
    { title: 'Performance Ratings', desc: 'Build reputation through reliable deliveries' },
    { title: 'Safety Verification', desc: 'All orders come with verification codes' },
    { title: 'Direct Support', desc: 'Get help when you need it with dedicated support' }
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
