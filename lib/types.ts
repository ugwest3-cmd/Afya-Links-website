// API Response Types
export interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  author: string
  createdAt: string
  updatedAt: string
  category: string
  featured: boolean
  image?: string
}

export interface PlatformMetrics {
  ordersProcessed: number
  activeUsers: number
  medicinesSourced: number
  partnersActive: number
  deliveryRate: number
  averageResponseTime: number
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  userType: 'clinic' | 'pharmacy' | 'driver' | 'other'
  message: string
}

export interface ContactResponse {
  success: boolean
  message: string
}

// Feature types
export interface Feature {
  icon: string
  title: string
  description: string
}

export interface Step {
  num: string
  title: string
  description: string
  users: string
}
