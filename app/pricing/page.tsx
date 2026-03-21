import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing - Afya Links',
  description: 'Simple and transparent pricing for clinics, pharmacies, and drivers.',
}

export default function Pricing() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 section-padding">
        <div className="container-custom max-w-3xl">
          <h1 className="heading-1 mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600">
            No hidden fees. Fair margins for all partners. You pay only when transactions succeed.
          </p>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Clinics */}
            <div className="rounded-xl border border-gray-200 p-8 bg-white">
              <h2 className="heading-3 mb-2">🏥 Clinics</h2>
              <p className="text-gray-600 text-sm mb-6">Free registration & ordering</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-success-600">✓</span>
                  <span className="text-gray-700">Zero platform fees</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-success-600">✓</span>
                  <span className="text-gray-700">Free order placement</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-success-600">✓</span>
                  <span className="text-gray-700">Real-time price comparison</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-success-600">✓</span>
                  <span className="text-gray-700">Free delivery confirmations</span>
                </li>
              </ul>
              <button className="btn-primary w-full">Get Started</button>
            </div>

            {/* Pharmacies */}
            <div className="rounded-xl border-2 border-primary-600 p-8 bg-gradient-to-br from-primary-50 to-white shadow-lg relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h2 className="heading-3 mb-2">💊 Pharmacies</h2>
              <p className="text-gray-600 text-sm mb-6">Pay only on successful orders</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-success-600">✓</span>
                  <span className="text-gray-700">Free price list uploads</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-success-600">✓</span>
                  <span className="text-gray-700">5% commission per order</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-success-600">✓</span>
                  <span className="text-gray-700">Invoice generation</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-success-600">✓</span>
                  <span className="text-gray-700">Weekly payouts (500K min)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-success-600">✓</span>
                  <span className="text-gray-700">Dedicated account support</span>
                </li>
              </ul>
              <button className="btn-primary w-full">Get Started</button>
            </div>

            {/* Drivers */}
            <div className="rounded-xl border border-gray-200 p-8 bg-white">
              <h2 className="heading-3 mb-2">🚚 Drivers</h2>
              <p className="text-gray-600 text-sm mb-6">Earn per verified delivery</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-success-600">✓</span>
                  <span className="text-gray-700">Fixed delivery fees</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-success-600">✓</span>
                  <span className="text-gray-700">Verified orders only</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-success-600">✓</span>
                  <span className="text-gray-700">Real-time payment</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-success-600">✓</span>
                  <span className="text-gray-700">Performance bonuses</span>
                </li>
              </ul>
              <button className="btn-primary w-full">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-3xl">
          <h2 className="heading-2 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'When do clinics pay for orders?',
                a: 'Clinics pay drivers directly at delivery (cash) or through the platform (if agreed). No payment to Afya Links.'
              },
              {
                q: 'How do pharmacies withdraw their earnings?',
                a: 'Weekly payouts available every Monday for balances ≥500,000 UGX. You request payout and we transfer via your preferred method.'
              },
              {
                q: 'Are there hidden fees?',
                a: 'No. Pricing is transparent upfront. Clinics pay nothing. Pharmacies pay 5% commission per order. Drivers earn fixed fees per delivery.'
              },
              {
                q: 'What if an order is cancelled?',
                a: 'Cancelled orders by clinics refund 100% to clinic. Pharmacies retain no commission. Drivers are not affected.'
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-lg mb-2 text-gray-900">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
