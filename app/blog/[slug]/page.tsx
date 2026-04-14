import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar } from 'lucide-react'
import ReactMarkdown from 'react-markdown'

async function getBlog(slug: string) {
  const envUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const prodUrl = 'https://afya-links-production.up.railway.app/api';
  
  const urlsToTry = [envUrl, prodUrl].filter(Boolean) as string[];

  for (const baseUrl of urlsToTry) {
    try {
      const res = await fetch(`${baseUrl}/blogs/${slug}`, { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.blog) return data.blog;
      }
      if (res.status === 404) return null;
    } catch (error) {
      console.error(`Error fetching from ${baseUrl}:`, error);
    }
  }
  return null;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blog = await getBlog(params.slug)
  if (!blog) return { title: 'Not Found' }
  return {
    title: `${blog.title} - Afya Links Blog`,
    description: blog.excerpt,
    openGraph: {
      images: blog.cover_image ? [{ url: blog.cover_image }] : []
    }
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const blog = await getBlog(params.slug)

  if (!blog) notFound()

  return (
    <article className="min-h-screen bg-[#F5F5F7] pb-24">
      {/* Hero Section */}
      <header className="bg-white border-b border-gray-200">
        <div className="container-custom max-w-4xl pt-16 pb-16">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary-600 font-medium mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            {blog.published_at && (
              <span className="flex items-center gap-2 font-medium bg-gray-100 px-3 py-1 rounded-full">
                <Calendar className="w-4 h-4" />
                {new Date(blog.published_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            )}
          </div>
          <h1 className="heading-1 mb-6 !text-4xl md:!text-5xl">{blog.title}</h1>
          {blog.excerpt && <p className="text-xl text-gray-600 mb-8">{blog.excerpt}</p>}
        </div>
      </header>

      <div className="container-custom max-w-4xl -mt-8 relative z-10">
        {/* Cover Image */}
        {blog.cover_image && (
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-xl mb-16 bg-white">
            <Image 
              src={blog.cover_image} 
              alt={blog.title} 
              fill 
              className="object-cover" 
              priority
            />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-lg max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
          <ReactMarkdown>
            {blog.content}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  )
}
