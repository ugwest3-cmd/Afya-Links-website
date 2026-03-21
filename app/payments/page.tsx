import type { Metadata } from 'next'
import { Stethoscope, Pill, Truck, CreditCard, Wallet, Banknote, ArrowDownCircle, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Payments - Afya Links',
  description: 'Secure and transparent payment processing for clinics, pharmacies, and drivers.',
}

export default function Payments() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 section-padding">
        <div className="container-custom max-w-3xl">
          <h1 className="heading-1 mb-6">Secure & Transparent Payments</h1>
          <p className="text-xl text-gray-600">
            Reliable financial infrastructure for the pharmaceutical supply chain. Fair margins and automated settlements.
          </p>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Clinics */}
            <div className="rounded-2xl border border-gray-100 p-8 bg-white shadow-sm hover:shadow-md transition group">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Stethoscope className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="heading-3 mb-2">Clinics</h2>
              <p className="text-gray-600 text-sm mb-6">Zero platform & ordering fees</p>
              <ul className="space-y-4 mb-8">
                {[
                  'Zero platform registration fees',
                  'Free medicine order placement',
                  'Real-time price comparison',
                  'Secure digital payment options'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success-500" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="btn-primary w-full">Join as Clinic</button>
            </div>

            {/* Pharmacies */}
            <div className="rounded-2xl border-2 border-primary-600 p-8 bg-gradient-to-br from-primary-50/50 to-white shadow-xl relative group">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Partnership
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Pill className="w-6 h-6 text-primary-600" />
              </div>
              <h2 className="heading-3 mb-2">Pharmacies</h2>
              <p className="text-gray-600 text-sm mb-6">Automated settlements & low commission</p>
              <ul className="space-y-4 mb-8">
                {[
                  'Free inventory & price listing',
                  '5% commission per successful order',
                  'Automated digital invoicing',
                  'Weekly payouts (500K UGX min)',
                  'Secure payment escrow protection'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-500" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="btn-primary w-full">Join as Pharmacy</button>
            </div>

            {/* Drivers */}
            <div className="rounded-2xl border border-gray-100 p-8 bg-white shadow-sm hover:shadow-md transition group">
              <div className="w-12 h-12 rounded-xl bg-accent-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Truck className="w-6 h-6 text-accent-600" />
              </div>
              <h2 className="heading-3 mb-2">Logistics</h2>
              <p className="text-gray-600 text-sm mb-6">Earn per verified delivery</p>
              <ul className="space-y-4 mb-8">
                {[
                  'Guaranteed fixed delivery fees',
                  'Fraud-protected verified orders',
                  'Instant wallet settlements',
                  'Performance-based bonuses',
                  'Transparent earning dashboard'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-500" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="btn-primary w-full">Join as Driver</button>
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
