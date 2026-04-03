import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog - Afya Links',
  description: 'Insights, news, and updates from the Afya Links team.',
}

async function getBlogs() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/blogs`, { 
      cache: 'no-store' 
    })
    if (!res.ok) return []
    const data = await res.json()
    return data.blogs || []
  } catch (error) {
    console.error('Error fetching blogs:', error)
    return []
  }
}

export default async function Blog() {
  const blogs = await getBlogs()

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-20 pb-24">
        <div className="container-custom max-w-4xl text-center">
          <h1 className="heading-1 mb-6 mt-12">Our Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights, news, and updates from the Afya Links team.
          </p>
        </div>
      </section>

      {/* Blog List */}
      <section className="-mt-12 mb-32 relative z-10">
        <div className="container-custom">
          {blogs.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold mb-2">No posts yet</h3>
              <p className="text-gray-500">Check back later for updates.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog: any) => (
                <div key={blog.id} className="glass-card-premium rounded-3xl overflow-hidden group flex flex-col h-full bg-white transition-all hover:-translate-y-1">
                  {blog.cover_image && (
                    <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                      <Image 
                        src={blog.cover_image} 
                        alt={blog.title} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex flex-col gap-4 mb-4">
                      {blog.published_at && (
                         <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full w-fit flex items-center gap-2">
                           <Calendar className="w-3 h-3" />
                           {new Date(blog.published_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                         </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-3 flex-1">{blog.excerpt}</p>
                    <Link href={`/blog/${blog.slug}`} className="inline-flex items-center gap-2 text-primary-600 font-semibold group/link mt-auto">
                      Read Article
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
