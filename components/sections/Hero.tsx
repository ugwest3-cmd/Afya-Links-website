import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
            🚀 Simplifying B2B Medicine Sourcing
          </div>

          <h1 className="heading-1 mb-6 text-gray-900">
            A Digital Platform for
            <span className="gradient-text"> Fast Medicine Supply</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Afya Links connects clinics to trusted wholesale pharmacies for fast medicine supply and reliable delivery. Place orders through our app, receive medicines within hours, and grow your healthcare business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/register" className="btn-primary inline-block">
              Get Started Free
            </Link>
            <a href="#learn-more" className="btn-secondary inline-block">
              Learn How It Works
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-primary-600">10K+</p>
              <p className="text-sm text-gray-600">Active Orders</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-accent-600">500+</p>
              <p className="text-sm text-gray-600">Partners</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-success-600">99%</p>
              <p className="text-sm text-gray-600">Delivery Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
