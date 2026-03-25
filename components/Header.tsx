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
        <Link href="/" className="relative flex-shrink-0 flex items-center group h-16 w-64 lg:w-80">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] sm:w-[500px] lg:w-[650px] h-32 flex items-center justify-start transition-transform group-hover:scale-105 pointer-events-none z-0">
            <Image 
              src="/assets/logo.png" 
              alt="Afya Links Logo" 
              width={650} 
              height={128} 
              className="w-full h-full object-contain drop-shadow-sm" 
              priority
            />
          </div>
        </Link>
        
        {/* Navigation and CTA Group */}
        <div className="flex-1 flex items-center justify-end gap-6 lg:gap-10">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {[
              { name: 'About', href: '/about-us' },
              { name: 'Features', href: '/features' },
              { name: 'Blog', href: '/blog' },
              { name: 'Contact', href: '/contact' }
            ].map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="text-sm font-medium text-[#86868B] hover:text-[#1D1D1F] transition-colors relative z-10"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-6 relative z-10">
            <Link href="/get-started" className="btn-apple-primary !py-2.5 !px-6 !text-sm flex items-center gap-2 group shadow-lg shadow-blue-500/10">
              Get Started
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
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
