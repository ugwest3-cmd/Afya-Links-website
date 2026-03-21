import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Afya Links',
  description: 'Latest news, insights, and updates from the Afya Links team.',
}

export default function Blog() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 section-padding">
        <div className="container-custom max-w-3xl">
          <h1 className="heading-1 mb-6">Afya Links Blog</h1>
          <p className="text-xl text-gray-600">
            Latest news, insights, and updates on B2B medicine sourcing and pharmaceutical logistics.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder Cards */}
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-accent-100"></div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-gray-600">March {idx}, 2026</span>
                    <span className="text-sm font-semibold text-primary-600">Business</span>
                  </div>
                  <h3 className="heading-3 mb-2 line-clamp-2">Article Title {idx}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    Read our latest insights on B2B medicine sourcing and how Afya Links is transforming the industry.
                  </p>
                  <a href="#" className="text-primary-600 font-semibold hover:underline">
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State for Dynamic Content */}
          <div className="mt-12 p-12 bg-blue-50 border-2 border-dashed border-blue-300 rounded-lg text-center">
            <p className="text-gray-600 mb-4">
              Blog posts will be pulled from your backend API once integrated.
            </p>
            <p className="text-sm text-gray-500">
              Update NEXT_PUBLIC_API_BASE_URL in environment variables and connect the blog API endpoint.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
