'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-apple border-b border-gray-200/50 py-3' : 'bg-transparent py-5'
    }`}>
      <nav className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="relative w-64 h-16 flex items-center justify-center transition-transform group-hover:scale-105">
            <Image 
              src="/assets/logo.png" 
              alt="Afya Links Logo" 
              width={256} 
              height={64} 
              className="w-full h-full object-contain drop-shadow-sm" 
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {[
            { name: 'About', href: '/about-us' },
            { name: 'Features', href: '/features' },
            { name: 'Blog', href: '/blog' },
            { name: 'Contact', href: '/contact' }
          ].map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="text-sm font-medium text-[#86868B] hover:text-[#1D1D1F] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/get-started" className="btn-apple-primary !py-2.5 !px-6 !text-sm flex items-center gap-2 group shadow-lg shadow-blue-500/10">
            Get Started
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#1D1D1F] hover:bg-gray-100 rounded-full transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-white z-40 p-6 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-6">
            {[
              { name: 'About', href: '/about-us' },
              { name: 'Features', href: '/features' },
              { name: 'Blog', href: '/blog' },
              { name: 'Contact', href: '/contact' }
            ].map((item) => (
              <div key={item.name} className="py-2">
                <Link 
                  href={item.href}
                  className="text-2xl font-semibold text-[#1D1D1F]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </div>
            ))}
            <div className="pt-6 border-t border-gray-100 flex flex-col gap-4">
              <Link href="/get-started" className="btn-apple-primary !py-4 text-center text-lg flex items-center justify-center gap-2" onClick={() => setIsOpen(false)}>
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
