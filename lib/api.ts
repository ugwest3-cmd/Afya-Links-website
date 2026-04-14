import { BlogPost, PlatformMetrics, ContactFormData, ContactResponse } from './types'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://afya-links-production.up.railway.app/api'

class ApiClient {
  private baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  private async fetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
      })

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`)
      }

      return await response.json() as T
    } catch (error) {
      console.error(`Fetch error from ${url}:`, error)
      throw error
    }
  }

  // Blog endpoints
  async getBlogPosts(limit?: number): Promise<BlogPost[]> {
    const query = limit ? `?limit=${limit}` : ''
    return this.fetch<BlogPost[]>(`/blogs${query}`)
  }

  async getBlogPost(slug: string): Promise<BlogPost> {
    return this.fetch<BlogPost>(`/blogs/${slug}`)
  }

  // Metrics endpoints
  async getPlatformMetrics(): Promise<PlatformMetrics> {
    return this.fetch<PlatformMetrics>('/metrics')
  }

  // Contact endpoint
  async submitContactForm(data: ContactFormData): Promise<ContactResponse> {
    return this.fetch<ContactResponse>('/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }
}

export const apiClient = new ApiClient(API_BASE_URL)
