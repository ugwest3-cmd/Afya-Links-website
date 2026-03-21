'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="container-custom flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/assets/logo.png" alt="Afya Links" width={56} height={56} className="w-14 h-14" />
          <span className="hidden sm:inline font-bold text-xl text-gray-900 leading-none">Afya Links</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/about-us" className="text-gray-600 hover:text-gray-900 transition">About</Link>
          <Link href="/features" className="text-gray-600 hover:text-gray-900 transition">Features</Link>
          <Link href="/pricing" className="text-gray-600 hover:text-gray-900 transition">Pricing</Link>
          <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition">Blog</Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition">Contact</Link>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/register" className="btn-secondary text-sm">
            Register Now
          </Link>
          <a href="#download" className="btn-primary text-sm">
            Download App
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-gray-50">
          <div className="container-custom py-4 space-y-3">
            <Link href="/about-us" className="block text-gray-600 hover:text-gray-900">About</Link>
            <Link href="/features" className="block text-gray-600 hover:text-gray-900">Features</Link>
            <Link href="/pricing" className="block text-gray-600 hover:text-gray-900">Pricing</Link>
            <Link href="/blog" className="block text-gray-600 hover:text-gray-900">Blog</Link>
            <Link href="/contact" className="block text-gray-600 hover:text-gray-900">Contact</Link>
            <div className="flex flex-col gap-2 pt-2">
              <Link href="/register" className="btn-secondary text-center">Register</Link>
              <a href="#download" className="btn-primary text-center">Download App</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
