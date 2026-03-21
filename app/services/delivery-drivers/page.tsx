import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Delivery Opportunities - Afya Links',
  description: 'Join Afya Links as a delivery rider and connect with medicine delivery jobs between pharmacies and clinics.',
}

export default function DeliveryDrivers() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20 md:py-32">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6 text-primary-500">Delivery Opportunities</h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              Join our network of independent riders and help deliver essential medicines from pharmacies to clinics in your area. 
              Earn fair fees and enjoy flexible working hours.
            </p>
            <Link href="/register" className="btn-primary">
              Become a Rider
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-2 mb-8">Benefits for Riders</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Receive Requests', desc: 'Get order notifications directly on your smartphone.', icon: '🔔' },
                  { title: 'Earn Delivery Fees', desc: 'Receive competitive payments for every successful delivery.', icon: '💰' },
                  { title: 'Flexible Schedule', desc: 'Choose when to work and which jobs to accept.', icon: '🗓️' },
                  { title: 'Clear Instructions', desc: 'In-app maps and pickup/drop-off details for every order.', icon: '🗺️' }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm">
                    <div className="text-3xl mb-4">{item.icon}</div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
                 <Image 
                   src="https://lh3.googleusercontent.com/sitesv/APaQ0SSNX8DVoIvpmJNGJIaIiU3QM1JURDbFEly6BJ1sHsFjZQ2JGNjcpHr0Q_k0KvH7rGidm6qWtH0LKSL7LZME7bIbv0J6WiUOrBVtDyqhnKjIDHc_6GJBHvoucDC-Y6BunL_bCkENGfRBCNfh-AgEDEdRhDM5mfpvwUHVlx-sybnQntoBdag0tvVoitSZYIiJSv_MNP-pZlCBaTB5AluvZlMMAoUYds-N7kdBbb8=w1280" 
                   alt="Delivery Driver App Interface" 
                   width={600}
                   height={800}
                   className="rounded-xl shadow-2xl w-full max-w-sm mx-auto h-auto"
                 />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary-600 text-white text-center">
        <div className="container-custom">
          <h2 className="heading-2 mb-6 text-white">Ready to start delivering?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Sign up now and become a vital part of the pharmaceutical supply chain in Uganda.
          </p>
          <Link href="/register" className="btn-secondary bg-white text-primary-600 border-none hover:bg-gray-100 px-12">
            Register Now
          </Link>
        </div>
      </section>
    </div>
  )
}