import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For Wholesale Pharmacies - Afya Links',
  description: 'Expand your distribution, reach more clinics, and manage orders digitally with Afya Links.',
}

export default function ForPharmacies() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-accent-600 to-accent-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">Expand Your Distribution</h1>
            <p className="text-xl opacity-90 leading-relaxed mb-8">
              Afya Links allows wholesale pharmacies to receive orders from clinics that need medicines urgently, 
              connecting you with new customers without requiring additional sales staff.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/register" className="btn-primary bg-white text-accent-700 hover:bg-accent-50 border-none">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 lg:order-1">
               <img 
                  src="https://lh3.googleusercontent.com/sitesv/APaQ0SQKjF_WPKbSEhiChTIKl3ufD5159sVkjJmbSKxS78c-biadH962l763e6GfCHZh6d2PA-hRymZG3Mjhy338nHhsPk2MwF_1UPSgpHhQ7BRgheDYFm83GXsL-njiHuQ9VBUN2yUrYOBH1tFgBwLnsNk77_LkpmEMRtUXZUwMlzxVeAWm7FgKo9MJQDU7RlDu76_KyrZWC8EVEVXTuI0UD_t4RfYttUe7Tg2X5iQ=w1280" 
                  alt="Expand Your Distribution" 
                  className="rounded-2xl shadow-xl w-full border border-gray-100"
                />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="heading-2 mb-6">Benefits for Wholesale Pharmacies</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: 'More Customers', desc: 'Access clinics and drug shops across different areas instantly.', icon: '🌍' },
                  { title: 'Digital Orders', desc: 'Receive crystal clear orders directly through the platform.', icon: '📱' },
                  { title: 'Organized Deliveries', desc: 'Independent riders handle the logistics for you.', icon: '📦' },
                  { title: 'Increased Sales', desc: 'Grow your daily order volume without increasing overhead.', icon: '📈' }
                ].map((benefit, i) => (
                  <div key={i} className="space-y-3">
                    <span className="text-3xl">{benefit.icon}</span>
                    <h3 className="font-bold text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Powerful Merchant Tools</h2>
            <p className="text-gray-600">Manage your entire wholesale business from a single dashboard.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              { 
                title: 'View Orders', 
                img: 'https://lh3.googleusercontent.com/sitesv/APaQ0STeN5WTOBXa-e3K4stNZlOfm2t3OSmF8vyxXHu8vmaKOiAxzjK2Rsyx55IvdQ-35dFc0MlHZSADqPDoFlDccxH0fJAQG81x4Vp_PAf0vFy9rwWxL482ThseXs_TZv1qLHV34XoZJVqUpq6YPVGvyx8AcnimBrcafYBtvhCpPsURhOgfF31gSRfFFNo=w1280',
                desc: 'See all incoming, pending, and completed orders in one place.'
              },
              { 
                title: 'Order Notifications', 
                img: 'https://lh3.googleusercontent.com/sitesv/APaQ0STRfxSx6vTRBA1nfyVseT_BwNbeU1OTjeaIdPz4S4NR8R66zeJzzpcxGBGMDI59prY1n_t7bkHpKnVwm8YG2-HNKSTk2dVHBrY5oLTFIkKAfV-WRxfBBV31VHfc4myPlmuqFJfRO3RQzvy0Z_9J6M1YzQACy5xi9n4Np7Khx9qNtWobvXmVUB13=w1280',
                desc: 'Never miss an opportunity with real-time web and app notifications.'
              },
              { 
                title: 'Upload Drug List', 
                img: 'https://lh3.googleusercontent.com/sitesv/APaQ0STh6YGl6AGbyki90z7FBjbxnP2j-tw6Fy5QEtJPPAsnRTxts4jjGnGKq7lzUV9zny9Q-d0rqiNJ28eHtOLHEJGzFd_3SOgemI_J17PTa2lmx7fhb546vUM7hPbdfGZ9OVDF50qLjCrDfE9FgHoyoBfLBJRZ3N8Nrnsd11Q8E402V9MZhrjQg25s=w1280',
                desc: 'Quickly sync your inventory so clinincs see what you have in stock.'
              },
              { 
                title: 'View Your Earnings', 
                img: 'https://lh3.googleusercontent.com/sitesv/APaQ0SSvQCQQpdPxUSC25tPvq4S3ZvkCMDnCS-o53HJb0a0pps0NnLOAsW61a67fP6DvNdjOEb3j52ZWpmXxTuUDhf350tohkA5fhmSse_9UlVVEr_9XWZD6fD7F0A68GCuuKf71xrmReRO0asz0ziE6Wg3h-mPdPf0=w1280',
                desc: 'Track your revenue, commissions, and payout status with ease.'
              }
            ].map((tool, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition">
                <div className="p-6">
                   <h3 className="font-bold text-gray-900 mb-2">{tool.title}</h3>
                   <p className="text-gray-600 text-sm mb-4">{tool.desc}</p>
                </div>
                <img src={tool.img} alt={tool.title} className="w-full h-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}