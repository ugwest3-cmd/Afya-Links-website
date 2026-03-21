import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

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
              <h2 className="heading-2 mb-6 text-gray-900 border-l-4 border-primary-600 pl-6">For Clinics</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Sourcing medicines has never been easier. Compare prices, track orders, and ensure you never run out of stock.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {clinicFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <CheckCircle2 className="w-5 h-5 text-success-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-gray-700 font-medium">
                      {feature.title}
                    </span>
                  </li>
                ))}
              </ul>
              <Link 
                href="/get-started" 
                className="btn-apple-primary inline-flex items-center gap-3 !px-8 !py-4 shadow-xl shadow-blue-500/20"
              >
                Get Started with Clinic App
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative rounded-2xl h-[600px] shadow-2xl border-8 border-gray-900 overflow-hidden group">
               <Image 
                 src="/assets/clinic-preview.jpg" 
                 alt="Clinic App Preview" 
                 fill
                 className="object-cover"
               />
               <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <p className="text-white font-bold text-xl uppercase tracking-widest">Clinic Interface</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pharmacy Features */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl h-[600px] shadow-2xl border-8 border-gray-900 overflow-hidden group order-2 lg:order-1">
               <Image 
                 src="/assets/pharmacy-preview.jpg" 
                 alt="Pharmacy App Preview" 
                 fill
                 className="object-cover"
               />
               <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <p className="text-white font-bold text-xl uppercase tracking-widest">Pharmacy Interface</p>
               </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="heading-2 mb-6 text-gray-900 border-l-4 border-accent-600 pl-6">For Pharmacies</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Control your prices, manage supply efficiently, and earn recurring revenue from clinic orders without inventory risk.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {pharmacyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100">
                    <CheckCircle2 className="w-5 h-5 text-accent-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-gray-700 font-medium">
                      {feature.title}
                    </span>
                  </li>
                ))}
              </ul>
              <Link 
                href="/get-started" 
                className="btn-apple-primary !bg-accent-600 hover:!bg-accent-700 inline-flex items-center gap-3 !px-8 !py-4 shadow-xl shadow-accent-500/20"
              >
                Get Started with Pharmacy App
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Driver Features */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6 text-gray-900 border-l-4 border-success-600 pl-6">For Drivers</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Earn fair income with reliable deliveries. Verified orders, transparent payments, and safe routes.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {driverFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <CheckCircle2 className="w-5 h-5 text-success-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-gray-700 font-medium">
                      {feature.title}
                    </span>
                  </li>
                ))}
              </ul>
              <Link 
                href="/get-started" 
                className="btn-apple-primary !bg-gray-900 hover:!bg-black inline-flex items-center gap-3 !px-8 !py-4 shadow-xl shadow-gray-500/20"
              >
                Get Started with Driver App
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-success-100 to-primary-100 rounded-2xl h-[500px] shadow-inner relative overflow-hidden group">
               <div className="absolute inset-0 bg-white/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <p className="font-semibold text-success-900">Driver App Preview</p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
